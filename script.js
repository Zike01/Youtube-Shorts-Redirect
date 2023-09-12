// ==UserScript==
// @name         Youtube Shorts Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  redirects from youtube shorts to the normal player
// @author       Zike Komakoma
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// @require https://code.jquery.com/jquery-3.7.1.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

/* Check if user is in youtube shorts carousel, then run main function */
waitForKeyElements ("#shorts-container", main);

function main() {
    'use strict';
     /* Grab shorts url and redirect to watch */
     var currentUrl = window.location.href;
     var url = currentUrl.split("/").slice(-1);
     window.location.replace("https://www.youtube.com/watch?v="+url);
};
