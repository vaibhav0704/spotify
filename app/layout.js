"use client"

import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children, session }) {
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session} refetchOnWindowFocus={false}>
          <>
            {children}
          </>
        </SessionProvider>
      </body>
    </html>
  )
}
