import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIBookstable, TSBookstable, Bookstable } from "../drizzle/schema";

export const bookService = async (limit?: number): Promise<TSBookstable[] | null> => {
    if (limit) {
        return await db.query.Bookstable.findMany({
            limit: limit
        });
    }
    return await db.query.Bookstable.findMany();
}

export const getBookService = async (id: number): Promise<TSBookstable | undefined> => {
    return await db.query.Bookstable.findFirst({
        where: eq(Bookstable.id, id),
        columns:{
            id:true,
            authorId:true,
            title:true,
            year:true,
        },with:{
            author:{
                columns:{
                    id:true,
                    name: true
                }
            }
        }
    })
}

export const createBookService = async (user: TIBookstable) => {
    await db.insert(Bookstable).values(user)
    return "User created successfully";
}

export const updateBookService = async (id: number, user: TIBookstable) => {
    await db.update(Bookstable).set(user).where(eq(Bookstable.id, id))
    return "User updated successfully";
}

export const deleteBookService = async (id: number) => {
    await db.delete(Bookstable).where(eq(Bookstable.id, id))
    return "User deleted successfully";
}