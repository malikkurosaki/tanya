#!/usr/bin/env tsx
import { ChatGPTAPI } from 'chatgpt'
import readline from "readline";
import "colors"
import CryptoJS from 'crypto-js'

const secretKey = 'ini adalah rahasia iseng aja';

const bytes = CryptoJS.AES.decrypt("U2FsdGVkX1/2GLH6mntOKRIsU4Dnw3aJPo4j+6pDZO4c4o83m0sr0wD3gmwQLPh530PUYJuPvz6z8d/a9aSLkbT5Q6Q8KvM9IEVy2yRgStc=", secretKey);
const decrypted = bytes.toString(CryptoJS.enc.Utf8);

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('tanya sesuatu? '.cyan, (name) => {
        tanya(name)
        rl.close();
    });
}

async function tanya(kalimat) {
    try {
        const api = new ChatGPTAPI({
            apiKey: decrypted
        })

        console.log("tunggu ....")
        const res = await api.sendMessage(kalimat)
        console.log("")
        console.log("** JAWABAN **".yellow)

        console.log(res.text.green)
    } catch (error) {
        console.log("hahah error, mungkin ada yang salah".red)
    }

}

main()
