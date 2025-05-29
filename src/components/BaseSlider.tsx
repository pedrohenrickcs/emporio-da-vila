'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useRef } from 'react';

interface BaseSliderProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    containerClassName?: string;
}

export default function BaseSlider<T>({
    title,
    items,
    renderItem,
    containerClassName = '',
}: BaseSliderProps<T>) {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const amount = direction === 'left' ? -300 : 300;
            sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <section className={`max-w-screen-xl mx-auto px-4 py-6 ${containerClassName}`}>
            <div className="mx-auto">
                <h2 className="text-2xl font-medium text-center text-[#3B2F2F]">{title}</h2>

                <Link href="#" className="hover:no-underline">
                    <div
                        ref={sliderRef}
                        className="flex justify-center overflow-x-auto gap-4 px-4 pb-2 scrollbar-hide scroll-smooth"
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[150px] flex-shrink-0 transform transition duration-300 hover:-translate-y-1"
                            >
                                {renderItem(item, index)}
                            </div>
                        ))}
                    </div>
                </Link>


                <div className="space-x-2 hidden sm:flex justify-center mt-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full bg-primary text-[#3B2F2F] hover:opacity-80 transition"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full bg-primary text-[#3B2F2F] hover:opacity-80 transition"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
