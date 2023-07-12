import React from "react";
import Image from "next/image";
import Button from "../base_components/Button";
import formatDigits from "../base_components/formatNumber";
import BaseTitle from "../base_components/BaseTitle";

const Overview = () => {
  const transactions = [
    {
      icon: "/assets/Untitled/Money (1).png",
      title: "Current Commission",
      balance: "123456000",
    },
    {
      icon: "/assets/Untitled/payments.png",
      title: "Paid Comission",
      balance: "123456000",
    },
    {


      icon: "/assets/Untitled/balance.png",
      title: "Wallet Balance",
      balance: "123456000",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full">
      <div className="bg-gradient-to-r shadow-md from-[#FF9900] to-[#FFD584] py-[25px] px-[35px] lg:w-[30%] w-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-[#444444] font-bold text-lg">Hello Firstname</h3>
          <div className="flex justify-between gap-1 items-center">
            <p className="text-sm text-[#00790C] font-[500]">Aggregator</p>
            <Image
              src="/assets/Untitled/green.png"
              width={12}
              height={12}
              alt="verified"
            />
          </div>
        </div>

        <div className="flex mt-5 items-center justify-between">
          <div className="">
            <div className="mb-3">
              <h2 className="text-white text-xl">Egole MFB</h2>
              <p className="text-xs text-[#333333] font-bold">bank</p>
            </div>
            <div>
              <h2 className="text-white text-xl">123456789</h2>
              <p className="text-xs text-[#333333] font-bold">Account Number</p>
            </div>
            <div></div>
          </div>
          <div>
            <Image
              src={"/assets/Untitled/bankgrey.png"}
              width={100}
              height={100}
              alt="bank"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md  lg:w-[70%] w-full rounded-xl px-[35px] py-[25px]">
        <div>
          <div className="flex justify-between items-center">
            <BaseTitle title={"Transactions"}/>
            <Button style={""} text={"Fund Wallet"} />
          </div>
        </div>

        <div className="lg:flex grid grid-cols-2 gap-5 lg:flex-row lg:items-center lg:justify-between justify-center w-full mt-3">
        {transactions.map((items, index) => {
          return (
              <div key={index}>
                <Image
                  src={items.icon}
                  width={50}
                  height={50}
                  alt={items.title}
                />
                <p className="font-bold text-[#333333]">{`${index === 2 ? '' : '₦'}${formatDigits(items.balance)}`}</p>
                <h1 className="text-sm">{items.title}</h1>
              </div>
          );
        })}
        </div>

      </div>
    </div>
  );
};

export default Overview;
