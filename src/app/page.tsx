
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';
import ProjectSection from '@/components/sections/ProjectSection';
import ServiceSection from '@/components/sections/ServiceSection';
import InsightSection from '@/components/sections/InsightSection';
import ClientSection from '@/components/sections/ClientSection';
import ContactSection from '@/components/sections/ContactSection';
  export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <ProjectSection/>
      <ServiceSection/>
      <ClientSection/>
      <InsightSection/>
      <ContactSection/>
      </div>
  );
};

