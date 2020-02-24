NOTES ON THE SALESFORCE AUTODOWNLOADER SCRIPT:

- Runs in Chrome and Firefox
- Must be run on page where log download links are available
- You must add an exception for the salesfore URL in your popup blocker, otherwise the script will not work
- Does not ask for a download folder - specify this in advance.



INSTALLATION INSTRUCTIONS:

1. Insert script into link below to convert, ensuring all comments (//comment) and new-line characters have been removed. As the current script is vanillaJS, no extra libraries or scripts are requried.
https://mrcoles.com/bookmarklet/

2. see link below for instructions on installing a Bookmarklet script
https://mreidsma.github.io/bookmarklets/installing.html



MAINTENANCE INSTRUCTIONS / NOTES FOR DEVS

This script is fairly hacky, and will probably break in the future, should the salesForce web design change.
The original script is not commented, however isn't complicated - it simply gets the href attributes of every <a> tag where className = "actionLink" on the page.
After the user confirms the amount of links, each is navigated to by the browser in new tabs. Each should close shortly after, with the lot of downloads queued.
