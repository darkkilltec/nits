import { User } from "../shared/types";

class BackendService {
  getDefaultUsers(): Promise<User[]> {
    const users: User[] = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Bob Johnson" },
    ];

    return Promise.resolve(users);
  }
}

export default BackendService;
