import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import AnimatedCodeBackground from '@/components/AnimatedCodeBackground'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://festushelaoshatipamba.com'),
  title: {
    default: 'Festus Helao Shatipamba - Software Developer Portfolio',
    template: '%s | Festus Helao Shatipamba',
  },
  description: 'Portfolio of Festus Helao Shatipamba - Computer Science graduate and Software Developer specializing in web development, mobile apps, and full-stack solutions. View projects, skills, certifications, and experience.',
  keywords: [
    'Software Developer',
    'Web Developer',
    'Full Stack Developer',
    'Portfolio',
    'Festus Helao Shatipamba',
    'React',
    'Next.js',
    'JavaScript',
    'Python',
    'Flutter',
    'Namibia Developer',
    'Computer Science',
  ],
  authors: [{ name: 'Festus Helao Shatipamba' }],
  creator: 'Festus Helao Shatipamba',
  publisher: 'Festus Helao Shatipamba',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://festushelaoshatipamba.com',
    title: 'Festus Helao Shatipamba - Software Developer Portfolio',
    description: 'Computer Science graduate and Software Developer specializing in web and mobile development. View my projects, skills, and certifications.',
    siteName: 'Festus Helao Shatipamba Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Festus Helao Shatipamba - Software Developer',
    description: 'Computer Science graduate and Software Developer specializing in web and mobile development.',
  },
  alternates: {
    canonical: 'https://festushelaoshatipamba.com',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6ff' },
    { media: '(prefers-color-scheme: dark)', color: '#090b1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Festus Helao Shatipamba',
    jobTitle: 'Software Developer',
    description: 'Computer Science graduate and Software Developer specializing in web and mobile development',
    url: 'https://festushelaoshatipamba.com',
    sameAs: [
      'https://www.linkedin.com/in/festus-helao-shatipamba',
      'https://github.com/Ferrariboy99',
      'https://www.instagram.com/helao_nafimane',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Namibia',
    },
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      'Software Engineering',
      'React',
      'Next.js',
      'JavaScript',
      'Python',
      'Flutter',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Boxicons */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* Unicons */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        {/* Theme initialization script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased relative`}>
        <AnimatedCodeBackground />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


