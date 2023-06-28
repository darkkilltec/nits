import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import style from "./dashboard.component.scss?inline";

@customElement("dashboard-component")
export class DashboardComponent extends TailwindElement(style) {
  render() {
    return html` This is a Dashboard `;
  }
}
