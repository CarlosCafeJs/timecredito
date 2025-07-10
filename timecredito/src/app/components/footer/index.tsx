import Image from "next/image";

const Footer = () => {
    return (
    <div className="bg-[#000141] flex flex-row justify-between">
        {/* Caixa de fale conosco */}
        <div className="text-[#FE6812] border rounded-s-lg border-[#fff] p-3 relative">
            <Image src="/peopleOrange.png" alt="" width={50} height={50} className="absolute top-0 right-0"/>
            <h2>Fale Conosco!</h2>
            <a className="flex flex-row gap-3 align-center justify-center" href="mailto:contato@timecredito.com.br" target="blanck">
                <Image src="/email.png" alt="Logo e-mail" width={35} height={35}/>
                <p>contato@timecredito.com.br</p>
            </a>
            <a className="flex flex-row gap-3" href="https://wa.me/5561981013539?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="blanck">
                <Image src="/whatsappOrange.png" alt="" width={35} height={35}/>
                <p>(61) 9 8101 3539</p>
            </a>
            <a className="flex flex-row gap-3" href="https://www.instagram.com/timecredito/" target="blanck">
                <Image src="/instagramOrange.png" alt="" width={35} height={35}/>
                <p>@timecredito</p>
            </a>
        </div>






        <a href="#" className="flex flex-col align-center justify-center">
            <Image src="/arrowOrange.png" alt="Logo e-mail" width={50} height={50}/>
            <p className="text-amber-50">Início</p>
        </a>

        <div className="text-[#FE6812]  border rounded-s-lg border-[#fff] p-3 relative
        flex flex-col">
            <Image src="/cachOrange.png" alt="" width={50} height={50} className="absolute top-0 right-0"/>
      

     <a href="#">
               Quem somos
            </a>
            <a href="#">
            Produtos e Serviços
            </a>
            <a href="#">
            Simule seu Crédito
            </a>
            <a href="#">
            Fale Conosco
            </a>
            <a href="#">
            Política de Privacidade
            </a>
            <a href="#">
            Termos de Uso
            </a>

           






        </div>
    </div>)
  }
  
  export default Footer;