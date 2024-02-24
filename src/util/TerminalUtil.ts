/** @format */

import { terminal } from "terminal-kit"

export default class TerminalUtil {
    static title(text: string) {
        terminal.clear()
        terminal.magenta(`${text}\n`)
        terminal.magenta(`-`.repeat(text.length) + "\n")
    }
    static clear() {
        terminal.clear()
    }
    static async menu(options: string[]) {
        const response = await terminal.singleColumnMenu(
            options
        ).promise
        return [
            response.selectedIndex,
            response.selectedText,
        ]
    }
    static showKeyValue(key: string, value: string) {
        terminal.yellow(key).green(value).white("\n")
    }
    static async confirmation(
        text: string
    ): Promise<boolean> {
        terminal.yellow(`\n${text}`)
        const response = await terminal.singleLineMenu([
            "Yes",
            "No",
        ]).promise

        return response.selectedText === "Yes"
    }
    static async selectConfirmation(
        text: string,
        options: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`\n${text}`)
        const response = await terminal.singleLineMenu(
            options
        ).promise

        return [
            response.selectedIndex,
            response.selectedText,
        ]
    }

    static async waitEnter(): Promise<void> {
        terminal.white("\nPress Enter to continue...")
        await terminal.inputField({ echo: false }).promise
    }
    static async requiredFiled(
        label: string,
        defaultValue: string = ""
    ): Promise<string> {
        terminal.yellow(`\n${label}`)
        const response = await terminal.inputField({
            default: defaultValue,
        }).promise

        if (response) return response

        return TerminalUtil.requiredFiled(
            label,
            defaultValue
        )
    }

    static async success(text: string) {
        terminal.green(text)
    }
}
