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
    const api = new ChatGPTAPI({
        apiKey: "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"
    })

    console.log("tunggu ....")
    const res = await api.sendMessage(kalimat)
    console.log("")
    console.log("** JAWABAN **".yellow)

    console.log(res.text.green)
    // console.log(marked(res.text))
}

// main()
