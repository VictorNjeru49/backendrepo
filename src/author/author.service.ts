import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIAuthortable, TSauthortable, Authortable } from "../drizzle/schema";

export const authorService = async (limit?: number): Promise<TSauthortable[] | null> => {
    if (limit) {
        return await db.query.Authortable.findMany({
            limit: limit
        });
    }
    return await db.query.Authortable.findMany();
}

export const getAuthorService = async (id: number): Promise<TSauthortable | undefined> => {
    return await db.query.Authortable.findFirst({
        where: eq(Authortable.id, id)
    })
}

export const createAuthorService = async (user: TIAuthortable) => {
    await db.insert(Authortable).values(user)
    return "User created successfully";
}

export const updateAuthorService = async (id: number, user: TIAuthortable) => {
    await db.update(Authortable).set(user).where(eq(Authortable.id, id))
    return "User updated successfully";
}

export const deleteAuthorService = async (id: number) => {
    await db.delete(Authortable).where(eq(Authortable.id, id))
    return "User deleted successfully";
}