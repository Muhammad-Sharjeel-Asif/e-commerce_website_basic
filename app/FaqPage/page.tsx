'use client'

import BgPic from '../Components/BgPic';
import React, { useState } from 'react';
import Plus from '@/app/Public/Plus.png'
import Minus from '@/app/Public/Minus.png'
import Image from 'next/image';
import Header from "../Components/Header"


const faqData = [
  {
    question: "How do we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <BgPic PageHeading='FAQ page' PageName='faq' />

        <main className="mx-auto py-16 px-4 max-w-[1320px]">
          <h2 className="text-5xl leading-[56px] font-bold text-center mb-8 text-[#333333]">Questions Looks Here</h2>
          <p className="text-center text-[#4F4F4F] mb-12">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>

          <div className="grid gap-6 md:grid-cols-2 min-w-[648px] mb-8 text-[#333333] ">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex flex-col w-full items-center px-4"
                ><div className='flex w-[600px]  justify-between'>
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <Image src={openIndex === index ? Minus : Plus} alt="Toggle Icon" width={24} height={24} />
                  </div>
                  <article className='w-[600px] h-[72px]'>{faq.answer}</article>
                </div>
                {openIndex === index && (
                  <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;