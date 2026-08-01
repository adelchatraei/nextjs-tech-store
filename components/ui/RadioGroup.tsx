type RadioOption = {
    label: string;
    value: string;
    disabled?: boolean;
};

type RadioGroupProps = {
    title: string;
    name: string;
    value: string;
    options: RadioOption[];
    onChange: (value: string) => void;
    className?: string;
};

const RadioGroup = ({
    title,
    name,
    value,
    onChange,
    options,
    className,
}: RadioGroupProps) => {
    return (
        <div className="flex flex-col gap-1 p-3 sm:p-6">
            <label className="uppercase text-gray-500 font-bold text-sm ml-3">
                {title}
            </label>

            <div className={className}>
                {options.map((option) => {
                    const isSelected = value === option.value;
                    return (
                        <label
                            key={option.value}
                            className={`flex items-center justify-center rounded-3xl font-bold sm:py-5 py-3 px-4 cursor-pointer transition-all duration-300 ${isSelected ? " bg-primary text-white" : " bg-stone-100"}`}
                        >
                            <input
                                type="radio"
                                checked={isSelected}
                                onChange={() => onChange(option.value)}
                                name={name}
                                className="sr-only"
                                disabled={option.disabled}
                            />
                            <span>{option.label}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default RadioGroup;
