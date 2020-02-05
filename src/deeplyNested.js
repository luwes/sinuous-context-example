import { html, o } from "sinuous";
import {
  CounterContext,
  CounterContext2,
  useContext
} from "./counter-context.js";
import { DeeperNested } from "./deeperNested";

export function DeeplyNested() {
  const value = useContext(CounterContext);
  return html`
    <div>${value}</div>
    <button onclick=${() => value(value() + 1)}>+</button>
    <button onclick=${() => value(value() - 1)}>-</button>
    <${CounterContext2.Provider} value=${o(200)}>
      <${DeeperNested} />
    <//>
  `;
}
