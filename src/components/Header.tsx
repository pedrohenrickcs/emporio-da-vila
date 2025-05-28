'use client'

import { useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@radix-ui/react-menubar';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>("produtos")

    return (
        <header className="border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-white">
                <Link href="/" className="flex-shrink-0">
                    <Image src="/logo.webp" alt="Emporio da Vila" width={120} height={30} className="h-30" />
                </Link>

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

            <Menubar className="flex justify-center bg-[#dacfbc] text-[#3B2F2F] text-sm py-2 space-x-8 rounded-none border-none">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#dacfbc] hover:bg-[#ffffff] hover:border-0 focus-visible:outline-none focus-visible:ring-0">
                        Início
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#dacfbc] hover:bg-[#ffffff] hover:border-0 focus-visible:outline-none focus-visible:ring-0">
                        Sobre
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            if (openMenu !== "produtos") {
                                setOpenMenu("produtos")

                            }
                        }}
                        onMouseLeave={() => {
                            setOpenMenu('produtos')
                        }}
                    >
                        <MenubarTrigger
                            className="hover:underline cursor-pointer bg-transparent m-2 text-[#3B2F2F] focus-visible:outline-none focus-visible:ring-0"
                            onClick={(e) => e.preventDefault()}
                        >
                            Produtos
                        </MenubarTrigger>

                        {openMenu === "produtos" && (
                            <MenubarContent
                                align="center"
                                className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#dacfbc] text-[#3B2F2F] rounded shadow"
                            >
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#3B2F2F] hover:bg-[#ffffff] focus-visible:outline-none focus-visible:ring-0">
                                    Bebidas
                                </MenubarItem>
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#3B2F2F] hover:bg-[#ffffff] focus-visible:outline-none focus-visible:ring-0">
                                    Congelados
                                </MenubarItem>
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#3B2F2F] hover:bg-[#ffffff] focus-visible:outline-none focus-visible:ring-0">
                                    Tabacaria
                                </MenubarItem>
                            </MenubarContent>
                        )}
                    </div>
                </MenubarMenu>
            </Menubar>

        </header>
    );
}
