CREATE TABLE IF NOT EXISTS "author" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"year" integer,
	"author" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Books" ADD CONSTRAINT "Books_author_author_id_fk" FOREIGN KEY ("author") REFERENCES "public"."author"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
