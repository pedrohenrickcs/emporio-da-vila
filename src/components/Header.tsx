'use client'

import { useEffect, useState } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@radix-ui/react-menubar';
import Image from 'next/image';
import { MenubarShortcut } from './ui/menubar';

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>("produtos")

    useEffect(() => {
        console.log('openMenu', openMenu);

    }, [])

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

            {/* <nav className="text-white text-sm bg-[#E98C3D]">
                <ul className="flex justify-center space-x-8 py-2">
                    <li className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">Início</li>
                    <li className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">Sobre</li>
                    <li className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">Produtos</li>
                </ul>
            </nav> */}

            <Menubar className="flex justify-center bg-[#E98C3D] text-white text-sm py-2 space-x-8 rounded-none border-none">
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff] hover:border-0">
                        Início
                    </MenubarTrigger>
                </MenubarMenu>

                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff] hover:border-0">
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
                            console.log('openMenu', openMenu);
                        }}
                        onMouseLeave={() => {
                            console.log('openMenusdsd', openMenu);

                            setOpenMenu('produtos')
                        }}
                    >
                        <MenubarTrigger
                            className="hover:underline cursor-pointer bg-transparent m-2 text-white"
                            onClick={(e) => e.preventDefault()}
                        >
                            Produtos
                        </MenubarTrigger>

                        {openMenu === "produtos" && (
                            <MenubarContent
                                align="center"
                                className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#E98C3D] text-white rounded shadow"
                            >
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">
                                    Bebidas
                                </MenubarItem>
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">
                                    Congelados
                                </MenubarItem>
                                <MenubarItem className="cursor-pointer rounded p-2 hover:transition-colors hover:text-[#E98C3D] hover:bg-[#ffffff]">
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
