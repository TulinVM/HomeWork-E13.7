/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style1.css":
/*!************************!*\
  !*** ./src/style1.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style1.css */ "./src/style1.css");

//Файл time.js
function displayTime() {
  let element = document.getElementById("clock"); // Найти элемент с id="clock"
  let element1 = document.getElementById("date");
  let now = new Date(); // Получить текущее время
  element.innerHTML = now.toLocaleTimeString(); // Отобразить время
  element1.innerHTML = now.toLocaleDateString();
  setTimeout(displayTime, 1000); // Вызывать функцию каждую секунду
}
window.onload = displayTime; // Начать отображение времени после загрузки документа

var element2 = document.getElementById("title_text");
var element3 = document.getElementById("text");

element2.innerText = "Это интересно.";
element3.innerText =
  "Самые интересные события в мире высоких технологий должны быть встречены шумом аплодисментов. То, что не поддается понимаю обывателя, с радостью предлагается инженерами-изобретателями. Именно они в ответе за то, что мы с замиранием сердца наблюдаем, как на рынок выходит любопытный гаджет, происходит революция в сфере высоких технологий или ожидается обновление линейки любимых продуктов. Технологии — это интересно. Интереснее, чем если бы их не было вовсе.";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXN0L21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3RCO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx3QkFBd0I7QUFDeEIsZ0RBQWdEO0FBQ2hEO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZTEuY3NzP2Y0NTAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZTEuY3NzXCI7XHJcbi8v0KTQsNC50LsgdGltZS5qc1xyXG5mdW5jdGlvbiBkaXNwbGF5VGltZSgpIHtcclxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvY2tcIik7IC8vINCd0LDQudGC0Lgg0Y3Qu9C10LzQtdC90YIg0YEgaWQ9XCJjbG9ja1wiXHJcbiAgbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xyXG4gIGxldCBub3cgPSBuZXcgRGF0ZSgpOyAvLyDQn9C+0LvRg9GH0LjRgtGMINGC0LXQutGD0YnQtdC1INCy0YDQtdC80Y9cclxuICBlbGVtZW50LmlubmVySFRNTCA9IG5vdy50b0xvY2FsZVRpbWVTdHJpbmcoKTsgLy8g0J7RgtC+0LHRgNCw0LfQuNGC0Ywg0LLRgNC10LzRj1xyXG4gIGVsZW1lbnQxLmlubmVySFRNTCA9IG5vdy50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICBzZXRUaW1lb3V0KGRpc3BsYXlUaW1lLCAxMDAwKTsgLy8g0JLRi9C30YvQstCw0YLRjCDRhNGD0L3QutGG0LjRjiDQutCw0LbQtNGD0Y4g0YHQtdC60YPQvdC00YNcclxufVxyXG53aW5kb3cub25sb2FkID0gZGlzcGxheVRpbWU7IC8vINCd0LDRh9Cw0YLRjCDQvtGC0L7QsdGA0LDQttC10L3QuNC1INCy0YDQtdC80LXQvdC4INC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQtNC+0LrRg9C80LXQvdGC0LBcclxuXHJcbnZhciBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVfdGV4dFwiKTtcclxudmFyIGVsZW1lbnQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpO1xyXG5cclxuZWxlbWVudDIuaW5uZXJUZXh0ID0gXCLQrdGC0L4g0LjQvdGC0LXRgNC10YHQvdC+LlwiO1xyXG5lbGVtZW50My5pbm5lclRleHQgPVxyXG4gIFwi0KHQsNC80YvQtSDQuNC90YLQtdGA0LXRgdC90YvQtSDRgdC+0LHRi9GC0LjRjyDQsiDQvNC40YDQtSDQstGL0YHQvtC60LjRhSDRgtC10YXQvdC+0LvQvtCz0LjQuSDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0LLRgdGC0YDQtdGH0LXQvdGLINGI0YPQvNC+0Lwg0LDQv9C70L7QtNC40YHQvNC10L3RgtC+0LIuINCi0L4sINGH0YLQviDQvdC1INC/0L7QtNC00LDQtdGC0YHRjyDQv9C+0L3QuNC80LDRjiDQvtCx0YvQstCw0YLQtdC70Y8sINGBINGA0LDQtNC+0YHRgtGM0Y4g0L/RgNC10LTQu9Cw0LPQsNC10YLRgdGPINC40L3QttC10L3QtdGA0LDQvNC4LdC40LfQvtCx0YDQtdGC0LDRgtC10LvRj9C80LguINCY0LzQtdC90L3QviDQvtC90Lgg0LIg0L7RgtCy0LXRgtC1INC30LAg0YLQviwg0YfRgtC+INC80Ysg0YEg0LfQsNC80LjRgNCw0L3QuNC10Lwg0YHQtdGA0LTRhtCwINC90LDQsdC70Y7QtNCw0LXQvCwg0LrQsNC6INC90LAg0YDRi9C90L7QuiDQstGL0YXQvtC00LjRgiDQu9GO0LHQvtC/0YvRgtC90YvQuSDQs9Cw0LTQttC10YIsINC/0YDQvtC40YHRhdC+0LTQuNGCINGA0LXQstC+0LvRjtGG0LjRjyDQsiDRgdGE0LXRgNC1INCy0YvRgdC+0LrQuNGFINGC0LXRhdC90L7Qu9C+0LPQuNC5INC40LvQuCDQvtC20LjQtNCw0LXRgtGB0Y8g0L7QsdC90L7QstC70LXQvdC40LUg0LvQuNC90LXQudC60Lgg0LvRjtCx0LjQvNGL0YUg0L/RgNC+0LTRg9C60YLQvtCyLiDQotC10YXQvdC+0LvQvtCz0LjQuCDigJQg0Y3RgtC+INC40L3RgtC10YDQtdGB0L3Qvi4g0JjQvdGC0LXRgNC10YHQvdC10LUsINGH0LXQvCDQtdGB0LvQuCDQsdGLINC40YUg0L3QtSDQsdGL0LvQviDQstC+0LLRgdC1LlwiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=