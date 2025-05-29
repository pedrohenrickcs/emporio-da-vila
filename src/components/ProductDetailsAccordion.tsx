"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { productAccordionData } from "@/data/productAccordionData";
import parse from "html-react-parser";

export function ProductDetailsAccordion() {
    const { description, features, shipping, faq } = productAccordionData;


    return (
        <Accordion type="multiple" className="w-full md:col-span-2 max-w-6xl mx-auto">
            {description && (
                <AccordionItem value="description">
                    <AccordionTrigger className="text-1xl">{description.title}</AccordionTrigger>
                    <AccordionContent>{description.content}</AccordionContent>
                </AccordionItem>
            )}

            {features && (
                <AccordionItem value="features">
                    <AccordionTrigger className="text-1xl">{features.title}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {features.content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            )}

            {shipping && (
                <AccordionItem value="shipping">
                    <AccordionTrigger className="text-1xl">{shipping.title}</AccordionTrigger>
                    <AccordionContent>{shipping.content}</AccordionContent>
                </AccordionItem>
            )}

            {faq && (
                <AccordionItem value="faq">
                    <AccordionTrigger className="text-1xl">{faq.title}</AccordionTrigger>
                    <AccordionContent>{parse(faq.content)}</AccordionContent>
                </AccordionItem>
            )}
        </Accordion>
    );
}
