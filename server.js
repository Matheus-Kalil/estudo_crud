import express from 'express'
import cors from 'cors'
import { prisma } from "./lib/prisma.ts";

const app = express()
app.use(express.json())
app.use(cors()) // Fechar acesso depois...

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

    res.status(200).json({ message: "Usuário deletada com Sucesso!"})
})

app.listen(3000)

/*
    Criar nossa API de Usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário

    matheus_ksb
    DBase!14

    createMany()
    createManyAndReturn()
    deleteMany()
    updateMany()
    updateManyAndReturn()
    findMany()

    name: "Gojo Arche", email: "gojo.arche@jujutsu.education.tk.edu.jp", age: "15"
    
    {
        "name": "Gojo Arche",
        "email": "gojo.arche@jujutsu.education.tk.edu.jp",
        "age": "15"
    }
*/