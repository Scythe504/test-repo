const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
app.use(express.json());
const { todo } = require('./db')


app.get('/todos', (req, res) => {
    // const todos = todo.find({

    // })
})

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    //put into mongo
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "success"
    });

})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })


})

app.listen(3001);