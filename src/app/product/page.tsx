import Header from "@/components/Header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productPage } from "@/data/productPage";
import { ProductDetailsAccordion } from "@/components/ProductDetailsAccordion";
import FeaturedProducts from "@/components/FeaturedProductsSlider";

export default function Product() {
    const hasDiscount = productPage.discountPrice < productPage.price;

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="w-full">
                    <Image
                        src={productPage.image}
                        alt={productPage.name}
                        width={600}
                        height={600}
                        className="rounded-xl object-cover w-full h-auto"
                    />
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-foreground">{productPage.name}</h1>

                    <div className="flex items-center gap-4">
                        {hasDiscount ? (
                            <>
                                <span className="text-2xl font-semibold text-primary">
                                    R$ {productPage.discountPrice.toFixed(2)}
                                </span>
                                <span className="text-lg line-through text-muted-foreground">
                                    R$ {productPage.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span className="text-2xl font-semibold text-primary">
                                R$ {productPage.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <Button className="w-full md:w-auto">Comprar</Button>
                    <div className="text-sm text-muted-foreground">
                        <p>Descrição: Cachaça artesanal envelhecida em barris de carvalho, com sabor suave e aroma marcante.</p>
                        <p>Volume: 700ml</p>
                        <p>Teor Alcoólico: 40%</p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cep">Calcular frete</Label>
                        <div className="flex gap-2">
                            <Input id="cep" placeholder="Digite seu CEP" className="max-w-xs" />
                            <Button variant="outline">Calcular</Button>
                        </div>
                    </div>
                </div>

                <FeaturedProducts />
                <ProductDetailsAccordion />

            </div>
        </>
    );
}
