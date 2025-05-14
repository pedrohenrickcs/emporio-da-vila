import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="py-10 px-4 text-center" style={{
            backgroundImage: "url('/banner.jpg')",
            backgroundSize: "contain",
            height: "60vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end'
        }}>
            <div className="bg-amber-700 bg-opacity-20 p-6 rounded-md inline-block">
                <h1 className="text-3xl font-bold mb-2">Do campo para sua cozinha</h1>
                <p className="text-lg mb-4">Produtos frescos direto do produtor</p>
                {/* <button className="bg-green-600 text-white px-4 py-2 rounded">Ver Produtos</button> */}
                <Button>Ver produtos</Button>

            </div>
        </section >
    );
}
