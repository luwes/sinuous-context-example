import { html } from "sinuous";
import { CounterContext, useContext } from "./counter-context.js";

export function DeeperNested() {
  const value = useContext(CounterContext);
  return html`
    <div>${value}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>
  `;
}
