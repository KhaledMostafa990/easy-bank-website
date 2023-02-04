import React from "react";
import Image from "next/image";

interface BlogCardProps {
    index: number;
    blogCard: {
        blogCardImage: string;
        blogCardHeading: string;
        blogCardDescription: string;
        blogCardAuthor: string;
    };
}

export function BlogCard({ index, blogCard }: BlogCardProps) {
    const { blogCardImage, blogCardHeading, blogCardDescription, blogCardAuthor } = blogCard;

    return (
        <div key={index} className='flex flex-col rounded-md shadow-md'>
            <div className='flex-shrink-0'>
                <Image
                    className='w-full h-[250px] rounded-md rounded-b-none'
                    src={blogCardImage}
                    width={327}
                    height={200}
                    alt='Blog Card Image'
                    loading="lazy"

                />
            </div>

            <div className='flex flex-col justify-between flex-1 p-4 md:p-5'>
                <div className='flex-1 flex flex-col gap-5'>
                    <p className='text-[12px] text-bodytext-base'>
                        <a href='#' className='hover:underline'>
                            {blogCardAuthor}
                        </a>
                    </p>

                    <a href='#' className='flex flex-col gap-5'>
                        <h4 className='text-[16px] font-light leading-6 tracking-wider  text-heading-base'>
                            {blogCardHeading}
                        </h4>

                        <p className='text-[13px] font-normal leading-5 text-bodytext-base'>
                            {blogCardDescription}
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
