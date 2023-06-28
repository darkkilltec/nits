import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import style from "./dashboard.component.scss?inline";

@customElement("notfound-component")
export class NotfoundComponent extends TailwindElement(style) {
  render() {
    return html`Site could not be found! 404`;
  }
}
