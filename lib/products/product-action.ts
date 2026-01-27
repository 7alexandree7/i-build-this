"use server";

type FormState = {
    success: boolean;
    error?: Record<string, string[]>;
    message: string;
}

export const addProductAction = async (prevState: FormState, formData: FormData) => {
    console.log("Product data received:", formData);
}

