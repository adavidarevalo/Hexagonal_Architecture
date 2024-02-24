import Car from "./Car"

export default class Beetle implements Car {
    constructor(
        readonly speedMax: number = 140,
        private _speedActual: number = 0
    ) {}

    speedUp() {
        this._speedActual = Math.min(
            this.speedMax,
            this._speedActual + 2
        )
    }

    brake() {
        this._speedActual = Math.max(
            0,
            this._speedActual - 2
        )
    }
    speedActual(): number {
        return this._speedActual
    }
}
