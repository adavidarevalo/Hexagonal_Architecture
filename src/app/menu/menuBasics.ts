/** @format */

import TerminalUtil from "@/util/TerminalUtil"
import { terminal } from "terminal-kit"
import polymorphism from "../basics/polymorphism"

export default async function menuBasics() {
    TerminalUtil.title("Menu Basics")

    const [, selectedText] = await TerminalUtil.menu([
        "1. Polymorphism",
        "Back",
    ])

    switch (selectedText) {
        case "1. Polymorphism":
            polymorphism()
            break

        case "Exit":
            break
        default:
            break
    }
}
