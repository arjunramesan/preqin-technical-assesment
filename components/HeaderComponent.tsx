function HeaderComponent(props: any) {
  return (
    <header className="bg-customPrimary text-white p-4 flex items-center justify-between flex-col md:flex-row">
      {/* Preqin Logo */}
      <div>
        <a href="https://www.preqin.com/" className="header-menu__logo-link">
          <svg
            width="130"
            height="33"
            viewBox="0 0 284 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_255)">
              <path
                d="M21.47 2.26999H0V57.12H10.97V40.58H21.47C32.67 40.58 40.75 32.51 40.75 21.46C40.74 10.42 32.67 2.26999 21.47 2.26999ZM21.47 29.61H10.97V13.24H21.47C26.72 13.24 29.78 16.69 29.78 21.47C29.77 26.17 26.72 29.61 21.47 29.61Z"
                fill="white"
              ></path>
              <path
                d="M102.21 57.12H137.63V46.15H113.18V35.18H137.63V24.21H113.18V13.24H137.63V2.26999H102.21V57.12Z"
                fill="white"
              ></path>
              <path
                d="M221.73 2.26999H210.76V57.12H221.73V2.26999Z"
                fill="white"
              ></path>
              <path
                d="M272.49 2.26999V38.31L242.88 2.26999H233.32V57.12H244.29V21.07L273.9 57.12H283.46V2.26999H272.49Z"
                fill="white"
              ></path>
              <path
                d="M201.1 29.32C201.1 13.62 188.37 0.899994 172.68 0.899994C156.99 0.899994 144.26 13.62 144.26 29.32C144.26 45.02 156.98 57.74 172.68 57.74C177.72 57.74 182.44 56.42 186.55 54.12L193.78 61.35L201.44 53.69L194.85 47.1C198.75 42.23 201.1 36.05 201.1 29.32ZM172.68 46.56C163.18 46.56 155.45 38.83 155.45 29.32C155.45 19.82 163.18 12.09 172.68 12.09C182.18 12.09 189.91 19.82 189.91 29.32C189.91 32.95 188.78 36.33 186.85 39.11L179.58 31.84L171.92 39.5L178.09 45.67C176.39 46.24 174.57 46.56 172.68 46.56Z"
                fill="white"
              ></path>
              <path
                d="M91.73 21.39C91.73 10.34 83.66 2.26999 72.37 2.26999H48.4V57.12H59.37V40.58H72.22L82.56 57.11H95.25L83.04 37.68C88.44 34.39 91.73 28.44 91.73 21.39ZM80.26 24.34C80.2 24.52 80.14 24.69 80.07 24.86C79.71 25.75 79.23 26.55 78.57 27.22C78.56 27.23 78.55 27.24 78.54 27.25C78.13 27.67 77.68 28.05 77.16 28.37C75.87 29.15 74.28 29.55 72.38 29.55L65.33 29.62H59.37V29.55V13.25H72.38C77.71 13.25 80.77 16.7 80.77 21.4C80.76 22.46 80.56 23.43 80.26 24.34Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2_255">
                <rect
                  width="283.46"
                  height="60.45"
                  fill="white"
                  transform="translate(0 0.899994)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div className="font-bold text-lg">Technical Assesment By Arjun</div>
    </header>
  );
}

export default HeaderComponent;
