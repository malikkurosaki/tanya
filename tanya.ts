#!/usr/bin/env tsx
import { ChatGPTAPI } from 'chatgpt'
import readline from "readline";
import "colors"
import CryptoJS from 'crypto-js'
import cliMd from 'cli-markdown';
import yargs from 'yargs'
import _ from 'lodash'
const flags = process.argv.slice(2)
import { BingChat } from 'bing-chat'
import ora from 'ora'
import fs from 'fs'

const cookie = fs.readFileSync('./cookies.txt').toString()

const loading = ora("loading ...")

async function main() {
    loading.start()
  const api = new BingChat({
    cookie: cookie
  })

  const res = await api.sendMessage(flags.join(" "))
  loading.stop()
  console.log(cliMd(res.text))
  
}

main()

// const perintah = yargs
// .version('1.0.0')
// .epilog('Copyright © 2022 - All rights reserved')
// .option("api", {
//     alias: "a",
//     type: "string",
//     description: "masukkan api key".green,
//     // demandOption: true
// })
// .parseSync();

// if(perintah.api && !_.isEmpty(perintah.api)){
//     console.log(perintah.api)
// }













// function loadingAnimation(clear: (val: NodeJS.Timer) => void): void {
//     const frames = ['-', '\\', '|', '/'];
//     let i = 0;
//     const inv = setInterval(() => {
//         process.stdout.write(`\r${frames[i++]} Loading...`);
//         i %= frames.length;
//     }, 100);

//     clear(inv);
// }

// const secretKey = 'ini adalah rahasia iseng aja';
// const bytes = CryptoJS.AES.decrypt("U2FsdGVkX1/2GLH6mntOKRIsU4Dnw3aJPo4j+6pDZO4c4o83m0sr0wD3gmwQLPh530PUYJuPvz6z8d/a9aSLkbT5Q6Q8KvM9IEVy2yRgStc=", secretKey);
// const decrypted = bytes.toString(CryptoJS.enc.Utf8);

// function main() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question('tanya sesuatu? '.cyan, (name) => {
//         tanya(name)
//         rl.close();
//     });
// }

// let interval: NodeJS.Timer;
// async function tanya(kalimat) {
    
//     loadingAnimation((val) => {
//         interval = val
//     })
//     try {
//         const api = new ChatGPTAPI({
//             apiKey: decrypted
//         })

//         // console.log("tunggu ....")
//         const res = await api.sendMessage(kalimat)
//         // console.log("")
//         // console.log("** JAWABAN **".yellow)

//         clearInterval(interval)
//         console.log(cliMd(res.text))
//     } catch (error) {
//         clearInterval(interval)
//         console.log("hahah error, mungkin ada yang salah".red)
//     }

// }

// main()
