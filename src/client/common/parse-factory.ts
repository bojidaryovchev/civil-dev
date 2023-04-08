export const createParseFactory = (parse: typeof Parse) => ({
  createUser(username: string, password: string, email: string) {
    const user = new parse.User();

    user.set('username', username);
    user.set('password', password);
    user.set('email', email);

    return user;
  },
});
