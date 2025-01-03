import ResActImg from "./ResActivator.jpg";
import Image from "next/image";
import Play from "./Play.png";

const ResActivator = () => {
  return (
    <section
      className="bg-cover bg-center h-[558px]  flex items-center justify-end"
      style={{
        backgroundImage: `url(${ResActImg.src})`,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="mx-36 text-end">
        <h2 className="italic text-[#FF9F0D] text-[32px] mb-2">Restaurant Active Process</h2>
        <h3 className="text-5xl font-bold">
          <span className="text-[#FF9F0D]">We</span> Document Every Food
          <span> <br /> Bean Process untile it is saved</span>
        </h3>
        <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>

        <div className="flex justify-end gap-x-6">
          <button className="w-[190px] h-[60px] bg-transparent border border-[#FF9F0D] rounded-full font-bold">Read More</button>

          <button className="flex items-center font-bold gap-x-2"> <span className="w-[60px] h-[60px] rounded-full bg-[#FF9F0D] items-center justify-center flex"><Image src={Play} alt='Play' /></span>Play Video</button>
        </div>
      </div>
    </section>
  )
}

export default ResActivator;