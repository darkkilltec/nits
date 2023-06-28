import "./components/navbar.component";
import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { TailwindElement } from "./shared/tailwind.element";
import { DashboardComponent } from "./components/dashboard.component";
import { NotfoundComponent } from "./components/404.component";
import { UsersComponent } from "./components/users.component";

import style from "./shared/tailwind.global.css";

const componentMap = new Map<string, any>([
  ["dashboard", DashboardComponent],
  ["users", UsersComponent],
  // Add other components here based on the routing logic
]);

@customElement("index-element")
export class IndexElement extends TailwindElement(style) {
  @query("slot") slot: any;

  routeSlot(e: CustomEvent) {
    if (e.detail.length == 0) return;
    const component = this.getComponent(e.detail);
    if (!component) return;

    this.slot.replaceChildren(component);
  }

  getComponent(route: string) {
    const componentClass = componentMap.get(route);
    return componentClass ? new componentClass() : new NotfoundComponent();
  }

  render() {
    return html`<div>
      <navbar-component @route=${this.routeSlot}></navbar-component
      ><slot></slot>
    </div>`;
  }
}
