console.log(`test typescript. ${Date.now()}`)
import { add } from './utils'
import 'ts-polyfill/lib/es2017-object'

console.log(add(1, 2))
console.log(
  Object.values({
    a: 1,
    b: 2,
    c: 3,
  })
)

import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req: Request, res: Response) => {
  console.log(req.method, req.query, req.body, req.params, req.url)
  res.json({ a: 1, b: 2 })
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.method, req.query, req.body, req.params, req.url)
  res.json(req.body)
})

const port: any = process.env.PORT || 8888

const main = () => {
  app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
  })
}

main()
