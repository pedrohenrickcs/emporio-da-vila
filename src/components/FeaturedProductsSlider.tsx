'use client';

import Image from 'next/image';
import BaseSlider from './BaseSlider';
import { Button } from './ui/button';
import { products } from '@/data/products';

export default function FeaturedProductsSlider() {
    return (
        <div className="w-full md:col-span-2">
            <BaseSlider
                title="Produtos em Destaque"
                items={products}
                renderItem={(item) => (
                    <div className="bg-white rounded-2xl p-4 text-center shadow ">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="mx-auto mb-2 rounded-lg object-cover"
                        />
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="text-primary font-bold text-lg mb-2">R$ {item.price.toFixed(2)}</p>
                        <Button>Comprar</Button>
                    </div>
                )}
            />
        </div>
    );
}
