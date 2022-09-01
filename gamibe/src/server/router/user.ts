import { z } from "zod";
import { createRouter } from "./context";

export const userRouter = createRouter()
	.query("getAll", {
		async resolve({ ctx }) {
			try {
				console.log(ctx);

				return await ctx.prisma.user.findMany({
					select: {
						firstName: true,
						lastName: true,
						email: true,
					},
					orderBy: {
						createdAt: "desc",
					},
				});
			} catch (error) {
				console.log("error", error);
			}
		},
	})

	.mutation("createUser", {
		input: z.object({
			firstName: z.string(),
			lastName: z.string(),
			email: z.string(),
		}),
		async resolve({ ctx, input }) {
			try {
				await ctx.prisma.user.create({
					data: {
						firstName: input.firstName,
						lastName: input.lastName,
						email: input.email,
					},
				});
			} catch (error) {
				console.log(error);
			}
		},
	});
