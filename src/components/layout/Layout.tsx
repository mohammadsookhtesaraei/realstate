import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="min-h-[43.75rem]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
