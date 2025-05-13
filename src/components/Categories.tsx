import { categoriesMock } from "@/data/categories";

export default function Categories() {
    return (
        <section className="py-6 px-4">
            <h2 className="text-2xl font-semibold mb-4">Categorias Populares</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categoriesMock.map((cat) => (
                    <div key={cat.id} className="p-4 bg-yellow-100 rounded text-center">
                        <p className="font-medium">{cat.name}</p>
                        <p className="text-sm text-gray-600">{cat.count} itens</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
