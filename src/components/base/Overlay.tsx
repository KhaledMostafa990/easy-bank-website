import React from 'react'

export function Overlay({ overlayRef }: { overlayRef: any }) {
    return (
        <div
            ref={overlayRef}
            className='lg:hidden w-screen absolute left-0 top-0 [&.active]:h-screen transition-colors duration-500 [&.active]:bg-black/50 z-10'
        />
    )
}
