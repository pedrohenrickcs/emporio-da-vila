import { productsMock } from "@/data/products";

export default function FeaturedProducts() {
    return (
        <section className="py-6 px-4">
            <h2 className="text-2xl font-semibold mb-4">Produtos em Destaque</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {productsMock.map((product) => (
                    <div key={product.id} className="border p-4 rounded">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-green-600 font-bold">R$ {product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
