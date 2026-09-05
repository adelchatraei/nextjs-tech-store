"use client";

import { categoryIcons } from "@/utils/categoryIcons";

type CategoryIconPickerProps = {
    value: string;
    onChange: (icon: string) => void;
};

const CategoryIconPicker = ({ value, onChange }: CategoryIconPickerProps) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-3 ml-1">
                <label className="text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                    Visual Icon
                </label>

                <button
                    type="button"
                    className="text-[10px] font-black text-primary hover:text-primary-dark transition-colors"
                >
                    Upload File
                </button>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
                {Object.entries(categoryIcons).map(([name, Icon]) => {
                    const isSelected = value === name;

                    return (
                        <button
                            key={name}
                            type="button"
                            onClick={() => onChange(name)}
                            className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
                                isSelected
                                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                    : "bg-gray-50 text-gray-400 hover:bg-primary/5 hover:text-primary"
                            }`}
                        >
                            <Icon size={18} strokeWidth={1.8} />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryIconPicker;
