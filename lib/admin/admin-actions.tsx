"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { product } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const approveProductAction = async (productId: product["id"]) => {
    console.log("Approve product", productId);

    try {
        await db
            .update(products)
            .set({ status: "approved", approvedAt: new Date() })
            .where(eq(products.id, productId));

        revalidatePath("/admin");

        return {
            success: true,
            message: "Product approved successfully",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Failed to approve product",
        };
    }
};

export const rejectProductAction = async (productId: product["id"]) => {
    console.log("Reject product", productId);
    try {
        await db
            .update(products)
            .set({ status: "rejected" })
            .where(eq(products.id, productId));

        revalidatePath("/admin");

        return {
            success: true,
            message: "Product rejected successfully",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Failed to reject product",
        };
    }
};