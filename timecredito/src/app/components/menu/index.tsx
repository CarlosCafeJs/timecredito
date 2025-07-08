import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <div className="bg-[#000141] w-full p-2 flex flex-row">
            <Image src='/logo.png' alt="Logo da empresa" width={160} height={58} />
            <ul className="flex flex-row justify-around w-full text-[#fff] items-center font-sans">
                <Link href="#" >Nossas Vantagens</Link>
                <Link href="#" >Nossa Equipe</Link>
                <Link href="#" >Quem Somos</Link>
                <Link href="#" >Tire suas Dúvidas (FAQ)</Link>

            </ul>
        </div>
    )
}

export default Menu; 