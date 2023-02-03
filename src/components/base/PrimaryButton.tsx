import React from 'react'

export function PrimaryButton({ children, classes }: { children: React.ReactNode, classes: string }) {
    return (
        <>
            <button
                className={`text-white text-sm lg:text-base font-semibold py-3 px-6 rounded-full bg-gradient-to-tl from-primary-default to-primary-light
                hover:to-primary-default hover:opacity-75 transition-all duration-700 capitalize ${classes}`}
            >
                {children}
            </button>
        </>
    )
}