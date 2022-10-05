const express = require('express')
//const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

//app.use(cors())

app.use(express.json())

let user = {
  id: 1,
  email: "felipe@gmail.com.br",
  password: "secret",
}

app.route('/api').get((req, res) => res.json({
  user
}))

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = user.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('Climate nor found!')
  }

  res.json(user)
})


