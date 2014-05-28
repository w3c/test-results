/* jshint unused: false */

exports.excludeFile = function (file) {
    if (/html-imports/.test(file)) return true;
    if (/the-input-element\/datetime.html/.test(file)) return true;
    return false;
    // /html/dom/reflection-obsolete.html ?
};

exports.excludeCase = function (file, name) {
    if (name === "null") return true;
    if (/Table/.test(name) && /(sort|stopSorting)/.test(name)) return true;
    if (/sortable|sorted/.test(name)) return true;
    if (/HTML(Menu|Details|Dialog)/.test(name)) return true;
    if (/(summary|details|menu|menuitem)\./.test(name)) return true;
    if (/is(Protocol|Content)HandlerRegistered/.test(name)) return true;
    if (/unregister(Protocol|Content)Handler/.test(name)) return true;
    if (/cssElementMap|contextMenu|forceSpellCheck/.test(name)) return true;
    if (/scoped|command|srcset|seamless|:dir|:progress|dialog/.test(name)) return true;
    if (/(before|append|after|replace)\(/.test(name)) return true;
    if (/HD\(/.test(name)) return true;
    if (/transferControlToProxy|setContext|supportsContext/.test(name)) return true;
    if (/item(Id|Scope|Type|Ref|Prop|Value)/.test(name)) return true;
    if (/(CanvasRenderingContext2D|CanvasPattern|TextMetrics|DrawingStyle|CanvasProxy|Path|ImageBitmap)/.test(name)) return true;
    if (/(valueAsDate|inputMode)/.test(name)) return true;
    if (/Worker|WebSocket|MessageChannel|MessagePort|PortCollection|CloseEvent|MessageEvent|Storage|EventSource/.test(name)) return true;
    if (/marquee|applet|frameset/i.test(name)) return true;
    if (/^(frame|dir|font)\./i.test(name)) return true;
    if (/FrameSet|Frame|Directory|HTMLFont/.test(name)) return true;
    if (/datetime|week|month|reportValidity/i.test(name)) return true;
    // CONTENTIOUS
    // I'm pretty sure the tabIndex tests aren't right
    if (/tabIndex/i.test(name)) return true;
    return false;
};
