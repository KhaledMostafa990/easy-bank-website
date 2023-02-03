import React from 'react'

// Section Component Interface 
interface SectionProps {
    children: React.ReactNode,
    className?: string,
    id?: string,
    dataSection?: string
}

// Section Component
export default function Section({ children, className, id, dataSection }: SectionProps) {
    return (
        <section className={className} id={id} data-section={dataSection}>
            {children}
        </section>
    )
}