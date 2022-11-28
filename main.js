import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="py-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="font-serif text-3xl font-bold tracking-tight text-gray-900">Hello Vite!</h1>
    <div class="border-2 border-dashed border-gray-300 rounded my-3 py-3 px-2">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
