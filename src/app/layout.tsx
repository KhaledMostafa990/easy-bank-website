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
          className={`${public_sans.variable} scroll-smooth w-full max-w-full overflow-hidden font-primary-sans bg-background-default`}
        >
          <header className="">
            <Navigation data={navData} />
          </header>

          <main className='container'>
            {children}
          </main>

          <footer>
            <ContactFooter />
          </footer>

        </div>
      </body>
    </html>
  )
}

//  Navigation Data 
export const navData = {
  navListItems: ['home', 'about', 'contact', 'blog', 'careers'],
  logoSrc: '/images/logo.svg',
}
