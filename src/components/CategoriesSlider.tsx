'use client';

import Image from 'next/image';
import { categories } from '@/data/categories';
import BaseSlider from './BaseSlider';

export default function CategoriesSlider() {
    return (
        <>
            <BaseSlider
                title="Categorias"
                items={categories}
                renderItem={(item) => (
                    <div className="bg-white rounded-2xl p-4 text-center shadow">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="mx-auto mb-2 rounded-lg object-cover"
                        />
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                    </div>
                )}
            />
        </>
    );
}
