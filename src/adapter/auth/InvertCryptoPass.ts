import CryptoProvider from "../../core/user/service/CryptoProvider"

export default class InvertCryptoPass
    implements CryptoProvider
{
    cryptoPass(pass: string): string {
        return pass.split("").reverse().join("")
    }
}
