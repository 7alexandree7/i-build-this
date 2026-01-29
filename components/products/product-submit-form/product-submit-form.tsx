"use client"

import FormField from "@/components/forms/form-field/form-field"
import { Button } from "@/components/ui/button"
import { addProductAction } from "@/lib/products/product-action"
import { FormState, ProductErrors } from "@/types"
import { LoaderIcon, SparkleIcon } from "lucide-react"
import { useActionState } from "react"


const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
};


const ProductSubmitForm = () => {

    const [state, formAction, isPending] = useActionState(addProductAction, initialState)
    const { success, errors = {}, message } = state as { success: boolean; errors?: ProductErrors; message: string };

    return (
        <form className="space-y-6" action={formAction}>
            <FormField
                id="name"
                label="Product Name"
                name="name"
                placeholder="Product name"
                required={true}
                error={errors?.name ?? []}
                onChange={() => { }}
            />
            <FormField
                id="slug"
                label="Slug"
                name="slug"
                placeholder="my-awesome-product"
                required={true}
                error={errors?.slug ?? []}
                helpText="URL-friendly version of your product name"
                onChange={() => { }}
            />
            <FormField
                id="tagline"
                label="Tagline"
                name="tagline"
                placeholder="A brief, catchy description"
                required={true}
                error={errors?.tagline ?? []}
                onChange={() => { }}
            />
            <FormField
                id="description"
                label="Description"
                name="description"
                placeholder="A detailed description of your product"
                required={false}
                error={errors?.description ?? []}
                onChange={() => { }}
                textarea={true}
            />
            <FormField
                id="websiteUrl"
                label="Website URL"
                name="websiteUrl"
                placeholder="https://my-awesome-product.com"
                required={true}
                error={errors?.websiteUrl ?? []}
                helpText="Enter your product's official website URL"
                onChange={() => { }}
            />
            <FormField
                id="tags"
                label="Tags"
                name="tags"
                placeholder="Ai, Productivity, SaaS"
                required={false}
                error={errors?.tags ?? []}
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
