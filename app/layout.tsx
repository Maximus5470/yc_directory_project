import type {Metadata} from "next";

import "./globals.css";
import localFont from "next/font/local";
import 'easymde/dist/easymde.min.css';
import {Toaster} from "@/components/ui/toaster";

const comicNeue = localFont({
  src: [
    {
      path: "/fonts/Comic_Neue/ComicNeue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Comic_Neue/ComicNeue-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/Comic_Neue/ComicNeue-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/Comic_Neue/ComicNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Comic_Neue/ComicNeue-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/Comic_Neue/ComicNeue-LightItalic.ttf",
      weight: "300",
      style: "italic",
    }
  ],
  variable: '--font-comic-neue',
})

const workSans = localFont({
  src: [
    {
      path: "/fonts/WorkSans/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/fonts/WorkSans/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    }
  ],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: "YC Directory Project",
  description: "Startups",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${workSans.variable} ${comicNeue.variable}`}>
    {children}
    <Toaster/>
    </body>
    </html>
  );
}
