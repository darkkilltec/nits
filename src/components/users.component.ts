import { PropertyValueMap, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import style from "./users.component.scss?inline";
import BackendService from "../services/backend.service";
import { User } from "../shared/types";

@customElement("users-component")
export class UsersComponent extends TailwindElement(style) {
  backendService = new BackendService();
  users: User[] = [];
  @query("#headline") head: any;
  constructor() {
    super();
    this.fetchData();
  }
  firstUpdated(): void {
    console.log(this.head);
  }

  fetchData = async () => {
    try {
      this.users = await this.backendService.getDefaultUsers();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  render() {
    return html`
      This is users
      <div>
        <h1 id="headline">Test</h1>
        <ul>
          ${this.users?.map((user) => html`<li>${user.name}</li>`)}
        </ul>
      </div>
    `;
  }
}
