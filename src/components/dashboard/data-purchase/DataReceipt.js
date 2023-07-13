import React from "react";
import Image from "next/image";
import formatDigits from "@/components/base_components/formatNumber";
import Button from "@/components/base_components/Button";

const DataReceipt = ({ onNext, close }) => {

    const handleNext = () => {
        //handle api calls and all here
        onNext(); // Invoke the onNext callback to switch to the next component
      };
    

  return (
    <div className="relative w-10/12 p-[50px] overflow-auto bg-white shadow-md rounded-xl sm:w-3/5 md:w-[450px] md:mt-20 md:mb-10">
      <div>
        <div
          onClick={close}
          className="z-[100] top-0 right-0 absolute p-5 cursor-pointer"
        >
          <Image
            src={"/assets/Untitled/cancel.png"}
            width={20}
            height={20}
            alt="close modal"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="uppercase text-center font-bold text-md text-[#994D00]">
            Data Purchase Receipt
          </h1>
          <div
            className={`bg-[#EDEDED] rounded-md w-[30%] py-3 cursor-pointer flex flex-col items-center gap-1`}
          >
            <Image
              src={"/assets/Untitled/trans/mtn.png"}
              width={35}
              height={35}
              alt={"network"}
            />
            <p className="text-xs uppercase">Mtn</p>
          </div>
          <div className="text-center">
            <p className="text-[#33363F] text-md font-[700]">08020998282</p>
            <p className="text-xs font-[700]">Phone Number</p>
          </div>
          <div className="text-center">
            <p className="text-[#00AE99] text-3xl font-[600]">
              ₦{formatDigits("1000")}.00
            </p>
            <p className="text-xs font-[700]">Amount</p>
          </div>
          <div className="">
            <div className="flex items-center gap-2 bg-[#00AE99] rounded-2xl lg:text-sm text-xs text-white p-[8px]">
              <p>
                Success, You have saved: <span>₦{formatDigits("50")}.00</span>
              </p>
              <Image
                src={"/assets/Untitled/trans/check_circle.png"}
                width={15}
                height={15}
                alt="check_circle"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-[#994D00] text-3xl font-[600]">₦{formatDigits('950')}.00</p>
            <p className="text-xs font-[700]">Total amount deducted</p>
          </div>
          <div className="text-center">
            <p className="text-[#5F5F5F] text-lg font-[600]">10987654321</p>
            <p className="text-xs font-[700]">Reference Number</p>
          </div>
          <div className="text-center">
            <p className="text-[#5F5F5F] text-lg font-[600]">Monday, May 15, 2023 6:35:13 PM</p>
            <p className="text-xs font-[700]">Transaction Date & Time</p>
          </div>
          <div className="flex lg:flex-row flex-col w-full justify-center gap-3 mt-[30px]">
            <Button onClick={close} text={"Print Receipt"} style={"text-white"} />
            <Button onClick={close} text={"Cancel"} style={"text-[#7E7E7E] bg-[#E4E4E4]"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataReceipt;
