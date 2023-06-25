// const express = require('express')
// const app = express()
// const port = 6004 | process.env.PORT as any
// const cors = require('cors')
// const { BingChat } = require('bing-chat')
// const fs = require('fs')

import express from "express"
import cors from "cors"
import { BingChat } from "bing-chat"
import fs from "fs"
const app = express()
const port = 6004 | process.env.PORT as any

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/list?show=true', (req, res) => {
    const isShow = req.query.show

    if (isShow === 'true') {
        const list = [
            "/write-cookie?cookie=?",
            "/tanya?text=?"
        ]
        return res.send(list)
    }
    return res.send([])
})

app.get('/write-cookie', async (req, res) => {
    const cookie = req.query.cookie as string
    fs.writeFileSync('./cookies.txt', cookie)
    res.send(cookie)
})

app.get('/tanya', async (req, res) => {
    const result = await tanya(req.query.text as string)
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


async function tanya(text: string) {
    const q = text
    const cookie = fs.readFileSync('./cookies.txt').toString()
    const api = new BingChat({
        cookie: cookie
    })

    const res = await api.sendMessage(q)
    return res.text
}