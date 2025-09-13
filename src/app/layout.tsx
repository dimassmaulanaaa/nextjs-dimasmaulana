import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { user } from "@/data/user";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

const fontHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const fontBody = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${user.name} Portfolio`,
    default: `Home | ${user.name} Portfolio`,
  },
  description: `I'm ${user.name}, ${user.headline}`,
  keywords: [
    "Dimas Maulana",
    "Dimas Maulana Website",
    "Dimas Maulana Portfolio",
    "Personal Website",
    "Personal Portfolio",
    "Web Developer",
    "Web Developer Personal Website",
    "Web Developer Portfolio",
    "Graphic Designer",
    "Graphic Designer Personal Website",
    "Graphic Designer Portfolio",
  ],
  authors: [
    {
      name: user.name,
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${user.name} Portfolio`,
    description: `I'm ${user.name}, ${user.headline}`,
    url: "https://dimasmaulana.vercel.app",
    siteName: `${user.name} Portfolio`,
    images: [
      {
        url: user.imageUrl,
        width: 800,
        height: 600,
        alt: user.imageAltText,
      },
      {
        url: user.imageUrl,
        width: 1800,
        height: 1600,
        alt: user.imageAltText,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${user.name} Portfolio`,
    description: `I'm ${user.name}, ${user.headline}`,
    images: [user.imageUrl],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
