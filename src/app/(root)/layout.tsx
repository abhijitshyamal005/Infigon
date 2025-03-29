import type { Metadata } from 'next';
import '../globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader'

export const metadata: Metadata = {
  title: 'CarrerAnalysis',
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="">
        <Header />
        <SubHeader/>
        <main className=''>{children}</main>
        <Footer />
      </div>
  );
}
