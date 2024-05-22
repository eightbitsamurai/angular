export class User {
    constructor(
        public firstName: string,
        public username: string,
        public password: string,
        public repeatPassword: string
    ) {}
}