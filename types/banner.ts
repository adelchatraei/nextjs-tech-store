// types/banner.ts

import { HeroSlide } from "@/schemas/banner/banner.schema";

export type EditableSlide = HeroSlide & {
    clientId: string;
    _id?: string;
};
