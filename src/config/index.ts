import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "SkillCore - Largest Agency of Experts",
        template: `%s | SkillCore`
    },
    description: "SkillCore is a full-service agency that brings together top developers, designers, and multimedia specialists to deliver exceptional results. From web development to creative design and video production, we handle every aspect of your project with expertise. No matter the scope, we have the right expert for you. Get started today and let us turn your vision into reality!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "SkillCore - Largest Agency of Experts",
        description: "SkillCore is a full-service agency that brings together top developers, designers, and multimedia specialists to deliver exceptional results. From web development to creative design and video production, we handle every aspect of your project with expertise. No matter the scope, we have the right expert for you. Get started today and let us turn your vision into reality!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@zehv",
        title: "SkillCore - Largest Agency of Experts",
        description: "SkillCore is a full-service agency that brings together top developers, designers, and multimedia specialists to deliver exceptional results. From web development to creative design and video production, we handle every aspect of your project with expertise. No matter the scope, we have the right expert for you. Get started today and let us turn your vision into reality!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
