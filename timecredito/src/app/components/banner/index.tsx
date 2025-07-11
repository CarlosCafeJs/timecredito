import Image from "next/image";

const WaveSvg = ({
  className = "",
  style = {}
}) => {
  return (
    <svg width="1512" height="auto" viewBox="0 0 1512 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}
    style={style}
    preserveAspectRatio="xMidYMid slice">
<g filter="url(#filter0_i_35_142)">
<path d="M-3 5.70603C-3 5.70603 87 106.469 331.5 106.469C576 106.469 944 18.5446 1166 5.70603C1388 -7.13253 1514 5.70603 1514 5.70603V3636H-3V5.70603Z" fill="#F98B4B"/>
</g>
<defs>
<filter id="filter0_i_35_142" x="-3" y="0" width="1517" height="3653" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="17"/>
<feGaussianBlur stdDeviation="60"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_142"/>
</filter>
</defs>
</svg>
  );
};

const WaveSvg2 = ({
  className = "",
  style = {}
}) => {
  return (
    <svg width="1512" height="auto" viewBox="0 50 1512 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}
    style={style}
    preserveAspectRatio="xMidYMid slice">

<g filter="url(#filter0_i_73_126)">
<path d="M-6 5.70603C-6 5.70603 84 106.469 328.5 106.469C573 106.469 941 18.5446 1163 5.70603C1385 -7.13253 1511 5.70603 1511 5.70603V3636H-6V5.70603Z" fill="white"/>
</g>
<defs>
<filter id="filter0_i_73_126" x="-6" y="0" width="1517" height="3653" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="17"/>
<feGaussianBlur stdDeviation="60"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_73_126"/>
</filter>
</defs>
</svg>

  

   
  );
};

const Banner = () => {
  return (
    <div className="w-full">
      {/* Versão como fundo de seção */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
        {/* SVG como fundo */}
        <div className="absolute inset-0 w-full h-full">
          <WaveSvg className="w-full h-full object-cover" />
        </div>
        
        {/* Conteúdo sobre o SVG */}
        <div className="relative container mx-auto px-4 pt-15 md:py-24 lg:pt-60">

            <Image src="/bancos.png" alt="" width={1300} height={243} className="mx-auto"/>
            <div className="flex justify-center gap-3 items-center bg-[#FFFFFF] w-95 p-3 mx-auto">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg border border-[#FF0000]">
  <path d="M15.3333 25.3334H18.6666V15.3334H15.3333V25.3334ZM17 12C17.4722 12 17.868 11.8403 18.1875 11.5209C18.5069 11.2014 18.6666 10.8056 18.6666 10.3334C18.6666 9.86115 18.5069 9.46532 18.1875 9.14587C17.868 8.82643 17.4722 8.66671 17 8.66671C16.5278 8.66671 16.1319 8.82643 15.8125 9.14587C15.493 9.46532 15.3333 9.86115 15.3333 10.3334C15.3333 10.8056 15.493 11.2014 15.8125 11.5209C16.1319 11.8403 16.5278 12 17 12ZM17 33.6667C14.6944 33.6667 12.5278 33.2292 10.5 32.3542C8.4722 31.4792 6.70831 30.2917 5.20831 28.7917C3.70831 27.2917 2.52081 25.5278 1.64581 23.5C0.770813 21.4723 0.333313 19.3056 0.333313 17C0.333313 14.6945 0.770813 12.5278 1.64581 10.5C2.52081 8.47226 3.70831 6.70837 5.20831 5.20837C6.70831 3.70837 8.4722 2.52087 10.5 1.64587C12.5278 0.770874 14.6944 0.333374 17 0.333374C19.3055 0.333374 21.4722 0.770874 23.5 1.64587C25.5278 2.52087 27.2916 3.70837 28.7916 5.20837C30.2916 6.70837 31.4791 8.47226 32.3541 10.5C33.2291 12.5278 33.6666 14.6945 33.6666 17C33.6666 19.3056 33.2291 21.4723 32.3541 23.5C31.4791 25.5278 30.2916 27.2917 28.7916 28.7917C27.2916 30.2917 25.5278 31.4792 23.5 32.3542C21.4722 33.2292 19.3055 33.6667 17 33.6667ZM17 30.3334C20.7222 30.3334 23.875 29.0417 26.4583 26.4584C29.0416 23.875 30.3333 20.7223 30.3333 17C30.3333 13.2778 29.0416 10.125 26.4583 7.54171C23.875 4.95837 20.7222 3.66671 17 3.66671C13.2778 3.66671 10.125 4.95837 7.54165 7.54171C4.95831 10.125 3.66665 13.2778 3.66665 17C3.66665 20.7223 4.95831 23.875 7.54165 26.4584C10.125 29.0417 13.2778 30.3334 17 30.3334Z" fill="#FF0004"/>
              </svg>

              <p>Não Solicitamos Pagamentos Adiatandos</p>

            </div>

        
        </div>
      </section>
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
        {/* SVG como fundo */}
        <div className="absolute inset-0 w-full h-full">
          <WaveSvg2 className="w-full h-full object-cover" />
        </div>
        
        {/* Conteúdo sobre o SVG */}
        <div className="relative container mx-auto px-4 pt-16 md:py-24 lg:pt-65">
          <div className=" mx-auto text-center ">
            <div>
              
            </div>

            <div>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Versão como divisor de seção */}

    </div>
  );
};

export default Banner;