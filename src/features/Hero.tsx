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
            className='container'
        >
            <div className="min-h-[77vh] col-start-0 col-span-12 w-full flex flex-col items-center
                lg:pt-24 lg:flex-row-reverse lg:col-start-2 3xl:col-start-3 ">

                {/* background image */}
                <div className="relative w-full lg:flex-1 ">
                    <picture
                        className="absolute top-0 left-0 w-full h-full
                        lg:h-[150%] lg:w-[150%] lg:translate-x-[-10%] lg:translate-y-[-40%] 2xl:translate-x-[-18%] 2xl:translate-y-[-61%] 2xl:min-h-[100vh]"
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
                        flex justify-center items-center'
                    >
                        <Image
                            className='h-full w-full max-w-[500px] translate-y-[-15%]
                            md:max-h-[939px] lg:w-[767px] lg:relative 2xl:max-w-[767px] 
                            2xl:absolute 2xl:top-0 2xl:left-0 2xl:h-[939px] 2xl:translate-x-[0%] 2xl:translate-y-[-44%] z-10'
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
                    <h1 className='text-5xl 2xl:text-6xl text-heading-base max-w-md leading-[47px] 2xl:leading-[64px]'>
                        {heroHeading}
                    </h1>

                    <p
                        className='text-sm text-bodytext-base max-w-md lg:text-base'>
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