import { Logo, PrimaryButton } from '@/components/base'
import Section from '@/components/layout/Section'
import React from 'react'

// ContactFooter Component Interface
interface ContactFooterProps {
    data: {
        footerLogoSrc: string
        footerListItems: string[]
        footerCopyright: string
        footerSocialIcons: {
            icon: string
            alt: string
            link: string
        }[]
    }
}

function ContactFooter({ data }: ContactFooterProps) {
    const { footerLogoSrc, footerListItems, footerCopyright, footerSocialIcons } = data

    return (
        <Section dataSection='contact' className='container bg-heading-base py-16 lg:py-24 3xl:py-32'>
            <div
                className='col-start-0 col-span-12 px-10 flex flex-col gap-10 lg:px-0 lg:flex-row lg:justify-between lg:col-start-2 lg:col-span-10 3xl:col-start-3 3xl:col-span-8'>

                {/* Logo & Social icons */}
                <div className='flex flex-1 flex-col items-center justify-center text-center gap-8 lg:items-start 2xl:text-start'>

                    {/* Logo */}
                    <Logo logoSrc={footerLogoSrc} />

                    {/* Social icons */}
                    <div className='flex gap-5'>
                        {footerSocialIcons.map((icon, index) => (
                            <a
                                key={index}
                                href={icon.link}
                                target='_blank'
                                rel='noreferrer'
                                className='flex items-center justify-center'
                            >
                                <img
                                    src={icon.icon}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* List */}
                <div className='flex flex-1 flex-col items-center justify-center text-center gap-5 2xl:items-start 2xl:text-start'>
                    {/* Create nav list in two column on large screens */}

                    <ul
                        className='flex flex-col gap-5 lg:flex-row lg:gap-10 lg:justify-between       xl:gap-20'>

                        {/* First column */}
                        <li className='flex flex-col gap-5'>
                            {footerListItems.slice(0, 3).map((item, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    className='text-base text-center cursor-pointer capitalize text-background-default hover:text-primary-default transition-all duration-300 lg:text-start'
                                >
                                    {item}
                                </a>
                            ))}
                        </li>
                        {/* Second column */}
                        <li className='flex flex-col gap-5'>
                            {footerListItems.slice(3, 6).map((item, index) => (
                                <a
                                    key={index}
                                    href='#'
                                    className='text-base text-center cursor-pointer capitalize text-background-default hover:text-primary-default transition-all duration-300 lg:text-start'
                                >
                                    {item}
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>

                {/* CTA & Copyrights */}
                <div className='flex flex-1 flex-col items-center justify-center text-center gap-8'>
                    <PrimaryButton>Request Invite</PrimaryButton>
                    <p className='text-sm text-bodytext-base'> {footerCopyright}</p>
                </div>
            </div>
        </Section>
    )
}

export default ContactFooter