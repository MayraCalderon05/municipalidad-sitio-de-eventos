export class User {
    public id: number;
    public name: string;
    public surname: string;
    public mobile: string;
    public email: string;
    public password: string;

    constructor(id: number, name: string, surname: string, mobile: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
    }
}