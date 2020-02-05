import { html } from "sinuous";
import { CounterContext, CounterContext2, useContext } from "./counter-context.js";

export function DeeperNested() {
  const value = useContext(CounterContext);

  const value2 = useContext(CounterContext2);

  return html`
    <div>${value}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>
    <hr />
    <div>${value2}</div>
    <button onclick=${() => value2(value2() + 1)}>+</button>
    <button onclick=${() => value2(value2() - 1)}>-</button>
  `;
}
