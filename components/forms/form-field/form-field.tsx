
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


interface FormFieldProps {
    id: string
    label: string
    name: string
    placeholder: string
    required?: boolean
    error: string | null
    helpText?: string
    textarea?: boolean
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
}

const FormField = ({ id, label, name, placeholder, required, onChange, error, helpText, textarea } : FormFieldProps) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            {textarea ? (
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onChange={
                        onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
                    }
                />
            ) : (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onChange={
                        onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
                    }
                />
            )}
            {helpText && <p className="text-xs text-muted-foreground">{helpText}</p>}
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    )
}

export default FormField
