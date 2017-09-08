# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.firefox.options import Options
import unittest, time, re
import json
import argparse
import glob
import os, sys

base_url = "http://td.spec-ops.io:8000/tools/runner/index.html"

# opts = Options() ;
# opts.log.level = "debug"


def runTests(testData):
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)

    driver.get(base_url + "?path=/annotation-model/annotations")
    main_window_handle = None
    while not main_window_handle:
        main_window_handle = driver.current_window_handle
        driver.find_element_by_id("dumpit").click()
        driver.find_element_by_xpath("//button[@type='submit']").click()
    # now we are cooking...
    popup_window_handle = None
    while not popup_window_handle:
        for handle in driver.window_handles:
            if handle != main_window_handle:
                popup_window_handle = handle
                break

    # we are in the child window.  paste the input into that window until it goes away

    testCount = 0

    while popup_window_handle:
        testCount += 1
        print "Running test {} in window {}".format(testCount, popup_window_handle)
        # operate in the popup
        driver.switch_to.window(popup_window_handle)
        runElement = driver.find_element_by_id("annotation-run")
        while not runElement.get_attribute("value") == "Check JSON":
            print "Waiting..."
            time.sleep(0.5)
        driver.find_element_by_id("annotation-input").clear()
        driver.execute_script("document.getElementById('annotation-input').value = '" + testData +"'");
        # driver.find_element_by_id("annotation-input").send_keys(testData)
        print "Running..."
        runElement.click()
        # switch back to the parent
        print "Switching to parent..."
        driver.switch_to.window(main_window_handle)
        popup_window_handle = None
        print "Waiting a moment"
        time.sleep(1)
        print "Looking for popup..."
        for handle in driver.window_handles:
            if handle != main_window_handle:
                print "Found it!"
                popup_window_handle = handle
                break

    # there is no child window any longer - we must be done
    # driver.switch_to_window(main_window_handle)
    time.sleep(1)
    output = None
    try:
        output = driver.execute_script("return document.getElementsByTagName('textarea')[0].value");
    except:
        print "Failed to get results from driver window"

    driver.quit()

    return output


if __name__ == "__main__":
    parser = argparse.ArgumentParser("Get input files")
    parser.add_argument('files', metavar="F", nargs="+", help="An annotation to test")
    args = parser.parse_args()
    files = []

    for path in args.files:
        files.extend(glob.glob(path))

    # clear argv
    while len(sys.argv)>1:
        sys.argv.pop()

    for input in files:
        testOutput = None
        print "reading " + input
        testData = open(input, "r").read()
        testData = re.sub('\n', ' ', testData)
        testData = re.sub('\'', '\\\'', testData)
        print "starting test"

        testOutput = runTests(testData)

        target = os.path.basename(input)
        target = re.sub("\.anno", '.json', target)

        if testOutput:
            print "Writing " + target

            try:
                out = open(target, "w")
                out.write(testOutput)
                out.close()
            except:
                print("Failed to create "+target)
            else:
                print("Saved results to " + target)
        else:
            print "No output from test"
