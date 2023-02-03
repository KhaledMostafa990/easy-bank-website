"use client";

import React, { useRef } from 'react'

import { HamburgerButton, Logo, PrimaryButton } from '@/components/base'
import { NavBar } from '@/components/layout';
import { menuClickHandler } from '../utils/menuClickHandler';
import { Overlay } from '@/components/base/Overlay';
import { useheaderScrollHandler } from '@/utils/headerScrollHandler';
import { useNavSectionObserver } from '@/utils/useSectionObserver';
import { useToggleNavOnResize } from '@/utils/useToggleNavOnResize';

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

    const toggleMenu = menuClickHandler(
        menuBtnRef.current,
        navRef.current,
        logoRef.current,
        overlayRef.current,
        activeClass
    );

    const { isNavOpenDesktop } = useToggleNavOnResize();

    if (isNavOpenDesktop && navRef?.current?.classList.contains('active')) toggleMenu();

    useheaderScrollHandler(headerRef);

    useNavSectionObserver(navListItems);

    return (
        <>
            <Overlay overlayRef={overlayRef} />

            <div
                ref={headerRef}
                className='container fixed bg-background-default
                [&.scrolled-down]:bg-background-default shadow-md
                transition-all duration-[0.84s] z-20'
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




