#!/usr/bin/env tsx
import { ChatGPTAPI } from 'chatgpt'
import readline from "readline";
import "colors"
// import TerminalRenderer from 'marked-terminal'
// import {marked} from 'marked'

// marked.setOptions({
//     // Define custom renderer
//     renderer: new TerminalRenderer() as any
//   });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('tanya sesuatu? '.cyan, (name) => {
    main(name)
    rl.close();
});

async function main(kalimat) {
    try {
        const api = new ChatGPTAPI({
            apiKey: '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'
        })

        console.log("tunggu ....")
        const res = await api.sendMessage(kalimat)
        console.log("")
        console.log("** JAWABAN **".yellow)

        console.log(res.text.green)
    } catch (error) {
        console.log("error")
    }
    // console.log(marked(res.text))
}

// main()
