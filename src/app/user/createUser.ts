import User from "@/core/user/model/user"
import UserRegister from "@/core/user/service/userRegister"
import TerminalUtil from "@/util/TerminalUtil"
import PassCrypto from "@/adapter/auth/PassCrypto"
import UserRepositoryInMemory from "@/adapter/db/UserRepositoryInMemory"

export default async function createUser() {
    TerminalUtil.title("Create User")

    const name = await TerminalUtil.requiredFiled("Name")
    const mail = await TerminalUtil.requiredFiled("Mail")
    const password = await TerminalUtil.requiredFiled(
        "Password"
    )

    const user: User = {
        name,
        mail,
        password,
    }

    const cryptoProvider = new PassCrypto()
    const userRepositoryInMemory =
        new UserRepositoryInMemory()

    await new UserRegister(
        cryptoProvider,
        userRepositoryInMemory
    ).execute(user)

    TerminalUtil.success("User Created")

    await TerminalUtil.waitEnter()
}
