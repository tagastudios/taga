import { createProtectedRouter } from "./protected-router";
import { z } from "zod";

export const incomeRouter = createProtectedRouter()
	.query("getAllIncomes", {
		input: z.object({
			uid: z.string().nullish(),
		}),
		async resolve({ ctx, input }) {
			try {
				console.log(ctx);

				return await ctx.prisma.incomes.findMany({
					where: {
						uid: input?.uid || "",
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
	.mutation("createIncome", {
		input: z.object({
			title: z.string(),
			description: z.string(),
			amount: z.number(),
			startedAt: z.date(),
			uid: z.string(),
			category: z.number(),
			paymentType: z.number(),
			recurringType: z.number(),
		}),
		async resolve({ ctx, input }) {
			try {
				await ctx.prisma.incomes.create({
					data: {
						startedAt: input.startedAt,
						title: input.title,
						description: input.description,
						amount: input.amount,
						category: {
							connect: { id: input.category },
						},
						paymentType: {
							connect: { id: input.paymentType },
						},
						recurringType: {
							connect: { id: input.recurringType },
						},
						user: {
							connect: { id: input.uid },
						},
					},
				});
			} catch (error) {
				console.log(error);
			}
		},
	});
