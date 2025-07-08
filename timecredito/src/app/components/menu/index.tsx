import Image from "next/image";

const Menu = () => {
    return(
        <div className="bg-[#000141] w-full p-5 flex flex-row">
            <Image src='/logo.png' alt="Logo da empresa" width={232} height={62} />
            <ul className="flex flex-row justify-around w-full text-[#fff] items-center font-sans">
                <li><a href="#" className="cursor-pointer active:outline-offset-2 active:outline-[#FF5E00]">Nossas Vantagens</a></li>
                <li><a href="#" className="cursor-pointer">Nossa Equipe</a></li>
                <li><a href="#" className="cursor-pointer">Quem Somos</a></li>
                <li><a href="#" className="cursor-pointer">Tire suas Dúvidas (FAQ)</a></li>
            </ul>
        </div>
    )
}

export default Menu; 