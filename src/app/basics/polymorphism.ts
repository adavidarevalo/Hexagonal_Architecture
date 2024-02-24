import Car from "@/core/basics/Car"
import Beetle from "@/core/basics/beetle"
import Ferrari from "@/core/basics/ferrari"
import TerminalUtil from "@/util/TerminalUtil"
import { terminal } from "terminal-kit"

export default async function polymorphism() {
    TerminalUtil.title("Polymorphism")

    const [, carSelected] =
        await TerminalUtil.selectConfirmation(
            "What type of car do you want to buy?",
            ["Ferrari", "Beetle"]
        )

    const car: Car =
        carSelected === "Ferrari"
            ? new Ferrari()
            : new Beetle()

    while (true) {
        TerminalUtil.clear()
        TerminalUtil.showKeyValue(
            "Speed Max",
            `${car.speedMax} Km/H`
        )
        TerminalUtil.showKeyValue(
            "Speed Actual",
            `${car.speedActual()} Km/H`
        )

        const [, selectedText] =
            await TerminalUtil.selectConfirmation(
                "What do you want to do?",
                ["Speed Up", "Brake"]
            )

        selectedText === "Speed Up"
            ? car.speedUp()
            : car.brake()

        const confirmation =
            await TerminalUtil.confirmation(
                "Do you want to continue?"
            )
        if (!confirmation) return
    }
}
