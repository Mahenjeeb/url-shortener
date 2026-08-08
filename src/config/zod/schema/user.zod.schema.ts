import { z } from "zod";
const UserInputSchema = z.object({
  name: z.string({ error: "name is required" }).min(1, "name is too short"),
  email: z.email({ error: "invalid email format" }),
  password: z.string({ error: "password is required" }).min(6, "password is too short"),
});
export type userInput = z.infer<typeof UserInputSchema>;