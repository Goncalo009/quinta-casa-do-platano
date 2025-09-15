import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Layout;