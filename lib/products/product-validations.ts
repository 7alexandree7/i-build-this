import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(2, { message: "Product name is required" }).max(100, { message: "Product name must be less than 100 characters" }),
    slug: z.string().min(2, { message: "Slug is required" }).max(200, { message: "Slug must be less than 100 characters" }).regex(/^[a-z0-9-]+$/, { message: "Slug can only contain lowercase letters, numbers, and hyphens" }),
    tagline: z.string().min(2, { message: "Tagline is required" }).max(150, { message: "Tagline must be less than 150 characters" }),
    description: z.string().max(1000, { message: "Description must be less than 1000 characters" }).optional(),
    websiteUrl: z.string().min(2, { message: "Website URL is required" }),
    tags: z
        .string()
        .min(1, { message: "At least one tag is required" })
        .max(200, { message: "Tags must be less than 200 characters" })
        .transform((val) =>
            val
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
                .map((tag) => tag.toLowerCase())
        )
})