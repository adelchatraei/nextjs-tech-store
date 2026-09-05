import { Schema, model, models } from "mongoose";

const SiteSettingsSchema = new Schema(
    {
        platformName: String,
        supportEmail: String,
        logoUrl: String,
        footerText: String,
        seoDescription: String,

        paymentMethods: {
            cod: { type: Boolean, default: true },
            bkash: { type: Boolean, default: false },
            nagad: { type: Boolean, default: false },
            rocket: { type: Boolean, default: false },
            sslCommerz: { type: Boolean, default: false },
            stripe: { type: Boolean, default: false },
        },

        bkashNumber: String,
        nagadNumber: String,
        rocketNumber: String,

        paymentInstructions: String,
    },
    { timestamps: true },
);

export default models.SiteSettings || model("SiteSettings", SiteSettingsSchema);
