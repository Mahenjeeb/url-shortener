interface IUserRepository {
  getUsers(id: string, name: string): Promise<{ id: string; name: string }>;
}
export default class UserRepository implements IUserRepository {
  async getUsers(
    id: string,
    name: string,
  ): Promise<{ id: string; name: string }> {
    return { id, name };
  }
}
