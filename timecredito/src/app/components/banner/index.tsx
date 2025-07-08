import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative  bg-gradient-to-t from-[#FEB78E] to-[#FF5E00] text-black">
      <div className="w-full flex h-80 ">
        <div>
          Soluções personalizadas, atendimento humanizado e liberação rápida. Aqui você é prioridade.
        </div>
        <div className="relative top-10">
          <Image src='/modelo.png' alt="Logo da empresa" width={250} height={58} />

        </div>
      </div>

      <div className="relative h-[600px]"> {/* ajusta a altura conforme necessário */}
        {/* SVG de fundo (embaixo) */}
        <svg
          className="absolute top-0 left-0 w-full z-0"
          height="593"
          viewBox="0 0 1512 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_35_140)">
            <path
              d="M-5 3.12329C-5 3.12329 85 58.2778 329.5 58.2778C574 58.2778 942 10.1507 1164 3.12329C1386 -3.90412 1512 3.12329 1512 3.12329V593H-5V3.12329Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_35_140"
              x="-5"
              y="0"
              width="1517"
              height="250"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="17" />
              <feGaussianBlur stdDeviation="60" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_35_140"
              />
            </filter>
          </defs>
        </svg>

        {/* SVG do topo (sobreposto ao de fundo) */}
        <svg
          className="absolute top-15 left-0 w-full z-10"
          height="529"
          viewBox="0 0 1512 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_i_35_141)">
            <path
              d="M-5 2.78621C-5 2.78621 80.5 107.5 325 107.5C569.5 107.5 942 9.05518 1164 2.78621C1386 -3.48276 1512 2.78621 1512 2.78621V529H-5V2.78621Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_35_141"
              x="-5"
              y="0"
              width="1517"
              height="620"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="17" />
              <feGaussianBlur stdDeviation="60" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_35_141"
              />
            </filter>
          </defs>
        </svg>
      </div>

    </div>
  );
};

export default Banner;
