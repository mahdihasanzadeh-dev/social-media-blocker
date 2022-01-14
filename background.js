chrome.webRequest.onBeforeRequest.addListener(() => {   
    return { redirectUrl: "http://www.google.com/"}
},{urls:[
    "*://*.twitter.com/*",
    "*://*.instagram.com/*",
    "*://*.linkedin.com/*",
    "*://*.facebook.com/*",
    "*://*.snapchat.com/*",
    "*://*.tiktok.com/*",
]},
["blocking"]
);