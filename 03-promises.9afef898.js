!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),a=r.elements,l=a.delay,u=a.step,c=a.amount;function f(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();var n=parseInt(l.value),t=parseInt(u.value);!function(e,n,t){for(var o=1;o<=e;o++){f(o,n+(o-1)*t).then((function(e){i.Notify.success("✅ Fulfilled promise ".concat(e.position," in ").concat(e.delay,"ms"))})).catch((function(e){i.Notify.failure("❌ Rejected promise ".concat(e.position," in ").concat(e.delay,"ms"))}))}}(parseInt(c.value),n,t)}))}();
//# sourceMappingURL=03-promises.9afef898.js.map