import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqAccordionProps {
  index: number;
  question: string;
  answer: string;
}

const FaqAccordionItem = ({ index, question, answer }: FaqAccordionProps) => {
  return (
    <AccordionItem
      value={index.toString()}
      className="border-none bg-neutral-100 rounded-md px-4"
    >
      <AccordionTrigger className="font-bold text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-base">{answer}</AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
