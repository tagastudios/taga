// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";
import { userRouter } from "./user";

import { exampleRouter } from "./example";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("example.", exampleRouter)
	.merge("user.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
