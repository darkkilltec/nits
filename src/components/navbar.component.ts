import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import style from "./navbar.component.scss?inline";

@customElement("navbar-component")
export class NavbarComponent extends TailwindElement(style) {
  navBarItems = [
    { label: "Dashboard", route: "dashboard" },
    { label: "Users", route: "users" },
    { label: "Logout", route: "logout" },
  ];

  changeMainContent(route: string) {
    this.dispatchEvent(
      new CustomEvent("route", { detail: route, bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <div class="navbar bg-base-100">
        ${this.navBarItems.map(
          (item) =>
            html`<a
              class="btn btn-ghost normal-case text-xl"
              @click=${() => this.changeMainContent(item.route)}
              >${item.label}</a
            >`
        )}
      </div>
    `;
  }
}
