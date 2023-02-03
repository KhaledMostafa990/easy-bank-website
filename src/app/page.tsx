import BlogCards from '@/features/BlogCards'
import FeaturesView from '@/features/FeaturesView'
import Hero from '@/features/Hero'


export default function Home() {

  return (
    <>
      <Hero data={heroData} />
      <FeaturesView data={{ featureIntroData, featuresData }} />
      <BlogCards data={blogCardsData} />
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

// Blog Cards Data
const blogCardsData = {
  blogCardsHeading: 'Latest Articles',
  blogCards: [
    {
      blogCardImage: '/images/image-currency.jpg',
      blogCardHeading: 'Receive money in any currency with no fees',
      blogCardDescription:
        'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      blogCardAuthor: 'By Claire Robinson',
    },
    {
      blogCardImage: '/images/image-restaurant.jpg',
      blogCardHeading: 'Treat yourself without worrying about money',
      blogCardDescription:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      blogCardAuthor: 'By Wilson Hutton',
    },
    {
      blogCardImage: '/images/image-plane.jpg',
      blogCardHeading: 'Take your Easybank card wherever you go',
      blogCardDescription: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      blogCardAuthor: 'By Wilson Hutton',
    },
    {
      blogCardImage: '/images/image-confetti.jpg',
      blogCardHeading: 'Our invite-only Beta accounts are now live!',
      blogCardDescription: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
      blogCardAuthor: 'By Claire Robinson',
    },
  ]
}