import './globals.css'
import { Inter } from 'next/font/google'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dentelo',
  description: 'Modern dental care solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">Dentelo</Link>
            <div className="space-x-4">
              <Button variant="ghos