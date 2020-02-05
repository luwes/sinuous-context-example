import { html, o } from "sinuous";
import { CounterContext, useContext } from "./counter-context.js";
import { DeeplyNested } from "./deeplyNested";

export function Nested() {
  const component = o(1);
  const value = useContext(CounterContext);

  function switchComponent() {
    if (component() === 1) {
      component(2);
    } else {
      component(1);
    }
  }

  return html`
    <div>${value}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>

    ${() => (component() === 1 ? showComponent1() : showComponent2())}
    <button onclick=${switchComponent}>Switch Component</button>
    <hr />
    <${CounterContext.Provider} value="${o(10)}">
      <${DeeplyNested} />
    <//>
  `;
}

const showComponent1 = () => {
  const value = useContext(CounterContext);
  return html`
    <p>showComponent1: ${value}</p>
  `;
};

const showComponent2 = () => {
  const value = useContext(CounterContext);
  return html`
    <p>showComponent2: ${value}</p>
  `;
};
