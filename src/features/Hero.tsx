import { PrimaryButton } from '@/components/base';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import React from 'react'

interface HeroProps {
    data: {
        heroHeading: string,
        heroDescription: string,
        heroBtnText: string,
        heroBgImageMob: string,
        heroBgImageDisk: string,
        heroImage: string
    }
}

function Hero(data: HeroProps) {
    const { heroHeading, heroDescription, heroBtnText, heroBgImageMob, heroBgImageDisk, heroImage } = data.data;

    return (
        <Section
            dataSection='home'
            className='min-h-screen overflow-hidden col-start-0 col-span-12 lg:col-start-2
            3xl:col-start-3 3xl:col-span-8 lg:pt-24'
        >

            <div className="w-full flex flex-col items-center lg:flex-row-reverse ">

                {/* background image */}
                <div className="lg:flex-1 relative w-full max-h-[100%]">
                    <picture
                        className="absolute top-0 left-0 w-full h-full
                        lg:h-[150%] lg:w-[150%] 
                        lg:translate-x-[-10%] lg:translate-y-[-40%]"
                    >
                        <source media="(max-width: 1023px)" srcSet={heroBgImageMob} />
                        <source media="(min-width: 1024px)" srcSet={heroBgImageDisk} />
                        <Image
                            className="w-full h-full"
                            src={heroBgImageMob}
                            width={1271}
                            height={1034}
                            priority
                            alt="" />
                    </picture>

                    {/*hero image*/}
                    <figure
                        className='m-auto lg:m-0 w-full max-w-[75%] lg:max-w-full
                        flex justify-center items-center lg:flex-1'
                    >
                        <Image
                            className='h-full md:max-h-[939px]
                            w-full max-w-[500px] lg:max-w-[732px]
                            lg:relative translate-y-[-15%]'
                            src={heroImage}
                            width={767}
                            height={939}
                            priority
                            alt="A beautiful landscape"
                        />

                    </figure>
                </div>

                {/* Hero Content */}
                <div className='h-full lg:flex-1 flex flex-col justify-center px-4 lg:px-0 lg:items-start
                    items-center gap-5 md:gap-10 text-center lg:text-start'
                >
                    <h1 className='text-3xl lg:text-5xl text-heading-base max-w-md tracking-wider'>
                        {heroHeading}
                    </h1>

                    <p className='text-sm lg:text-base text-bodytext-base mt-4 max-w-md'>
                        {heroDescription}
                    </p>

                    <PrimaryButton classes=''>
                        {heroBtnText}
                    </PrimaryButton>
                </div>
            </div>
        </Section >
    )
}

export default Hero