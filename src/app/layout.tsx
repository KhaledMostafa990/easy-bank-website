import { Public_Sans } from '@next/font/google'
import './globals.scss'

import ContactFooter from '@/features/ContactFooter'
import Navigation from '@/features/Navigation'
const public_sans = Public_Sans({ subsets: ["latin"], variable: '--font-sans' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>

        <div
          className={`${public_sans.variable} scroll-smooth w-full max-w-full overflow-x-hidden font-primary-sans bg-background-default`}
        >
          <header className="">
            <Navigation data={navData} />
          </header>

          <main>
            {children}
          </main>

          <footer>
            <ContactFooter data={footerData} />
          </footer>

        </div>
      </body>
    </html>
  )
}

//  Navigation Data 
const navData = {
  navListItems: ['home', 'about', 'contact', 'blog', 'careers'],
  logoSrc: '/images/logo.svg',
}

// Footer Data
const footerData = {
  footerLogoSrc: '/images/logo-white.svg',
  footerListItems: ['about Us', 'contact', 'blog', 'careers', 'support', 'privacy policy'],
  footerCopyright: '© Easybank 2022. All Rights Reserved Developed by Khaled Farghly',
  footerSocialIcons: [
    {
      icon: '/images/icon-facebook.svg',
      alt: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      icon: '/images/icon-twitter.svg',
      alt: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      icon: '/images/icon-pinterest.svg',
      alt: 'pinterest',
      link: 'https://www.pinterest.com/',
    },
    {
      icon: '/images/icon-instagram.svg',
      alt: 'instagram',
      link: 'https://www.instagram.com/',
    },
  ],
}  