import { PgTable, serial, text, varchar, integer, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// TABLES TABLE
// Define the "author" table
const Authortable = pgTable("author", {
  id: serial("id").primaryKey(), // Auto-increment primary key
  name: varchar("name", { length: 255 }), // VARCHAR(255) column
});

// Define the "Books" table
const Bookstable = pgTable("Books", {
  id: serial("id").primaryKey(), // Auto-increment primary key
  title: text("title"), // TEXT column
  year: integer("year"), // INTEGER column
  authorId: integer("author").references(() => Authortable.id, { onDelete: 'cascade' }), // Foreign key referencing the "author" table
});

// RELATIONS TABLE
// Define the relationship between the "Books" and "author" tables
const booktablerelation = relations(Bookstable, ({ one }) => ({
  author: one(Authortable, {
    fields: [Bookstable.authorId], // The foreign key column in the "Books" table
    references: [Authortable.id], // The primary key column in the "author" table
  }),
}));

// Define the relationship between the "author" and "Books" tables
const Authortablerelations = relations(Authortable, ({ many }) => ({
  books: many(Bookstable), // One-to-many relationship
}));


type TSauthortable =typeof Authortable.$inferSelect;
type TIAuthortable = typeof Authortable.$inferInsert

type TSBookstable =typeof Bookstable.$inferSelect;
type TIBookstable = typeof Bookstable.$inferInsert



export {
    Authortable,
    Bookstable,

    booktablerelation,
    Authortablerelations,

    TSauthortable,
    TIAuthortable,
    TSBookstable,
    TIBookstable,
   
}