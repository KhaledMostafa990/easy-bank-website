
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
                                className={`${border} lg:py-0 lg:border-none mx-3`}>
                                <a
                                    href={`#${item}`}
                                    className='capitalize block py-4 text-center text-heading-base font-medium 
                                    transition-all duration-200 border-b-4 border-transparent 
                                    [&.active]:text-primary-default [&.active]:border-primary-default
                                    [&.active]:hover:rounded-none [&.active]:hover:bg-transparent [&.active]:hover:px-0
                                    lg:hover:rounded-full hover:bg-primary-default/[0.25] hover:lg:px-3 lg:py-0'>
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

