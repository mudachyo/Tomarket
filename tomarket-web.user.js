// ==UserScript==
// @name         Tomarket Web
// @version      1.2
// @description  Запуск Tomarket в браузере
// @author       mudachyo
// @match        https://web.telegram.org/*/*
// @match        https://mini-app.tomarket.ai/*
// @grant        none
// @icon         https://mudachyo.codes/assets/tomarket/tomarket.png
// @downloadURL  https://github.com/mudachyo/Tomarket/raw/main/tomarket-web.user.js
// @updateURL    https://github.com/mudachyo/Tomarket/raw/main/tomarket-web.user.js
// @homepage     https://github.com/mudachyo/Tomarket
// ==/UserScript==

(function() {
  function updateIframeSrc() {
    const iframes = document.querySelectorAll('iframe.zA1w1IOq, iframe.payment-verification');

    iframes.forEach(iframe => {
        let src = iframe.src;

        // Изменено условие для замены платформы
        if (src.includes('mini-app.tomarket.ai') && (src.includes('tgWebAppPlatform=weba') || src.includes('tgWebAppPlatform=web'))) {
            src = src.replace(/tgWebAppPlatform=(weba|web)/g, 'tgWebAppPlatform=ios');

            iframe.src = src;

            console.log('Ссылка обновлена:', src);
        }
    });
  }
  
  setInterval(updateIframeSrc, 2000);
})();