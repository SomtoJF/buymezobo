import FaqAccordionItem from "@/components/marketing-components/faq-accordion";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data";
import { DancingScript } from "@/utility/fonts";
import Link from "next/link";
import React from "react";

const FaqPage = () => {
  return (
    <section className="mt-24 flex flex-col justify-center mx-auto md:max-w-3xl">
      <div className="text-center">
        <h1 className={`${DancingScript.className} text-5xl font-bold `}>
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-lg">
          If you can't find an answer that you're looking for, feel free to drop
          us a line.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-x-4">
        <Link href="/about">
          <Button
            variant="outline"
            className="font-semibold border-2 border-black rounded-full hover:bg-transparent hover:scale-105"
          >
            About the company
          </Button>
        </Link>
        <Link href="">
          <Button
            variant="outline"
            className="font-semibold border-2 border-black rounded-full hover:bg-transparent hover:scale-105"
          >
            Contact support
          </Button>
        </Link>
      </div>

      <section className="mt-16">
        {faqs.map((faq, index) => (
          <Accordion type="multiple">
            <FaqAccordionItem
              index={index}
              question={faq.question}
              answer={faq.answer}
            />
          </Accordion>
        ))}
      </section>
    </section>
  );
};

export default FaqPage;
