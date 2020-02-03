import { html } from "sinuous";
import { CounterContext, useContext } from "./counter-context.js";
import { DeeperNested } from "./deeperNested";

export function DeeplyNested() {
  const value = useContext(CounterContext);
  return html`
    <div>${value}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>
    <${DeeperNested} />
  `;
}
