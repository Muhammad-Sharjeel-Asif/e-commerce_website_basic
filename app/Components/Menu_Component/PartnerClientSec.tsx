import Menu05 from './Menu05.png';
import Menu06 from './Menu06.png';
import Menu07 from './Menu07.png';
import Menu08 from './Menu08.png';
import Menu09 from './Menu09.png';
import Menu10 from './Menu10.png';
import Image from 'next/image';

const logos = [
  { src: Menu05, alt: 'Restaurant Logo', width: 246.96, height: 129.23 },
  { src: Menu06, alt: 'Bakery Logo', width: 166.04, height: 128.68 },
  { src: Menu07, alt: 'Fork & Spoon Logo', width: 143.98, height: 127.01 },
  { src: Menu08, alt: 'Wolf Coffee Logo', width: 130.98, height: 129.37 },
  { src: Menu09, alt: 'Bistro Logo', width: 169.97, height: 129.17 },
  { src: Menu10, alt: 'Bakery Classic Logo', width: 113.98, height: 129.08 },
];

export default function PartnersClientsSection() {
  return (
    <section className="py-12 text-[#333333]">
      <div className="text-center">
        <p className="text-[18px] leading-[26px]">
          Partners & Clients
        </p>
        <h2 className="mt-2 text-5xl font-bold">
          We work with the best people
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="w-40 h-40 flex flex-col items-center justify-center">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              className="w-full opacity-30"
            />
          </div>
        ))}
      </div>
    </section>
  );
}