import User from "../model/user"

export default interface UserRepository {
    create(user: User): Promise<User | null>
    findByMail(mail: string): Promise<User | undefined>
}
