# Firefox add-ons
Some firefox extensions inspired from<br>
https://github.com/mpascucci/firefox_extensions
<br>
<pre>
Firefox add-ons to
    - Google Stackoverflow with 'gs', or
    - Duckduckgo Stackoverflow with 'ds'
prefix in the address bar.


Firefox extensions:
    - duckduckgo_stackoverflow - prefix the search with 'ds' in the address bar
    - google_stackoverflow - prefix the search with 'gs' in the address bar

To search using the Stackoverflow engine,
add Stackoverflow as a search engine (from the Firefox address bar),
then assign the shortcut letter 's' for it
(from the Firefox settings for search engines).


--------------------
For developing only:
    - in the address bar type about:debugging
    - click on 'This Firefox' on the left
    - click on 'Load Temporary Add-on...'
    - browse to specific add-on directory
    - select any file, then click 'Open'.

    
To load the (unsigned) add-ons from a local file
    - Firefox Extended Support Release (ESR), Firefox Developer Edition
        and Nightly versions of Firefox will allow you to override
        the setting to enforce the extension signing requirement,
        by changing the preference xpinstall.signatures.required 
        to false in the Firefox Configuration Editor (about:config page).        
    - To override the language pack signing requirement,
        you would set the preference extensions.langpacks.signatures.required
        to false. There are also special unbranded versions of Firefox
        that allow this override. See the MozillaWiki article,
        Add-ons/Extension Signing for more information.
    - zip the content of an add-on folder (only the content, without the folder)
    - in about:addons click the 'Tools for all add-ons' settings wheel
    - click 'Install Add-on From File...' and browse to the zip file
    
    
For publishing a Firefox Extension (add-on) in the Firefox repository:
    - ???
</pre>
