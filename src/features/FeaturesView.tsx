import { Cards } from './../components/base/Cards';

import Section from '@/components/layout/Section'
import React from 'react'

// FeaturesView Component Interface
interface FeaturesViewProps {
    data: {
        featureIntroData: {
            featureIntroHeading: string
            featureIntroDescription: string
        }
        featuresData: {
            featureIcon: string
            featureHeading: string
            featureDescription: string
        }[]
    }
}

function FeaturesView({ data }: FeaturesViewProps) {
    const { featureIntroData } = data;
    const { featureIntroHeading, featureIntroDescription } = featureIntroData;

    return (
        <Section
            dataSection='features'
            className='container bg-background-secondary py-16 lg:py-24 3xl:py-32'
        >
            <div
                className='col-start-0 col-span-12 px-10 flex flex-col gap-10    
                lg:col-start-2 lg:col-span-10 xl:px-0 3xl:col-start-3 3xl:col-span-8'>

                {/* Section intro */}
                <div className="flex flex-col items-center justify-center text-center gap-5 2xl:items-start 2xl:text-start">
                    <h2 className="text-3xl text-gray-800 md:text-4xl 2xl:md:text-5xl">
                        {featureIntroHeading}
                    </h2>
                    <p className="text-bodytext-base md:text-base md:max-w-md 2xl:max-w-2xl">
                        {featureIntroDescription}
                    </p>
                </div>

                {/* Section Main */}
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4">
                        {data.featuresData.map((feature, index) => (
                            <Cards index={index} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default FeaturesView

