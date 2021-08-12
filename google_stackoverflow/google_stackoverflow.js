/* Stackoverflow quick search add-on extension for Firefox
 *
 * Allows quick searching Stackoverflow from the address bar
 *
 * Usage:
 *  In the address bar, prefix the search string with 'gs':
 *  gs <search string>
 * 
 * Example:
 *   gs pyplot spectrum
 * written in the Firefox address bar will turn into:
 *   https://www.google.com/?search=pyplot+spectrum+site:stackoverflow.com
 */

browser.omnibox.setDefaultSuggestion({
  description: "Google Stackoverflow"
});

browser.omnibox.onInputEntered.addListener(
  (textinput, disposition) => {
    console.log("Input");
    var url;
    // replace whitespaces with '+'
    textinput = textinput.replace(/\s+/g, "+");
    
    // 'ds' 'gs' for querying stackoverflow using duckduckgo or google
    // for quering stackoverflow directly, add stackoverflow as a search engine
    //     (from the address bar), then associate the shortcut letter 's' to it
    //     or else prepare yet another extension to generate
    //     url = `https://stackoverflow.com/search?q=${textinput}`;
    //
    // url = `https://duckduckgo.com/?q=${textinput}+site:stackoverflow.com`;
    url = `https://www.google.com/search?q=${textinput}+site:stackoverflow.com`;

    // open the search page
    switch (disposition) {
      case "currentTab":
        browser.tabs.update({ url });
        break;
      case "newForegroundTab":
        browser.tabs.create({ url });
        break;
      case "newBackgroundTab":
        browser.tabs.create({ url, active: false });
        break;
    }
  }
);
