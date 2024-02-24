/** @format */

import TerminalUtil from "@/util/TerminalUtil"
import menuBasics from "./menuBasics"
import dip from "../basics/dip"
import menuUser from "./menuUser"

export default async function menuPrincipal() {
    TerminalUtil.title("Menu Principal")

    const [, selectedText] = await TerminalUtil.menu([
        "1. Basics",
        "2. DIP",
        "3. User",
        "Exit",
    ])

    switch (selectedText) {
        case "1. Basics":
            await menuBasics()
            break
        case "2. DIP":
            await dip()
            break
        case "3. User":
            await menuUser()
            break
        case "Exit":
            break
        default:
            break
    }
}
