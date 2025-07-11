type TextPrincipal = {
  name: string;
  label: string;
}

interface CardPrincipalProps {
  content: TextPrincipal[];
}

const CardPrincipal = ({ content }: CardPrincipalProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
      <div

        className="bg-[#000141] border-2  h-[320px] border-[#fff] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h3 className="text-[50px] font-bold text-[24px] text-[#fff] mb-4 text-left">
          NOSSOS PRODUTOS E SERVIÇOS
        </h3>

      </div>
      {content.map((item, index) => (
        <div
          key={index}
          className="bg-[#FE6812] border-2  h-[320px] border-[#000141] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-[24px] text-[#000141] mb-4 text-left">
            {item.name}
          </h3>
          <p className="text-[#000141] font-light text-[19px] leading-relaxed text-justify">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardPrincipal;