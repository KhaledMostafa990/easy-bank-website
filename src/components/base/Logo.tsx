import React from 'react'

export function Logo({ logoSrc, className, wrapperClasses }: { logoSrc: string, className?: string, wrapperClasses?: string }) {
    return (
        <>
            <figure
                className={`flex items-center w-fit h-full xl:w-fit ${wrapperClasses}`}
            >
                <img
                    className={`object-cover ${className}`}
                    src={logoSrc}
                    alt={'logo img'}
                    width={162}
                    height={27}
                />
            </figure>
        </>
    )
}
