import HeaderBanner from "./components/headerBanner";
import BodyBanner from "./components/bodyBanner";
import CardPrincipal from "./components/cardPrincipal";
import Image from "next/image"

// Definindo os dados do card
const cardContent = [
  {
    name: "Crédito Consignado",
    label: "Crédito com desconto direto na folha de pagamento ou benefício do INSS. Oferece as menores taxas do mercado, parcelas fixas e facilidade na aprovação. Ideal para aposentados, pensionistas, servidores públicos e militares."
  },
  {
    name: "Cartão de Crédito Consignado",
    label: "Cartão sem anuidade e sem consulta ao SPC/Serasa. Fatura descontada automaticamente do benefício ou salário. Liberação de limite para compras e saques, com mais facilidade de aprovação."
  },
  {
    name: "Portabilidade de Crédito",
    label: "Transfira seu empréstimo atual para outro banco com taxas menores. Mantenha o valor e prazo e pague menos por mês ou quite a dívida mais rápido. É economia na certa!"
  },
  {
    name: "Refinanciamento de Crédito",
    label: "Renove seu contrato atual e receba um novo valor em conta. Ideal para quem já tem um empréstimo e quer liberar mais crédito, mantendo as parcelas acessíveis."
  },
  {
    name: "Consignado Digital",
    label: "Empréstimo 100% online, com segurança e rapidez. Faça tudo pelo celular: simulação, envio de documentos e assinatura eletrônica. Sem sair de casa."
  }
];

export default function Home() {
  return (
    <main>
      <HeaderBanner />

      <BodyBanner />
      <div className="flex w-full justify-center">
        <div className="flex gap-8 border-2 rounded-2xl bg-white p-4 items-center px-8 my-10">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3333 25.3334H18.6666V15.3334H15.3333V25.3334ZM17 12C17.4722 12 17.868 11.8403 18.1875 11.5209C18.5069 11.2014 18.6666 10.8056 18.6666 10.3334C18.6666 9.86115 18.5069 9.46532 18.1875 9.14587C17.868 8.82643 17.4722 8.66671 17 8.66671C16.5278 8.66671 16.1319 8.82643 15.8125 9.14587C15.493 9.46532 15.3333 9.86115 15.3333 10.3334C15.3333 10.8056 15.493 11.2014 15.8125 11.5209C16.1319 11.8403 16.5278 12 17 12ZM17 33.6667C14.6944 33.6667 12.5278 33.2292 10.5 32.3542C8.4722 31.4792 6.70831 30.2917 5.20831 28.7917C3.70831 27.2917 2.52081 25.5278 1.64581 23.5C0.770813 21.4723 0.333313 19.3056 0.333313 17C0.333313 14.6945 0.770813 12.5278 1.64581 10.5C2.52081 8.47226 3.70831 6.70837 5.20831 5.20837C6.70831 3.70837 8.4722 2.52087 10.5 1.64587C12.5278 0.770874 14.6944 0.333374 17 0.333374C19.3055 0.333374 21.4722 0.770874 23.5 1.64587C25.5278 2.52087 27.2916 3.70837 28.7916 5.20837C30.2916 6.70837 31.4791 8.47226 32.3541 10.5C33.2291 12.5278 33.6666 14.6945 33.6666 17C33.6666 19.3056 33.2291 21.4723 32.3541 23.5C31.4791 25.5278 30.2916 27.2917 28.7916 28.7917C27.2916 30.2917 25.5278 31.4792 23.5 32.3542C21.4722 33.2292 19.3055 33.6667 17 33.6667ZM17 30.3334C20.7222 30.3334 23.875 29.0417 26.4583 26.4584C29.0416 23.875 30.3333 20.7223 30.3333 17C30.3333 13.2778 29.0416 10.125 26.4583 7.54171C23.875 4.95837 20.7222 3.66671 17 3.66671C13.2778 3.66671 10.125 4.95837 7.54165 7.54171C4.95831 10.125 3.66665 13.2778 3.66665 17C3.66665 20.7223 4.95831 23.875 7.54165 26.4584C10.125 29.0417 13.2778 30.3334 17 30.3334Z" fill="#FF0004" />
          </svg>
          <p>NÃO SOLICITAMOS PAGAMENTOS ADIANTADOS</p>
        </div>
      </div>
      <div className="w-full flex justify-center my-8">
        <Image src="/bancos.png" alt="" width={1400} height={450} className="" />
      </div>
      <div className="container mx-auto px-4">
        <CardPrincipal content={cardContent} />
      </div>
    </main>
  );
}