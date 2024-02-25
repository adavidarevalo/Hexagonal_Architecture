import CaseOfUse from "@/core/shared/CaseOfUse"
import User from "../model/user"
import UserRepositoryInMemory from "../../../adapter/db/UserRepositoryInMemory"
import Errors from "@/core/shared/Error"
import Id from "@/core/shared/Id"
import CryptoProvider from "./CryptoProvider"
import UserRepository from "./UserRepository"

export default class UserRegister
    implements CaseOfUse<User, void>
{
    constructor(
        private cryptoProvider: CryptoProvider,
        private userRepository: UserRepository
    ) {}
    async execute(user: User): Promise<void> {
        const cryptoPass = this.cryptoProvider.cryptoPass(
            user.password
        )
        const userExist =
            await this.userRepository.findByMail(user.mail)
        if (userExist) {
            throw new Error(Errors.UserAlreadyExists)
        }

        const newUser = {
            id: Id.generateHash(),
            name: user.name,
            mail: user.mail,
            password: cryptoPass,
        }

        await this.userRepository.create(newUser)
    }
}
