import { html } from "sinuous";
import { CounterContext, useContext } from "./counter-context.js";
import { DeeplyNested } from "./deeplyNested";

export function Nested() {
  const value = useContext(CounterContext);
  return html`
    <div>${() => value()}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>
    <${CounterContext.Provider} value="${10}">
      <${DeeplyNested} />
    <//>
  `;
}
