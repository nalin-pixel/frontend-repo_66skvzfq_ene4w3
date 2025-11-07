import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { MiniIntro, QuickStats, QuoteDivider, PreviewCards, JourneySection, PassionsSection, WorkSection, ConnectSection, VisionSection, SiteFooter } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#202020]">
      <Navbar />
      <main>
        <Hero />
        <MiniIntro />
        <QuickStats />
        <QuoteDivider text="My goal isn’t just to achieve — it’s to inspire others to believe they can too." />
        <PreviewCards />
        <JourneySection />
        <PassionsSection />
        <WorkSection />
        <ConnectSection />
        <VisionSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
