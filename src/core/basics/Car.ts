export default interface Car {
    readonly speedMax: number
    speedActual: () => number
    readonly speedUp: () => void
    readonly brake: () => void
}
