import { BlogCard } from './../components/base/BlogCard';
import Section from '@/components/layout/Section'
import React from 'react'

interface BlogCardsProps {
    data: {
        blogCardsHeading: string
        blogCards: {
            blogCardImage: string
            blogCardHeading: string
            blogCardDescription: string
            blogCardAuthor: string
        }[]
    }
}

function BlogCards({ data }: BlogCardsProps) {
    const { blogCardsHeading, blogCards } = data

    return (
        <Section
            dataSection='blog'
            className='container bg-background-default py-16 lg:py-24 3xl:py-32'
        >
            <div
                className='col-start-2 col-span-10 flex flex-col gap-10    
                md:col-start-2 md:col-span-10 md:px-0 3xl:col-start-3 3xl:col-span-8'>

                {/* Heading */}
                <div className='text-center xl:text-start'>
                    <h2 className='text-3xl text-heading-base 2xl:md:text-5xl'>
                        {blogCardsHeading}
                    </h2>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4'>
                    {blogCards.map((blogCard, index) => (
                        <BlogCard index={index} blogCard={blogCard} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default BlogCards