import { useEffect, useRef, useState } from "react";
import bg from "../assets/bgimage.svg";
import smallbg from "../assets/smallbgimageblack.svg";
import buttonbg from "../assets/buttonbg.svg";

function MiseAjour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ bottom: 0, left: 0 });
  const [mobileButtonPosition, setMobileButtonPosition] = useState({
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const updateButtonPosition = () => {
      const container = containerRef.current;
      const button = buttonRef.current;

      if (container && button) {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        const img = new Image();
        img.src = bg;
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;

          const scale = Math.min(
            containerWidth / imgWidth,
            containerHeight / imgHeight
          );
          const scaledImgWidth = imgWidth * scale;
          const scaledImgHeight = imgHeight * scale;

          const offsetX = (containerWidth - scaledImgWidth) / 2;
          const offsetY = (containerHeight - scaledImgHeight) / 2;

          const buttonBottom = offsetY + scaledImgHeight * 0.1;
          const buttonLeft = offsetX + scaledImgWidth * 0.1;

          setButtonPosition({ bottom: buttonBottom, left: buttonLeft });
        };
      }
    };

    const updateMobileButtonPosition = () => {
      const mobileContainer = mobileContainerRef.current;
      const mobileButton = mobileButtonRef.current;

      if (mobileContainer && mobileButton) {
        const containerWidth = mobileContainer.offsetWidth;
        const containerHeight = mobileContainer.offsetHeight;

        const img = new Image();
        img.src = smallbg;
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;

          const scale = Math.min(
            containerWidth / imgWidth,
            containerHeight / imgHeight
          );
          const scaledImgWidth = imgWidth * scale;
          const scaledImgHeight = imgHeight * scale;

          const offsetX = (containerWidth - scaledImgWidth) / 2;
          const offsetY = (containerHeight - scaledImgHeight) / 2;

          const buttonBottom = offsetY + scaledImgHeight * 0.2;
          const buttonLeft = offsetX + scaledImgWidth * 0.5 - 75;

          setMobileButtonPosition({ bottom: buttonBottom, left: buttonLeft });
        };
      }
    };

    updateButtonPosition();
    updateMobileButtonPosition();
    window.addEventListener("resize", updateButtonPosition);
    window.addEventListener("resize", updateMobileButtonPosition);

    return () => {
      window.removeEventListener("resize", updateButtonPosition);
      window.removeEventListener("resize", updateMobileButtonPosition);
    };
  }, []);

  return (
    <div className="">
      <div
        ref={containerRef}
        className="relative hidden w-full h-screen bg-center lg:block"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          ref={buttonRef}
          className="absolute z-10"
          style={{
            bottom: `${buttonPosition.bottom}px`,
            left: `${buttonPosition.left}px`,
          }}
        >
          <img
            src={buttonbg}
            alt="Button"
            className="max-w-[250px] max-h-[250px]"
          />
        </button>
      </div>

      <div
        ref={mobileContainerRef}
        className="relative block h-screen bg-center bg-cover lg:hidden -mt-36"
      >
        <img src={smallbg} alt="bg" className="w-full h-full" />
        <button
          ref={mobileButtonRef}
          className="absolute z-10"
          style={{
            bottom: `${mobileButtonPosition.bottom}px`,
            left: `${mobileButtonPosition.left}px`,
          }}
        >
          <img
            src={buttonbg}
            alt="Button"
            className="max-w-[150px] max-h-[150px]"
          />
        </button>
      </div>
    </div>
  );
}

export default MiseAjour;
