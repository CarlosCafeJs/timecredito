import React from 'react';

const WaveSvg = ({
  className = "",
  style = {}
}) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 1512 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid slice"
    >
      <g filter="url(#filter0_i_35_16)">
        <path
          d="M-5 3.12329C-5 3.12329 85 58.2778 329.5 58.2778C574 58.2778 942 10.1507 1164 3.12329C1386 -3.90412 1512 3.12329 1512 3.12329V593H-5V3.12329Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_i_35_16)">
        <path
          d="M-5 66.7862C-5 66.7862 80.5 171.5 325 171.5C569.5 171.5 942 73.0552 1164 66.7862C1386 60.5172 1512 66.7862 1512 66.7862V593H-5V66.7862Z"
          fill="white"
        />
      </g>
      <path
        d="M1225 112C1063 123 733 196.5 733 196.5C1129.5 144 1323 167 1441 196.5L1470.5 102C1470.5 102 1399 95.0424 1225 112Z"
        fill="#F98A4A"
      />
      <defs>
        <filter id="filter0_i_35_16" x="-5" y="0" width="1517" height="610" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="17" />
          <feGaussianBlur stdDeviation="60" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_16" />
        </filter>
        <filter id="filter1_i_35_16" x="-5" y="64" width="1517" height="546" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="17" />
          <feGaussianBlur stdDeviation="60" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.00392157 0 0 0 0 0.254902 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_16" />
        </filter>
      </defs>
    </svg>
  );
};

const WaveBanner = () => {
  return (
    <div className="w-full pt-30">
      {/* Versão como fundo de seção */}
      <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
        {/* SVG como fundo */}
        <div className="absolute inset-0 w-full h-full">
          <WaveSvg className="w-full h-full object-cover" />
        </div>

        {/* Conteúdo sobre o SVG */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className=" mx-auto text-center">
            <div>
              <ul>
                <li><div>
                  <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.554138" width="42" height="42" rx="21" fill="#FF5D00" />
                    <path d="M21.5541 11.9C20.6986 11.9 19.9662 11.603 19.3569 11.009C18.7477 10.415 18.443 9.70087 18.443 8.86671C18.443 8.03254 18.7477 7.31844 19.3569 6.72442C19.9662 6.13039 20.6986 5.83337 21.5541 5.83337C22.4097 5.83337 23.1421 6.13039 23.7514 6.72442C24.3606 7.31844 24.6653 8.03254 24.6653 8.86671C24.6653 9.70087 24.3606 10.415 23.7514 11.009C23.1421 11.603 22.4097 11.9 21.5541 11.9ZM16.8875 36.1667V16.45C15.3319 16.3237 13.7504 16.1341 12.143 15.8813C10.5356 15.6285 9.00599 15.3125 7.55414 14.9334L8.33192 11.9C10.3541 12.4309 12.506 12.8164 14.7875 13.0565C17.069 13.2966 19.3245 13.4167 21.5541 13.4167C23.7838 13.4167 26.0393 13.2966 28.3208 13.0565C30.6023 12.8164 32.7541 12.4309 34.7764 11.9L35.5541 14.9334C34.1023 15.3125 32.5727 15.6285 30.9653 15.8813C29.3578 16.1341 27.7764 16.3237 26.2208 16.45V36.1667H23.1097V27.0667H19.9986V36.1667H16.8875Z" fill="#E3E3E3" />
                  </svg>
                </div><p>Atendimento humanizado</p></li>

              </ul>
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

export default WaveBanner;