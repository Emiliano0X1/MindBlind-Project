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
const w95 = localFont({
  src : "./fonts/._w95fa.woff",
  variable : "--font-w95",
  weight : "100 900",
})

export const metadata = {
  title: "MindBlind",
  description: "Wait for the best",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${w95.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
