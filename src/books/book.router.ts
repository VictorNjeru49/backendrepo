
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { bookSchema } from "../validators";
import { listBook, createBook, deleteBook, updateBook, getBook } from "./book.controller";
export const BookRouter = new Hono();

//get all author      
BookRouter.get("/books",  listBook);

//get a single author   
BookRouter.get("/books/:id",  getBook)

// create a author 
BookRouter.post("/books", zValidator('json', bookSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createBook)

//update a author
BookRouter.put("/books/:id", updateBook)

BookRouter.delete("/books/:id", deleteBook)


