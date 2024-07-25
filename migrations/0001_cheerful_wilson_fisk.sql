CREATE TABLE IF NOT EXISTS "transaction_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"create_at" timestamp DEFAULT now() NOT NULL,
	"update_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transaction_categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"uuid" uuid DEFAULT gen_random_uuid(),
	"amount" numeric(12, 2) NOT NULL,
	"status" integer NOT NULL,
	"category" integer NOT NULL,
	"create_at" timestamp DEFAULT now() NOT NULL,
	"update_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transaction_status" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"create_at" timestamp DEFAULT now() NOT NULL,
	"update_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "transaction_status_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_status_transaction_status_id_fk" FOREIGN KEY ("status") REFERENCES "public"."transaction_status"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_transaction_categories_id_fk" FOREIGN KEY ("category") REFERENCES "public"."transaction_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
