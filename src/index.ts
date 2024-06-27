import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { authorRouter } from './author/author.router'
import { BookRouter } from './books/book.router'
import { cors} from 'hono/cors'

const app = new Hono()

app.get('/', (c) => {
  return c.text('The app is running on the specified platform')
})
app.route('/',BookRouter)
app.route('/',authorRouter)

app.use('*', cors({
  origin: 'http://localhost:5173/',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
serve({
  fetch: app.fetch,
  port: Number(process.env.PORT )
})

console.log(`Server is running on port ${process.env.PORT}`)


