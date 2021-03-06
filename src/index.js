// Replicated from Solid JS context example
// https://github.com/ryansolid/solid/blob/master/documentation/context.md

import { html, o } from "sinuous";
import { CounterContext } from "./counter-context.js";
import { App } from "./app.js";

document.body.append(
  html`
    <${CounterContext.Provider} value="${o(2)}">
      <${App} />
    <//>
  `
);
