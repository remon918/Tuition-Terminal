import Banner from "@/components/mejor/Banner";
import WorkingGuide from "@/components/mejor/WorkingGuide";
import BestTutors from "@/components/minor/BestTutors";
import WhyChoose from "@/components/mejor/WhyMe";

export const metadata = {
  title: "Home | Tuition Terminal",
}

export default function Home() {
  return (
    <div>
      <Banner />
      <BestTutors />
      <WhyChoose />
      <WorkingGuide />
    </div>

  );
}
