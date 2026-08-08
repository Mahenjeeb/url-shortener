import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import userTable from "./user.db.schema";
const shortUrlTable = pgTable("shorturl", {
  shortId: varchar({ length: 8 }).notNull().unique(),
  redirectUrl: varchar({ length: 255 }).notNull(),
  visited: integer().array(),
  who: uuid().references(() => userTable.id).notNull(),
});
export default shortUrlTable;
