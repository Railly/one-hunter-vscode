import { Plugin } from "obsidian"

export default class SystemDarkMode extends Plugin {
  async onload() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const callback = () => {
      if (media.matches) {
        console.log('Dark mode active');
        this.updateStyle(true);
      } else {
        console.log('Light mode active');
        this.updateStyle(false);
      }
    }

    media.addEventListener('change', callback);

    // remove listener on unload
    this.register(() => media.removeEventListener('change', callback));

    callback();
  }

  updateStyle(darkMode) {
    const style = document.createElement('style');
    style.id = 'system-dark-mode';
    style.innerHTML = `
      .markdown-source-view {
        background-color: ${darkMode ? '#222' : '#fff'};
        color: ${darkMode ? '#fff' : '#000'};
      }
    `;
    document.head.appendChild(style);
  }
}


(function() {
    console.log('start');
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', 'https://cdn.rawgit.com/mozilla/readability/8525c6af/Readability.js');
    window.tidyHtml = (function() {
        var loc = document.location;
        var uri = {
            spec: loc.href,
            host: loc.host,
            prePath: loc.protocol + '//' + loc.host,
            scheme: loc.protocol.substr(0, loc.protocol.indexOf(':')),
            pathBase: loc.protocol + '//' + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf('/') + 1)
        };
        var article = new Readability(uri, document).parse();
        document.children[0].innerHTML = article.content;
        var styles = `@media (prefers-color-scheme: dark) {:root {--background: #222;--text: white;--text-muted: #999;}}@media (prefers-color-scheme: light) {:root {--background: white;--text: black;--text-muted: #666;}}* {font-family: -apple-system, BlinkMacSystemFont, "Inter", "IBM Plex Sans", Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;}code, pre {font-family: IBM Plex Mono, monospace;font-size: calc(1rem + 0.5vw);}html {box-sizing: border-box;width: 100%;height: 100%;font-size: 62.5%;background-color: var(--background) !important;}body {font-size: calc(1.6rem + 0.5vw);line-height: 1.8;margin: 0 auto;width: 40em;max-width: 88%;color: var(--text);background-color: var(--background);}.page {margin: 2rem auto;background: var(--background);padding: 0 0 20rem 0;}h1 {font-size: 44px !important;letter-spacing: -0.5px !important;line-height: 46px !important;margin: 22px 0 15px 0 !important;}h2 {font-size: 35px;line-height: 38px;font-weight: bold;}h3 {font-size: inherit;font-weight: bold;border-bottom: 1px solid #333;}ul {margin: 1rem;}ol {margin: 1rem;}video, img {max-width: 100%;}a {color: var(--text);text-decoration: underline;}a:visited {opacity: 0.6;color: var(--text-muted);}blockquote {margin: 0;padding: 0.1em 0 0.1em 2em;border-left: 2px solid #ccc;color: var(--text-muted);}pre {background-color: #ccc;padding: 1rem;}code {color: var(--text-muted);}pre > code {color: #333;}`
        var tidyStyle = document.createElement("style")
        tidyStyle.innerText = styles
        document.head.appendChild(tidyStyle)
    });
    jsCode.onload = tidyHtml;
    document.body.appendChild(jsCode);
}());

(function(){
  const url = window.location.href;
  const tidyUrl = url.split('?')[0];
  navigator.clipboard.writeText(tidyUrl).then(function() {
    window.location.href = tidyUrl;
  }).catch(function() {
    window.location.href = tidyUrl;
  });
})();