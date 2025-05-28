import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sankalp Kulkarni - Full Stack Developer",
  description: "Full Stack Developer specializing in JavaScript, TypeScript, React, Angular, and Cloud Technologies. 4+ years of experience with top-tier companies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
