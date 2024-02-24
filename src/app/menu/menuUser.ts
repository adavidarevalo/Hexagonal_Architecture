/** @format */

import TerminalUtil from "@/util/TerminalUtil"
import polymorphism from "../basics/polymorphism"
import userRegister from "@/core/user/service/userRegister"
import createUser from "../user/createUser"

export default async function menuUser() {
    TerminalUtil.title("Menu USer")

    const [, selectedText] = await TerminalUtil.menu([
        "1. Create User",
        "Back",
    ])

    switch (selectedText) {
        case "1. Create User":
            await createUser()
            break

        case "Back":
            break
        default:
            break
    }
}
