import User from "@/core/user/model/user"
import UserRegister from "@/core/user/service/userRegister"
import TerminalUtil from "@/util/TerminalUtil"
import PassCrypto from "@/adapter/auth/PassCrypto"

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

    await new UserRegister(cryptoProvider).execute(user)

    TerminalUtil.success("User Created")

    await TerminalUtil.waitEnter()
}
