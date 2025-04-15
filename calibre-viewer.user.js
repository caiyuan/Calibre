// ==UserScript==
// @name         calibre-viewer
// @namespace    https://github.com/caiyuan/Calibre
// @version      0.1
// @description  calibre-viewer
// @author       Ryan
// @include      *://*:8080/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    /* 展示目录时的样式 */

    GM_addStyle("#book-overlay:has(.simple-tree) {font-weight: lighter; display: contents !important;}");
    GM_addStyle("#book-overlay:has(.simple-tree) > div {min-width: 450px; max-width: 550px !important;}");
    GM_addStyle("#book-overlay:has(.simple-tree) .main-top-bar {left: auto !important;}");
    GM_addStyle("#book-overlay:has(.simple-tree) .main-top-bar a {width: 0;}");


    /* 内容置于屏幕中央 */

    GM_addStyle("@media screen and (min-width: 1200px) { #book-left-margin {padding-left: 0%; margin-right: 3%; filter: invert(5%);} }");
    GM_addStyle("@media screen and (min-width: 1200px) { #book-right-margin {padding-right: 0%; margin-left: 3%; filter: invert(5%);} }");

    GM_addStyle("@media screen and (max-width: 1200px) { #book-left-margin {margin-right: 3%; filter: invert(5%);} }");
    GM_addStyle("@media screen and (max-width: 1200px) { #book-right-margin {margin-left: 3%; filter: invert(5%);} }");


    /* 朗读时能手动翻页 */

    GM_addStyle("@media screen and (min-width: 1200px) { #book-read-aloud-overlay {margin-left: 15%; margin-right: 15%; width: 70% !important;} }");
    GM_addStyle("@media screen and (max-width: 1200px) { #book-read-aloud-overlay {margin-left: 3%; margin-right: 3%; width: 94% !important;} }");

    GM_addStyle("#book-read-aloud-overlay > div {position: fixed; right: 0;}");


    /* 仅展示指定语音项 */

    const languages = ["zh-", "en-US"];

    setInterval(() => {
        const select = document.querySelector('select[id^="auto-id-"]');
        if (!select) return;

        Array.from(select.options).forEach(option => {
            option.style.display = "none";
            languages.forEach(lang => {
                if(option.text.includes(lang)) {
                    option.style.display = "block";
                }
            });
        });

    }, 1000);

})();
