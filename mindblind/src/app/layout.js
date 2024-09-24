import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const window = localFont({
  src : "./fonts/Windows95.woff",
  weight : "400",
  variable : "--font-windows-regular",
});

const disneyHeroic = localFont({
  src : "./fonts/DisneyHeroic.woff",
  weight : "400",
  variable : "--font-disney-heroic",
})

const katakana = localFont ({
  src : "./fonts/katakana.woff",
  weight : "400",
  variable : "--font-katakana",
})

const winbroken = localFont ({
  src : "./fonts/winbroken.woff",
  weight : "400",
  variable : "--font-winbroken",
})

const punk = localFont ({
  src : "./fonts/punk.woff",
  weight : "400",
  variable : "--font-punk",
})

//Fonts parte 2

const dezire = localFont({
  src : "./fonts/dezire-stacked.woff",
  weight : "400",
  variable : "--font-dezire-stacked",
})

const franchise = localFont ({
  src : "./fonts/franchise.woff",
  weight : "400",
  variable : "--font-franchise",
})

const hatolie = localFont ({
  src : "./fonts/hatolie.woff",
  weight : "400",
  variable : "--font-hatolie",
})

const parklane = localFont ({
  src : "./fonts/parklane.woff",
  weight : "400",
  variable : "--font-parklane",
})

const retroPower = localFont({
  src : "./fonts/RETROPOWER.woff",
  weight : "400",
  variable : "--font-retropower",
})

const shortplan = localFont ({
  src : "./fonts/shortplan.woff",
  weight : "400",
  variable : "--font-shortplan",
})

const takoyaki = localFont ({
  src : "./fonts/TAKOYAKI.woff",
  weight : "400",
  variable : "--font-takoyaki",
})



export const metadata = {
  title: "MindBlind",
  description: "Wait for the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${window.variable} ${disneyHeroic.variable} ${katakana.variable} ${winbroken.variable} ${punk.variable} ${dezire.variable} ${franchise.variable} ${hatolie.variable} ${parklane.variable} ${retroPower.variable} ${shortplan.variable} ${takoyaki.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
