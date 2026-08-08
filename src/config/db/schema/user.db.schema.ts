import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
const userTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 15 }).notNull(),
  salt: varchar({ length: 8 }).notNull(),
});

export default userTable;