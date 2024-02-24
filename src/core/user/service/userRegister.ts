import CaseOfUse from "@/core/shared/CaseOfUse"
import User from "../model/user"
import UserRepositoryInMemory from "./UserRepositoryInMemory"
import Errors from "@/core/shared/Error"
import Id from "@/core/shared/Id"
import CryptoProvider from "./CryptoProvider"

export default class UserRegister
    implements CaseOfUse<User, void>
{
    constructor(private cryptoProvider: CryptoProvider) {}
    async execute(user: User): Promise<void> {
        const cryptoPass = this.cryptoProvider.cryptoPass(
            user.password
        )
        const repo = new UserRepositoryInMemory()
        const userExist = await repo.findByMail(user.mail)
        if (userExist) {
            throw new Error(Errors.UserAlreadyExists)
        }

        const newUser = {
            id: Id.generateHash(),
            name: user.name,
            mail: user.mail,
            password: cryptoPass,
        }

        await repo.create(newUser)
    }
}
