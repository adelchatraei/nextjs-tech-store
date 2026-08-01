type PaymentCardProps = {
    title: string;
    description: string;
    value: string;
    currentValue: string;
    onChange: (value: string) => void;
    icon: React.ReactNode;
};

const PaymentCard = ({
    title,
    description,
    value,
    currentValue,
    onChange,
    icon,
}: PaymentCardProps) => {
    const isSelected = currentValue === value;

    return (
        <label
            className={`flex justify-self-center gap-4 rounded-3xl border-2 px-5 py-4 cursor-pointer transition ${isSelected ? "border-primary bg-green-50 shadow-xl/30" : "border-gray-300"}`}
        >
            <input
                name="PaymendMethod"
                type="radio"
                checked={isSelected}
                onChange={() => onChange(value)}
                className="sr-only"
            />
            <div className="flex items-center justify-between gap-2 sm:gap-3">
                <div
                    className={`bg-background p-2.5 rounded-xl shadow-md ${isSelected ? "text-primary" : "text-gray-300"}`}
                >
                    {icon}
                </div>
                <div className="flex flex-col items-start gap-2 sm:gap-3">
                    <h3 className="font-semibold text-gray-800">{title}</h3>
                    <p className="text-primary font-semibold text-[12px] uppercase">
                        {description}
                    </p>
                </div>
                {isSelected ? (
                    <span className="grid h-4 w-4 sm:h-6 sm:w-6 place-items-center rounded-full shadow-sm shadow-gray-400 transition-colors duration-200 bg-primary">
                        <span className="h-2 w-2 rounded-sm bg-white" />
                    </span>
                ) : (
                    <span className="grid h-4 w-4 sm:h-6 sm:w-6 place-items-center rounded-full transition-colors duration-200 bg-white">
                        <span className="h-2 w-2 rounded-sm bg-white" />
                    </span>
                )}
            </div>
        </label>
    );
};

export default PaymentCard;

("bg-background p-2.5 rounded-xl shadow-md ");
