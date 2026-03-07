import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';
import PageTransition from '../PageTransition';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
