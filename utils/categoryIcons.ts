import {
    Battery,
    Cable,
    Camera,
    Cpu,
    Gamepad2,
    Grid2X2,
    Headphones,
    Laptop,
    Monitor,
    Mouse,
    Phone,
    Router,
    Smartphone,
    Tablet,
    Tv,
    Watch,
    Wifi,
    Zap,
} from "lucide-react";

export const categoryIcons = {
    Grid2X2,
    Smartphone,
    Laptop,
    Monitor,
    Cpu,
    Mouse,
    Watch,
    Headphones,
    Tablet,
    Tv,
    Gamepad2,
    Camera,
    Zap,
    Wifi,
    Router,
    Phone,
    Cable,
    Battery,
};

export type CategoryIconName = keyof typeof categoryIcons;

export function getCategoryIcon(iconName?: string) {
    if (!iconName) {
        return Grid2X2;
    }

    return categoryIcons[iconName as CategoryIconName] ?? Grid2X2;
}
