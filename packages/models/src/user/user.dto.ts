import { z } from "zod";
import { basicModelDefinition } from "../basicDefinitions";

export const userDefinition = basicModelDefinition.extend({
    email: z.string().email({message: 'Invalid email'}),
    name: z.string().min(2),
    password: z.string().min(8),
})