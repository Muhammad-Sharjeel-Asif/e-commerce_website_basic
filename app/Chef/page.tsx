import ChefSection from "../Components/Chef_components/ChefSection";
import BgPic from "@/app/Components/BgPic";
import Header from "../Components/Header";


const Chef = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FFFFFF]">

        <BgPic PageHeading='Our Chef' PageName='Chef' />

        < ChefSection />
      </div>
    </>
  );
};

export default Chef;