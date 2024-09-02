// ==UserScript==
// @name         Tomarket Web
// @version      1.0
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
      const iframe = document.querySelector('iframe.payment-verification');
  
      if (iframe) {
        let src = iframe.src;
  
        if (src.includes('mini-app.tomarket.ai') && !src.includes('tgWebAppPlatform=ios')) {
          src = src.replace(/tgWebAppPlatform=web/g, 'tgWebAppPlatform=ios');
  
          iframe.src = src;
  
          console.log('Ссылка обновлена:', src);
        }
      } else {
      }
    }
  
    setInterval(updateIframeSrc, 2000);
  })();