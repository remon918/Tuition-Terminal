import Banner from "@/components/mejor/Banner";
import WorkingGuide from "@/components/mejor/WorkingGuide";
import BestTutors from "@/components/minor/BestTutors";

export const metadata = {
  title: "Home | Tuition Terminal",
}

export default function Home() {
  return (
    <div>
      <Banner />
      <BestTutors />
      <WorkingGuide />
    </div>

  );
}
