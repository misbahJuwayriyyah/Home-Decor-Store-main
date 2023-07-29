import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ChangeEvent,useState,FormEvent } from 'react'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

interface NavbarProps {
  searchQuery: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define the necessary state and functions to handle the search query and form submission
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    // Implement search suggestions here if needed
  };

  const handleSearchFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement search functionality here (e.g., query the database)
  };

  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar
          searchQuery={searchQuery}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchFormSubmit={handleSearchFormSubmit}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
