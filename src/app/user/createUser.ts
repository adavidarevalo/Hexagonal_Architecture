import Car from "@/core/basics/Car"
import Beetle from "@/core/basics/beetle"
import Ferrari from "@/core/basics/ferrari"
import User from "@/core/user/model/user"
import InvertCryptoPass from "@/adapter/auth/InvertCryptoPass"
import UserRegister from "@/core/user/service/userRegister"
import TerminalUtil from "@/util/TerminalUtil"
import { terminal } from "terminal-kit"

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

    const cryptoProvider = new InvertCryptoPass()

    await new UserRegister(cryptoProvider).execute(user)

    TerminalUtil.success("User Created")

    await TerminalUtil.waitEnter()
}
