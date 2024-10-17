import Button from '@mui/material/Button';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dentelo - Modern Dental Care Solutions',
  description: 'Experience innovative dental care with Dentelo. Your smile deserves the best.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2" aria-label="Dentelo Home">
                <span className="text-2xl font-bold text-gray-900">Dentelo</span>
              </Link>
              <div className="hidden md:flex space-x-1">
                <Button variant="text" component={Link} href="/">Home</Button>
                <Button variant="text" component={Link} href="/about">About</Button>
                <Button variant="text" component={Link} href="/services">Services</Button>
                <Button variant="text" component={Link} href="/contact">Contact</Button>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outlined" component={Link} href="/login" className="hidden sm:inline-flex">
                  Log In
                </Button>
                <Button variant="contained" component={Link} href="/signup">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 py-8 text-center text-gray-600">
          <div className="container mx-auto px-4">
            <p>&copy; 2023 Dentelo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
