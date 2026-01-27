"use client"

import FormField from "@/components/forms/form-field/form-field"
import { Button } from "@/components/ui/button"
import { addProductAction } from "@/lib/products/product-action"
import { LoaderIcon, SparkleIcon } from "lucide-react"
import { useActionState } from "react"

const initialState = {
    success: false,
    error: {},
    message: "",
};

const ProductSubmitForm = () => {

    const [state, formAction, isPending] = useActionState(addProductAction, initialState)


    return (
        <form className="space-y-6" action={formAction}>
            <FormField
                id="name"
                label="Product Name"
                name="name"
                placeholder="Product name"
                required={true}
                error=""
                onChange={() => { }}
            />
            <FormField
                id="slug"
                label="Slug"
                name="slug"
                placeholder="my-awesome-product"
                required={true}
                error=""
                helpText="URL-friendly version of your product name"
                onChange={() => { }}
            />
            <FormField
                id="tagline"
                label="Tagline"
                name="tagline"
                placeholder="A brief, catchy description"
                required={true}
                error=""
                onChange={() => { }}
            />
            <FormField
                id="description"
                label="Description"
                name="description"
                placeholder="A detailed description of your product"
                required={false}
                error=""
                onChange={() => { }}
                textarea={true}
            />
            <FormField
                id="websiteUrl"
                label="Website URL"
                name="websiteUrl"
                placeholder="https://my-awesome-product.com"
                required={true}
                error=""
                helpText="Enter your product's official website URL"
                onChange={() => { }}
            />
            <FormField
                id="tags"
                label="Tags"
                name="tags"
                placeholder="Ai, Productivity, SaaS"
                required={true}
                error=""
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
