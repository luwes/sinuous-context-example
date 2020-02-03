import { html } from "sinuous";
import { Nested } from "./nested.js";

export function App() {
  return html`
    <h2>Welcome to Counter App</h2>
    <${Nested} />
  `;
}
