import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { Curriculum } from './components/Curriculum';
import { WhySpecial } from './components/WhySpecial';
import { Requirements } from './components/Requirements';
import { Schedule } from './components/Schedule';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
      {/* Main content */}
      <main>
        <Hero />
        <TargetAudience />
        <Curriculum />
        <WhySpecial />
        <Requirements />
        <Schedule />
        <Pricing />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
