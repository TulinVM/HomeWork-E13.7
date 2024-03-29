/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var text1 = "Hello everyone! ";
var text2 = "my roll number is 7";
document.write(text1 + text2);
//import "./style.css";
//import * as test from "./module1.js";
//import * as post_form from "./post_form.js";

//const container = document.getElementById("posts-container");
//const creation = document.getElementById("create-container");
//const prog_title = document.getElementById("program-titl//e");

document.write("Это интересно");

// экспериментально попробуем вставить параграф "p" в элемент div с id="parent"
/*
const parent = document.getElementById("parent");
const checkbox = document.createElement("p");
checkbox.style = "font-size: 30px; color: red";
checkbox.innerHTML = "";
parent.insertAdjacentElement("beforeEnd", checkbox);

// Настройка кнопки получения данных
const get_button = document.getElementById("send-requests");
get_button.addEventListener("click", () => {
  // load-ring activate and appear
  let load_ring = document.getElementsByClassName("lds-spinner")[0];
  load_ring.style = "display: inline-block";

  setTimeout(() => {
    // get all old posts
    container.innerHTML = test.requested_data;

    // load-ring disactivate and disappear
    load_ring.style = "display: none";

    // Create pseudo-form for new post creation
    creation.insertAdjacentElement("afterBegin", post_form.input);
    creation.insertAdjacentElement("afterBegin", post_form.greeting);
    creation.insertAdjacentElement("beforeEnd", post_form.post_button);
    creation.insertAdjacentElement("beforeEnd", post_form.info_message);

    post_form.post_button.addEventListener("click", async () => {
      // read user`s info from input
      const data = { title: post_form.input.value, views: 0 };

      // create post by send
      await post_form.send_request(data);

      await setTimeout(() => {
        // refresh posts list by get-button click
        get_button.click();

        setTimeout(() => {
          // scroll down to fresh post
          document.body.scrollIntoView({ behavior: "smooth", block: "end" });

          // last fresh post background-on
          container.lastElementChild.style = "background-color: red";
          container.lastElementChild.style.transition = "background-color 3s";

          // last fresh post background-off
          setTimeout(() => {
            container.lastElementChild.style = "background-color: none";
            container.lastElementChild.style.transition = "background-color 3s";
          }, 3000);
        }, 2000);
      }, 1000);
    });
  }, 1100);
});

// Add notification about js-modules code updating
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept("./module1.js", function () {
    checkbox.innerHTML +=
      "<br>'Module1' js code was updated. Please refresh if needed.";
  });
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept("./post_form.js", function () {
    checkbox.innerHTML +=
      "<br>'Post_form' js code was updated. Please refresh if needed.";
  });
}*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0NBQWtDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRleHQxID0gXCJIZWxsbyBldmVyeW9uZSEgXCI7XHJcbnZhciB0ZXh0MiA9IFwibXkgcm9sbCBudW1iZXIgaXMgN1wiO1xyXG5kb2N1bWVudC53cml0ZSh0ZXh0MSArIHRleHQyKTtcclxuLy9pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG4vL2ltcG9ydCAqIGFzIHRlc3QgZnJvbSBcIi4vbW9kdWxlMS5qc1wiO1xyXG4vL2ltcG9ydCAqIGFzIHBvc3RfZm9ybSBmcm9tIFwiLi9wb3N0X2Zvcm0uanNcIjtcclxuXHJcbi8vY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0cy1jb250YWluZXJcIik7XHJcbi8vY29uc3QgY3JlYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1jb250YWluZXJcIik7XHJcbi8vY29uc3QgcHJvZ190aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3JhbS10aXRsLy9lXCIpO1xyXG5cclxuZG9jdW1lbnQud3JpdGUoXCLQrdGC0L4g0LjQvdGC0LXRgNC10YHQvdC+XCIpO1xyXG5cclxuLy8g0Y3QutGB0L/QtdGA0LjQvNC10L3RgtCw0LvRjNC90L4g0L/QvtC/0YDQvtCx0YPQtdC8INCy0YHRgtCw0LLQuNGC0Ywg0L/QsNGA0LDQs9GA0LDRhCBcInBcIiDQsiDRjdC70LXQvNC10L3RgiBkaXYg0YEgaWQ9XCJwYXJlbnRcIlxyXG4vKlxyXG5jb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmVudFwiKTtcclxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuY2hlY2tib3guc3R5bGUgPSBcImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IHJlZFwiO1xyXG5jaGVja2JveC5pbm5lckhUTUwgPSBcIlwiO1xyXG5wYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlRW5kXCIsIGNoZWNrYm94KTtcclxuXHJcbi8vINCd0LDRgdGC0YDQvtC50LrQsCDQutC90L7Qv9C60Lgg0L/QvtC70YPRh9C10L3QuNGPINC00LDQvdC90YvRhVxyXG5jb25zdCBnZXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZW5kLXJlcXVlc3RzXCIpO1xyXG5nZXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgLy8gbG9hZC1yaW5nIGFjdGl2YXRlIGFuZCBhcHBlYXJcclxuICBsZXQgbG9hZF9yaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxkcy1zcGlubmVyXCIpWzBdO1xyXG4gIGxvYWRfcmluZy5zdHlsZSA9IFwiZGlzcGxheTogaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gZ2V0IGFsbCBvbGQgcG9zdHNcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0ZXN0LnJlcXVlc3RlZF9kYXRhO1xyXG5cclxuICAgIC8vIGxvYWQtcmluZyBkaXNhY3RpdmF0ZSBhbmQgZGlzYXBwZWFyXHJcbiAgICBsb2FkX3Jpbmcuc3R5bGUgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHNldWRvLWZvcm0gZm9yIG5ldyBwb3N0IGNyZWF0aW9uXHJcbiAgICBjcmVhdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlckJlZ2luXCIsIHBvc3RfZm9ybS5pbnB1dCk7XHJcbiAgICBjcmVhdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlckJlZ2luXCIsIHBvc3RfZm9ybS5ncmVldGluZyk7XHJcbiAgICBjcmVhdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVFbmRcIiwgcG9zdF9mb3JtLnBvc3RfYnV0dG9uKTtcclxuICAgIGNyZWF0aW9uLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZUVuZFwiLCBwb3N0X2Zvcm0uaW5mb19tZXNzYWdlKTtcclxuXHJcbiAgICBwb3N0X2Zvcm0ucG9zdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgLy8gcmVhZCB1c2VyYHMgaW5mbyBmcm9tIGlucHV0XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7IHRpdGxlOiBwb3N0X2Zvcm0uaW5wdXQudmFsdWUsIHZpZXdzOiAwIH07XHJcblxyXG4gICAgICAvLyBjcmVhdGUgcG9zdCBieSBzZW5kXHJcbiAgICAgIGF3YWl0IHBvc3RfZm9ybS5zZW5kX3JlcXVlc3QoZGF0YSk7XHJcblxyXG4gICAgICBhd2FpdCBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyByZWZyZXNoIHBvc3RzIGxpc3QgYnkgZ2V0LWJ1dHRvbiBjbGlja1xyXG4gICAgICAgIGdldF9idXR0b24uY2xpY2soKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgZG93biB0byBmcmVzaCBwb3N0XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcImVuZFwiIH0pO1xyXG5cclxuICAgICAgICAgIC8vIGxhc3QgZnJlc2ggcG9zdCBiYWNrZ3JvdW5kLW9uXHJcbiAgICAgICAgICBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCI7XHJcbiAgICAgICAgICBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDNzXCI7XHJcblxyXG4gICAgICAgICAgLy8gbGFzdCBmcmVzaCBwb3N0IGJhY2tncm91bmQtb2ZmXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IG5vbmVcIjtcclxuICAgICAgICAgICAgY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2dyb3VuZC1jb2xvciAzc1wiO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfSwgMTEwMCk7XHJcbn0pO1xyXG5cclxuLy8gQWRkIG5vdGlmaWNhdGlvbiBhYm91dCBqcy1tb2R1bGVzIGNvZGUgdXBkYXRpbmdcclxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcclxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChcIi4vbW9kdWxlMS5qc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjaGVja2JveC5pbm5lckhUTUwgKz1cclxuICAgICAgXCI8YnI+J01vZHVsZTEnIGpzIGNvZGUgd2FzIHVwZGF0ZWQuIFBsZWFzZSByZWZyZXNoIGlmIG5lZWRlZC5cIjtcclxuICB9KTtcclxufVxyXG5cclxuaWYgKGltcG9ydC5tZXRhLndlYnBhY2tIb3QpIHtcclxuICBpbXBvcnQubWV0YS53ZWJwYWNrSG90LmFjY2VwdChcIi4vcG9zdF9mb3JtLmpzXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNoZWNrYm94LmlubmVySFRNTCArPVxyXG4gICAgICBcIjxicj4nUG9zdF9mb3JtJyBqcyBjb2RlIHdhcyB1cGRhdGVkLiBQbGVhc2UgcmVmcmVzaCBpZiBuZWVkZWQuXCI7XHJcbiAgfSk7XHJcbn0qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=