#!/usr/bin/env tsx
const ora = require('ora').default
const fetch = require('node-fetch2')
const cliMd = require('cli-markdown').default

const loading = ora("loading ...")

async function main() {
    loading.start()
    const res = await fetch('https://tanya.makurostudio.my.id/tanya?text=' + process.argv.slice(2).join(' '))
    const text = await res.text()
    loading.stop()
    console.log(cliMd(text))
    
}

main()














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
