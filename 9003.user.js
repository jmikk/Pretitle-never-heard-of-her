// ==UserScript==
// @name         Set New Title Pretitle
// @namespace    https://www.nationstates.net/
// @version      1.1
// @description  Sets the text content of the newtitlepretitle <div> to a user-defined constant.
// @author       Your Name
// @match        https://www.nationstates.net/nation=9003
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // User-defined constant for newtitlepretitle
    const NEW_TITLE_PRETITLE = "The Got So sick of waiting for someone to notice him he wrote his own script to change his pretitle to be extra long of";

    // Function to set the new title pretitle
        // Find the <div> with the class 'newtitlepretitle' and update its text content
        let pretitleDiv = document.querySelector(".newtitlepretitle");
        if (pretitleDiv) {
            pretitleDiv.textContent = NEW_TITLE_PRETITLE;
            console.log(`newtitlepretitle set to: ${NEW_TITLE_PRETITLE}`);
        } else {
            console.error("newtitlepretitle <div> not found.");
        }


})();
