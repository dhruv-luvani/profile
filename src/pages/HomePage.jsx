import HomeHeroSection from '../components/pages/Home/HomeHeroSection';
import Footer from '../components/layout/Footer';
import HomeProjectsSection from '../components/pages/Home/HomeProjectsSection';
import HomeSkillsSection from '../components/pages/Home/HomeSkillsSection';

export default function HomePage() {
  return (<>
    <div className='min-h-screen bg-gray-800 text-white'>
        <HomeHeroSection />
        <HomeSkillsSection />
        <HomeProjectsSection />
        <Footer />
    </div>
  </>)
}
