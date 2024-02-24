import Beetle from "@/core/basics/beetle"
import Ferrari from "@/core/basics/ferrari"
import run from "@/core/basics/run"
import TerminalUtil from "@/util/TerminalUtil"
import { terminal } from "terminal-kit"

export default async function dip() {
    TerminalUtil.title("Dip")

    const [, carType] =
        await TerminalUtil.selectConfirmation(
            "Select a car",
            ["Beetle", "Ferrari"]
        )

    let car
    switch (carType) {
        case "Beetle":
            car = new Beetle()
            break
        case "Ferrari":
            car = new Ferrari()
            break
    }

    car && run(car, terminal.green)
    await TerminalUtil.waitEnter()
}
