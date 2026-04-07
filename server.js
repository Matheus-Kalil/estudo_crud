import express from 'express'
import cors from 'cors'
//import { prisma } from "./lib/prisma.ts";

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors()) // Fechar acesso depois...

app.get('/usuarios', (req, res) => {
    let users = []
    res.send("Ok, deu bom.")

    res.status(200).json(users)
})

/*
app.get('/usuarios', async (req, res) => {
    let users = []
    
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        const users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

    await prisma.user.createMany({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.updateMany({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com Sucesso!"})
})

*/

app.listen(port, () => {
    console.log(`Server running port ${port}`)
    
})