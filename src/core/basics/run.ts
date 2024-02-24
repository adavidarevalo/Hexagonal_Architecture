import Car from "./Car"

export default function run(
    car: Car,
    logger: (str: string) => void
) {
    Array.from({ length: 10 }).forEach(() => {
        car.speedUp()
        logger(`\nSpeed: ${car.speedActual()} Km/H`)
    })
    Array.from({ length: 10 }).forEach(() => {
        car.brake()
        logger(`\nSpeed: ${car.speedActual()} Km/H`)
    })
}
