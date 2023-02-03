import BlogCards from '@/features/BlogCards'
import FeaturesView from '@/features/FeaturesView'
import Hero from '@/features/Hero'


export default function Home() {

  return (
    <>
      <Hero data={heroData} />
      <FeaturesView />
      <BlogCards />
    </>
  )
}

// Hero Data 
export const heroData = {
  heroHeading: 'Next generation digital banking',
  heroDescription:
    'Take your financial life online.Your Easybank account will be a one- stop - shop for spending, saving, budgeting, investing, and much more.',
  heroBtnText: 'Request Invite',
  heroBgImageMob: '/images/bg-intro-mobile.svg',
  heroBgImageDisk: '/images/bg-intro-desktop.svg',
  heroImage: '/images/image-mockups.png',
}