import React, { useState } from "react";
import BaseModal from "../../base_components/BaseModal";
import Image from "next/image";
import Button from "@/components/base_components/Button";
import BaseInput from "@/components/base_components/BaseInput";

const selections = [
  {
    network: "MTN",
    icon: "/assets/Untitled/trans/mtn.png",
  },
  {
    network: "Glo",
    icon: "/assets/Untitled/trans/glo.png",
  },
  {
    network: "Airtel",
    icon: "/assets/Untitled/trans/airtel.png",
  },
  {
    network: "9Mobile",
    icon: "/assets/Untitled/trans/9mobile.png",
  },
];

const Prompt = ({ onNext, close }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handlenext = () => {
    //handle api calls and all here
    onNext(); // Invoke the onNext callback to switch to the next component
  };

  return (
    <div className="relative w-10/12 p-[50px] overflow-auto bg-white shadow-md rounded-xl sm:w-3/5 md:w-[800px] md:mt-20 md:mb-10">
      <div>
        <div onClick={close} className="z-[100] top-0 right-0 absolute p-5 cursor-pointer">
          <Image
            src={"/assets/Untitled/cancel.png"}
            width={20}
            height={20}
            alt="close modal"
          />
        </div>
        <form>
          <h1 className="uppercase text-center font-bold text-md text-[#994D00]">
            Airtime Purchase
          </h1>
          <div className="my-5">
            <p className="text-sm lg:text-left text-center text-[#4A4A4A] mb-2">
              Choose the desired network
            </p>
            <div className="lg:flex grid grid-cols-2 gap-2 w-full lg:justify-between">
              {selections.map((item, index) => {
                const isSelected = selectedItemIndex === index;

                return (
                  <div
                    className={`bg-[#EDEDED] rounded-md lg:w-[23%] w-[100%] py-1 cursor-pointer flex flex-col items-center gap-1 ${
                      isSelected ? "border-2 border-[#994D00]" : ""
                    }`}
                    key={index}
                    onClick={() => handleItemClick(index)}
                  >
                    <Image
                      src={item.icon}
                      width={35}
                      height={35}
                      alt={item.network}
                    />
                    <p className="text-xs">{item.network}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-3 mb-5">
            <BaseInput
              hidden
              className="hidden"
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
            />
            <BaseInput
              imageStyle={"invisible"}
              label={"Phone Number"}
              placeholder={"Enter Phone Number"}
            />
            <BaseInput
              imageStyle={"invisible"}
              label={"Amount"}
              placeholder={"Enter Amount"}
            />
          </div>

          <div className="flex items-center justify-center gap-2 w-full">
            <Button
              style={"text-[#ffffff]"}
              text={"Proceed"}
              onClick={handlenext}
            />
            <Button style={"bg-[#E4E4E4] text-[#7E7E7E]"} text={"Cancel"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prompt;
