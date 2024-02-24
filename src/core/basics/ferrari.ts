import Car from "./Car"

export default class Ferrari implements Car {
    constructor(
        readonly speedMax: number = 324,
        private _speedActual: number = 0
    ) {}

    speedUp() {
        this._speedActual = Math.min(
            this.speedMax,
            this._speedActual + 20
        )
    }

    brake() {
        this._speedActual = Math.max(
            0,
            this._speedActual - 20
        )
    }

    speedActual(): number {
        return this._speedActual
    }
}
