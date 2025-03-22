import Navbar from "./ui/navbar/navbar";
import Landing from "./ui/landing/landing";
import Introduction from "./ui/landing/introduction";
import WorksSection from "./ui/worksSection/worksSection";
import CommsSection from "./ui/commsSection/commsSection";
import ConnectSection from "./ui/connectSection/connectsection";
import Footer from "./ui/components/footer";
import Divider from "./ui/design/divider";

export default function Home() {

  return (
    <div style={{backgroundColor: 'var(--color-ivory)'}}>
      <Landing />
      <WorksSection />
      <Divider />
      <CommsSection />
      <Divider />
      <ConnectSection />
      <Footer />
      {/*<Navbar />*/}
    </div>
  );
}
