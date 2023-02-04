import Image from "next/image";
import React from "react";

interface Feature {
    featureIcon: string;
    featureHeading: string;
    featureDescription: string;
}

export function Card({ index, feature }: { index: number; feature: Feature }) {
    const { featureIcon, featureHeading, featureDescription } = feature;

    return (
        <div key={index} className="flex flex-col items-center justify-center gap-5 py-6 rounded-lg shadow-sm 2xl:items-start">
            <Image
                className="object-cover"
                src={featureIcon}
                width={64}
                height={64}
                alt="feature icon"
                loading="lazy"
            />


            <h3 className="text-xl text-center text-heading-base md:text-2xl">
                {featureHeading}
            </h3>

            <p className="text-center w-full text-bodytext-base md:w-sm md:text-lg 2xl:w-full 2xl:text-start">
                {featureDescription}
            </p>
        </div>
    );
}
