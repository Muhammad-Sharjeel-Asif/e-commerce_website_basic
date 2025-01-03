import HomeBgImg from './HomeBgImg.jpg';
import Link from "next/link";

interface BgPicProps {
  PageHeading: string;
  PageName: string;
}

const BgPic: React.FC<BgPicProps> = ({ PageHeading, PageName }) => {
  return (
    <section
  className="bg-cover bg-center h-64  flex items-center justify-center"
  style={{
    backgroundImage: `url(${HomeBgImg.src})`,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }}
>
  <div className="text-center text-white">
    <h2 className="text-4xl font-bold mt-11">{ PageHeading }</h2>
    <p className="mt-4 text-xl">
      <Link href="/">Home › <span className="text-[#FF9F0D]">{ PageName }</span> </Link>
    </p>
  </div>
</section>
  )
}

export default BgPic;