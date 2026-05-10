import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConstructionLanding from "@/components/Constructionlanding";
import ConstructionServices from "@/components/ConstructionServices";
import WhyChooseUs from "@/components/Whychooseus";
import ExploreProjects from "@/components/Exploreprojects"
import HaveAProject from "@/components/Haveaproject";
import Testimonials from "@/components/Testimonials"
import ExpertTeam from "@/components/Expertteam";
import LatestNews from "@/components/Latestnews";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ConstructionLanding />
      <ConstructionServices />
      <WhyChooseUs />
      <ExploreProjects />       
      <HaveAProject />
      <Testimonials />
      <ExpertTeam />
      <LatestNews />
      <Footer />
    </>

  );
}
