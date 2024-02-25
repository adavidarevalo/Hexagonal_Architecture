import UserRepository from "@/core/user/service/UserRepository"
import User from "../../core/user/model/user"

export default class UserRepositoryInMemory
    implements UserRepository
{
    private readonly users: User[] = []

    async create(user: User): Promise<User | null> {
        await this.users.push(user)
        return user
    }

    async findByMail(mail: string): Promise<User> {
        return await this.users.find(
            (user) => user.mail === mail
        )
    }
}
