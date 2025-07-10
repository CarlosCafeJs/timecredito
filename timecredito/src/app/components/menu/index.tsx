import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <header className="bg-[#000141] w-full p-2 flex flex-row">
            <Link href="/" > <Image src='/logo.png' alt="Logo da empresa" width={160} height={58} /></Link>
            <ul className="flex flex-row justify-around w-full text-[#fff] items-center font-sans">
                <li><Link href="/" >Incio</Link></li>
                <li><Link href="/pages/nossas-vantagens" >Nossas Vantagens</Link></li>
                <li><Link href="/pages/nossa-equipe">Nossa Equipe</Link></li>
                <li><Link href="/pages/quem-somos">Quem Somos</Link></li>
                <li><Link href="/pages/tire-suas-duvidas" >Tire suas Dúvidas (FAQ)</Link></li>

            </ul>
        </header >
    )
}

export default Menu; 