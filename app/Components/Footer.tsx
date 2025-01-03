import AboutUsSection from "./Footer/AboutFooter";
import HelpSection from "./Footer/HelpSection";
import NewsletterSection from "@/app/Components/Footer/NewsletterFooter";
import RecentPostsSection from "./Footer/RecPost";
import SocialIcons from "./Footer/SocialIcons";
import LinkSection from "./Footer/LinkSection";


export default function Footer() {
  return (
    <>
      <footer className="mt-6 mx-20">
        <div className="container mx-auto px-4 py-16">
          <NewsletterSection />
          <div className="border-t border-[#FF9F0D] my-8"></div>
          <div className="flex justify-between gap-x-16 items-center mt-[56px]">
            <AboutUsSection />
            <LinkSection />
            <HelpSection />
            <RecentPostsSection />
          </div>
        </div>
      </footer>
      <SocialIcons />
    </>
  )
}
