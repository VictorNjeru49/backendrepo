
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { listAuthor, createAuthor, deleteAuthor, updateAuthor, getAuthor } from "./author.controller";
import { authorSchema } from "../validators";

export const authorRouter = new Hono();

//get all author      
authorRouter.get("/author",  listAuthor);

//get a single author   
authorRouter.get("/author/:id",  getAuthor)

// create a author 
authorRouter.post("/author", zValidator('json', authorSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createAuthor)

//update a author
authorRouter.put("/author/:id", updateAuthor)

authorRouter.delete("/author/:id", deleteAuthor)


