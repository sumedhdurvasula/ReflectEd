import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className= "bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div></div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <div className="gradient-02 z-0" />
    </div>
    
    
    <Footer />

  </div>
);

export default Page;
