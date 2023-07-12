
import React from "react";
import Image from "next/image";

const BaseTitle = ({ title }) => {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="font-bold whitespace-nowrap text-md text-[#994D00]">{title}</h1>
      <div className="lg:block hidden">
        <Image
          src={"/assets/Untitled/rectangle.png"}
          width={400}
          height={0}
          alt="swiper"
        />
      </div>
    </div>
  );
};

export default BaseTitle;
