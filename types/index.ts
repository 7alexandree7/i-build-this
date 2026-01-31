import { InferSelectModel } from "drizzle-orm"
import { products } from "@/db/schema"

export type FormState = {
    success: boolean;
    errors?: Record<string, string[]>;
    message: string;
}

export interface ProductErrors {
    name?: string[]
    slug?: string[]
    tagline?: string[]
    description?: string[] | null
    websiteUrl?: string[]
    tags?: string[]
}


export interface FormFieldProps {
    id: string
    label: string
    name: string
    placeholder: string
    required?: boolean
    error: string[] | undefined
    helpText?: string
    textarea?: boolean
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}


export type product = InferSelectModel<typeof products>