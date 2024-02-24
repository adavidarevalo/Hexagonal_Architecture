import CryptoProvider from "@/core/user/service/CryptoProvider"
import bcrypt from "bcrypt"

export default class PassCrypto implements CryptoProvider {
    cryptoPass(pass: string): string {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(pass, salt)
        return hash
    }
}
