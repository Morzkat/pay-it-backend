ALTER TABLE "transactions" RENAME COLUMN "status" TO "status_id";--> statement-breakpoint
ALTER TABLE "transactions" RENAME COLUMN "category" TO "category_id";--> statement-breakpoint
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_status_transaction_status_id_fk";
--> statement-breakpoint
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_category_transaction_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "transactions" ADD COLUMN "user_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_status_id_transaction_status_id_fk" FOREIGN KEY ("status_id") REFERENCES "public"."transaction_status"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_id_transaction_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."transaction_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
