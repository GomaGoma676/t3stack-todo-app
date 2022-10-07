// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { todoRouter } from "./todo";

export const appRouter = t.router({ todo: todoRouter });

// export type definition of API
export type AppRouter = typeof appRouter;
