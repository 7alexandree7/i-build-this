"use client"

import FormField from "@/components/forms/form-field/form-field"
import { Button } from "@/components/ui/button"
import { addProductAction } from "@/lib/products/product-action"
import { cn } from "@/lib/utils"
import { FormState, ProductErrors } from "@/types"
import { LoaderIcon, SparkleIcon } from "lucide-react"
import { useActionState } from "react"

type ActionState = { success: boolean; errors?: ProductErrors; message: string };


const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
};


const ProductSubmitForm = () => {

    const [state, formAction, isPending] = useActionState(addProductAction as any, initialState)
    const { success, errors, message } = state as ActionState;
    const getFieldErrors = (fieldName: string): string[] => {
        if(!errors) return [];
        return (errors as Record<string, string[]>)[fieldName] ?? [];
    }

    return (
        <form className="space-y-6" action={formAction}>

            {message && (
                <div className={cn("p-4 rounded-lg border",
                    success
                        ? "bg-primary/10 border-primary text-primary"
                        : "bg-destructive/10 border-destructive text-destructive"
                )}
                role="alert"
                aria-live="polite"
                >
                    {message}
                </div>
            )}

            <FormField
                id="name"
                label="Product Name"
                name="name"
                placeholder="Product name"
                required={true}
                error={getFieldErrors("name")}
                onChange={() => { }}
            />
            <FormField
                id="slug"
                label="Slug"
                name="slug"
                placeholder="my-awesome-product"
                required={true}
                error={getFieldErrors("slug")}
                helpText="URL-friendly version of your product name"
                onChange={() => { }}
            />
            <FormField
                id="tagline"
                label="Tagline"
                name="tagline"
                placeholder="A brief, catchy description"
                required={true}
                error={getFieldErrors("tagline")}
                onChange={() => { }}
            />
            <FormField
                id="description"
                label="Description"
                name="description"
                placeholder="A detailed description of your product"
                required={false}
                error={getFieldErrors("description")}
                onChange={() => { }}
                textarea={true}
            />
            <FormField
                id="websiteUrl"
                label="Website URL"
                name="websiteUrl"
                placeholder="https://my-awesome-product.com"
                required={true}
                error={getFieldErrors("websiteUrl")}
                helpText="Enter your product's official website URL"
                onChange={() => { }}
            />
            <FormField
                id="tags"
                label="Tags"
                name="tags"
                placeholder="Ai, Productivity, SaaS"
                required={false}
                error={getFieldErrors("tags")}
                helpText="Comma-separated tags to categorize your product"
                onChange={() => { }}
            />

            <Button size="lg" className="w-full" type="submit">
                {isPending ? (
                    <LoaderIcon className="size-4 animate-spin" />
                ) : (
                    <>
                        <SparkleIcon className="size-4" />
                        Submit Product
                    </>
                )}
            </Button>
        </form>
    )
}

export default ProductSubmitForm
