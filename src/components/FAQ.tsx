"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  return (
    <div
      className=" p-px"
      style={{
        background:
          "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
      }}
    >
      <div className="bg-[#2F0700] p-5 flex flex-col cursor-pointer  h-full w-full">
        <div className="flex items-center mb-4">
          <ChevronUp className="text-white w-5 h-5" />

          <h3 className="text-white font-bold text-lg ml-10">{title}</h3>
        </div>

        <div className="text-gray-300">{children}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="relative w-full min-h-screen flex overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bgHero.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/100"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-12">
          <div className="space-y-4">
            <AccordionItem title="How does purchasing on Apps Store benefit your players?">
              <p>
                In Apps Store, players can purchase game items at lower prices,
                find some special offers, and claim free rewards. Moreover,
                there's a variety of payment options available, allowing your
                players to choose the most convenient one for their purchases.
              </p>
            </AccordionItem>

            <AccordionItem title="Is it safe to purchase on Apps Store?">
              <p>
                Web Store which refers to the highest level of compliance with
                the Payment Card Industry Data Security Standard. Therefore, all
                payments made on Web Shop are completely secure.
              </p>
            </AccordionItem>

            <AccordionItem title="What payment methods does Apps Store support?">
              <p>
                Web Store currently accepts payments via most popular
                credit/debit card brands and digital wallets. All available
                payment options can be viewed on the payment page.
              </p>
            </AccordionItem>

            <AccordionItem title="Who can help your players with purchase issues?">
              <p>Who can help your players with purchase issues?</p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
