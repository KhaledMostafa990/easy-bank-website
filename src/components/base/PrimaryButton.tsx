import React from 'react'

export function PrimaryButton({ children, classes }: { children: React.ReactNode, classes?: string }) {
    return (
        <>
            <button
                className={`text-white text-sm font-semibold py-2.5 px-6 rounded-full 
                bg-gradient-to-r from-primary-default to-primary-light hover:opacity-75
                transition-all duration-700 capitalize lg:py-2 lg-px-12
                 ${classes}`}
            >
                {children}
            </button>
        </>
    )
}