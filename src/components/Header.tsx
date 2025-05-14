import Image from 'next/image';

export default function Header() {
    return (
        <header className="border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-white">
                <div className="flex-shrink-0">
                    <Image src="/logo.webp" alt="Emporio da Vila" width={120} height={30} className="h-30" />
                </div>

                <div className="flex-1 max-w-xl mx-4">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex items-center space-x-4 text-sm">
                    <button className="hover:text-green-600">Login</button>
                    <button className="hover:text-green-600">Meus Pedidos</button>
                    <button className="hover:text-green-600">Carrinho</button>
                </div>
            </div>

            <nav className="text-white text-sm bg-primary">
                <ul className="flex justify-center space-x-8 py-2">
                    <li className="hover:underline cursor-pointer">Início</li>
                    <li className="hover:underline cursor-pointer">Sobre</li>
                    <li className="hover:underline cursor-pointer">Produtos</li>
                </ul>
            </nav>
        </header>
    );
}
