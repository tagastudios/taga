// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { exampleRouter } from "./example";
import { userRouter } from "./user";
import { protectedExampleRouter } from "./protected-example-router";
import { incomeRouter } from "./incomes";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("example.", exampleRouter)
	.merge("user.", userRouter)
	.merge("auth.", protectedExampleRouter)
	.merge("incomes.", incomeRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
