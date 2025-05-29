import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section
            className="py-10 px-4 text-center "
            style={{
                backgroundImage: `linear-gradient(0deg, #272727, transparent 62.61%), url('/banner.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end'
            }}
        >
            <div className="p-6 inline-block text-shadow">
                <h1 className="text-white text-3xl font-bold mb-2">
                    Do campo para sua cozinha
                </h1>
                <p className="text-white text-lg mb-4 ">
                    Produtos frescos direto do produtor
                </p>
                <Button>Ver produtos</Button>
            </div>
        </section>

    );
}
