import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'
import { authorRouter } from './author/author.router'
import { BookRouter } from './books/book.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('The app is running on the specified platform')
})
app.route('/',BookRouter)
app.route('/',authorRouter)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT )
})

console.log(`Server is running on port ${process.env.PORT}`)


