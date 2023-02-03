import BlogCards from '@/features/BlogCards'
import FeaturesView from '@/features/FeaturesView'
import Hero from '@/features/Hero'


export default function Home() {

  return (
    <>
      <Hero data={heroData} />
      <FeaturesView data={{ featureIntroData, featuresData }} />
      <BlogCards />
    </>
  )
}

// Hero Data 
const heroData = {
  heroHeading: 'Next generation digital banking',
  heroDescription:
    'Take your financial life online.Your Easybank account will be a one- stop - shop for spending, saving, budgeting, investing, and much more.',
  heroBtnText: 'Request Invite',
  heroBgImageMob: '/images/bg-intro-mobile.svg',
  heroBgImageDisk: '/images/bg-intro-desktop.svg',
  heroImage: '/images/image-mockups.png',
}

// Features Data

const featureIntroData = {
  featureIntroHeading: 'Why choose Easybank?',
  featureIntroDescription:
    'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.',
}

const featuresData = [
  {
    featureIcon: '/images/icon-online.svg',
    featureHeading: 'Online Banking',
    featureDescription:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    featureIcon: '/images/icon-budgeting.svg',
    featureHeading: 'Simple Budgeting',
    featureDescription:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    featureIcon: '/images/icon-onboarding.svg',
    featureHeading: 'Fast Onboarding',
    featureDescription:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    featureIcon: '/images/icon-api.svg',
    featureHeading: 'Open API',
    featureDescription:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]
