"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validations";
import { db } from "@/db";
import { products } from "@/db/schema";
import z from "zod";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";


export const addProductAction = async (prevState: FormState, formData: FormData) => {
    console.log("Product data received:", formData);

    try {
        const { userId, orgId } = await auth();
        if (!userId) {
            return {
                success: false,
                message: "User not authenticated.",
                errors: undefined
            }
        }
        if (!orgId) {
            return {
                success: false,
                message: "Organization not found.",
                errors: undefined
            }
        }
        //data
        const user = await currentUser();
        const userEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";
        const rawFormData = Object.fromEntries(formData.entries());

        const validateData = productSchema.safeParse(rawFormData);
        if (!validateData.success) {
            return {
                success: false,
                errors: validateData.error.flatten().fieldErrors,
                message: "Invalid Data",
            }
        }

        const { name, slug, tagline, description, websiteUrl, tags } = validateData.data;
        const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];
        await db.insert(products).values({
            name,
            slug,
            tagline,
            description,
            websiteUrl,
            tags: tagsArray,
            status: "pending",
            submittedBy: userEmail,
            organizationId: orgId || null,
            userId,
        });

        return {
            success: true,
            message: "Product submitted successfully. It is now pending review.",
            errors: undefined
        }

    } catch (error) {
        console.log(error)

        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors,
                message: "Validation error occurred.",
            }
        }

        return {
            success: false,
            errors: error,
            message: "Failed to submit product.",

        }
    }
}


export const upvoteProductAction = async (productId: number) => {

    try {
        const { userId, orgId } = await auth();
        if (!userId) {
            return {
                success: false,
                message: "User not authenticated.",
            }
        }
        if (!orgId) {
            return {
                success: false,
                message: "Organization not found.",
            }
        }

        await db.update(products).set({voteCount: sql`GREATEST(0, vote_count + 1)`}).where(eq(products.id, productId));
        revalidatePath("/")

        return {
            success: true,
            message: "Product upvoted successfully.",
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to upvote product.",
            voteCount: 0,
        }
    }
}


export const downvoteProductAction = async (productId: number) => {

    try {
        const { userId, orgId } = await auth();
        if (!userId) {
            return {
                success: false,
                message: "User not authenticated.",
            }
        }
        if (!orgId) {
            return {
                success: false,
                message: "Organization not found.",
            }
        }

        await db.update(products).set({ voteCount: sql`GREATEST(0, vote_count - 1)` }).where(eq(products.id, productId));
        revalidatePath("/")

        return {
            success: true,
            message: "Product downvoted successfully.",
        }

    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to downvote product.",
            voteCount: 0,
        }
    }
}

