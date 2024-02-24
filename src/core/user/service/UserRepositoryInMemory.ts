import User from "../model/user"

export default class UserRepositoryInMemory {
    private readonly users: User[] = []

    create(user: User): User | null {
        const userExit = this.users.find(
            (u) => u.id === user.id
        )
        if (userExit) return null

        this.users.push(user)
        return user
    }

    findById(id: string): User | undefined {
        return this.users.find((user) => user.id === id)
    }

    findByMail(mail: string): User | undefined {
        return this.users.find((user) => user.mail === mail)
    }
}
