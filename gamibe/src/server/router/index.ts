// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { userRouter } from "./user";
import { protectedExampleRouter } from "./protected-example-router";
import { exampleRouter } from "./example";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("example.", exampleRouter)
	.merge("user.", userRouter)
	.merge("auth.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
