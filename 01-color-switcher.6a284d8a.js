!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body};t.start.addEventListener("click",(function(e){timerId=setInterval((function(){t.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3),t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled","disabled")})),t.stop.addEventListener("click",(function(){clearInterval(timerId),t.start.removeAttribute("disabled","disabled"),t.stop.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.6a284d8a.js.map