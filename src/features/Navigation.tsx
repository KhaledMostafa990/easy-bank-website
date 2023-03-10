"use client";

import React, { useEffect, useRef } from 'react'

import { HamburgerButton, Logo, PrimaryButton, Overlay } from '@/components/base'
import { NavBar } from '@/components/layout';
import { menuClickHandler, useNavSectionObserver, useViewportOnResize } from '@/utils';

interface NavigationProps {
    data: {
        navListItems: string[],
        logoSrc: string
    }
}

export default function Navigation(data: NavigationProps) {
    const { navListItems, logoSrc } = data.data;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const navList = useRef<HTMLElement | null>(null);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);
    const overlayRef = useRef<HTMLElement | null>(null);
    const activeClass = 'active';

    const { isDesktop } = useViewportOnResize();
    const toggleMenu = menuClickHandler(
        menuBtnRef.current,
        navRef.current,
        logoRef.current,
        overlayRef.current,
        activeClass
    );

    useNavSectionObserver(navListItems);


    if (isDesktop && navRef?.current?.classList.contains('active')) toggleMenu();

    useEffect(() => {
        if (!isDesktop) {
            navListItems.forEach((item) => {
                const navLink = document.querySelector(`a[href="#${item}"]`);
                if (navLink) {
                    navLink.addEventListener('click', () => {
                        if (navRef?.current?.classList.contains('active')) toggleMenu();
                    });
                }
            });
        }
    }, [isDesktop, navListItems, toggleMenu]);


    return (
        <>
            <Overlay overlayRef={overlayRef} />

            <div
                ref={headerRef}
                className='container fixed bg-background-default
                shadow-sm transition-all duration-[0.84s] z-20'
            >
                <div
                    className='col-start-2 col-span-10 3xl:col-start-3
                    3xl:col-span-8 py-4 flex justify-between
                    items-center transition-all duration-[0.84s]'>
                    <Logo logoSrc={logoSrc} />
                    <NavBar navRef={navRef} navListRef={navList} navListItems={navListItems} />
                    <HamburgerButton onClick={toggleMenu} menuBtnRef={menuBtnRef} />
                    <PrimaryButton classes={'hidden lg:inline-block'}>Request Invite</PrimaryButton>
                </div>
            </div>
        </>
    )
}




