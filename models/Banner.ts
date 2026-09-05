import { Schema, model, models } from "mongoose";

const HeroSlideSchema = new Schema(
    {
        badge: {
            type: String,
            required: true,
            trim: true,
        },

        headlinePrimary: {
            type: String,
            required: true,
            trim: true,
        },

        headlineSecondary: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
        },
    },
    {
        _id: true,
    },
);

const BannerSchema = new Schema(
    {
        slides: {
            type: [HeroSlideSchema],
            default: [],
            validate: {
                validator: (value: unknown[]) => value.length <= 4,
                message: "Maximum 4 slides are allowed",
            },
        },
    },
    {
        timestamps: true,
    },
);

export const Banner = models.Banner || model("Banner", BannerSchema);
