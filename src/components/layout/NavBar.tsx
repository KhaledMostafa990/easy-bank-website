
import React from 'react';


export const NavBar = ({ navRef, navListRef, navListItems }: { navRef: any, navListRef: any, navListItems: string[] }) => {

    return (
        <>
            {/* Navigation items*/}
            <nav
                ref={navRef}
                className='h-fit min-w-[80%] max-w-xs
                absolute top-[50%] left-[50%] translate-y-[-150%]
                [&.active]:translate-y-[30%] translate-x-[-50%]
                transition-all duration-700 [&.active]:block
                [&.active]:bg-background-default lg:min-w-fit
                lg:static lg:h-fit lg:w-fit lg:translate-x-0 lg:translate-y-0'
            >
                <ul
                    ref={navListRef}
                    className='flex flex-col p-4 lg:p-0 lg:flex-row'
                >
                    {navListItems.map((item, index) => {
                        const border = index === navListItems.length - 1 ? '' : 'border-b-[.12rem] border-neutral-200';
                        return (
                            <li
                                key={index}
                                className={`${border} hover:bg-primary-default/[0.05] lg:py-0 lg:border-none`}>
                                <a
                                    href={`#${item}`}
                                    className='capitalize block py-4 lg:py-0 text-center text-heading-base font-medium hover:text-primary-default [&.active]:text-primary-default border-b-4 border-transparent [&.active]:border-primary-default lg:px-2 2xl:px-6'>
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
};

