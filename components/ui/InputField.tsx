import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
    label: string;
    placeholder: string;
    type?: string;
    id: string;
    name: Path<T>;
    className?: string;
    register: UseFormRegister<T>;
    error?: string;
};

const InputField = <T extends FieldValues>({
    label,
    placeholder,
    type = "text",
    id,
    name,
    className,
    register,
    error,
}: InputFieldProps<T>) => {
    return (
        <div className={`flex flex-col gap-1 p-3 sm:p-6 ${className ?? ""}`}>
            <label
                htmlFor={id}
                className="uppercase text-gray-500 font-bold ml-3 text-sm"
            >
                {label}
            </label>

            <input
                {...register(name)}
                id={id}
                type={type}
                placeholder={placeholder}
                className={`sm:py-5 sm:px-6 py-3 px-5 bg-stone-100 rounded-3xl outline-none shadow-md focus:ring-2 placeholder:text-gray-300 placeholder:font-semibold ${error ? "ring-2 ring-red-400" : "focus:ring-gray-800"}`}
            />
            {error && (
                <p className="mt-2 ml-3 text-sm font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
