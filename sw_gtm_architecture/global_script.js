var script = document.createElement('script');
script.src = "https://rcdfcdn.mars.com/consent-management/gtm_performance.js";
document.getElementsByTagName('head')[0].appendChild(script);

// var includePerformanceScript = function (file, head) {
//     var script = document.createElement("script");
//     script.src = file;
//     script.type = "text/plain";
// 	script.className = "optanon-category-2";
//     script.async = true;

//     head.appendChild(script);
// };

// var includeTargetingScript = function (file, head) {
//     var script = document.createElement("script");
//     script.src = file;
//     script.type = "text/plain";
// 	script.className = "optanon-category-4";
//     script.async = true;

//     head.appendChild(script);
// };

// var includeNoConsentScript = function (file, head) {
//     var script = document.createElement("script");
//     script.src = file;
//     script.type = "text/javascript";
//     script.async = true;

//     head.appendChild(script);
// };

// var getUrlHostPath = function () {
//     var parser = document.createElement("a");
//     parser.href = document.getElementById("global-script").src;
//     var pathsArray = parser.pathname.split("/");
//     pathsArray.splice(-1, 1);
//     var pathDir = pathsArray.join("/");

//     return parser.protocol + "//" + parser.hostname + pathDir + "/";
// };

// var head = document.getElementsByTagName("head")[0];
// var scriptsPath = getUrlHostPath();

// includePerformanceScript(scriptsPath + "gtm_performance.js", head);
// includeTargetingScript(scriptsPath + "gtm_media.js", head);
// includeNoConsentScript(scriptsPath + "gtm_nocookie.js", head);