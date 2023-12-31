import React, { Component } from "react";
import Image from "next/image";
import BaseTitle from "../base_components/BaseTitle";
import BaseModal from "../base_components/BaseModal";
import { useState } from "react";
import AirtimeLayout from "./airtime/AirtimeLayout";
import DataLayout from "./data-purchase/DataLayout";
const QuickActions = () => {
  const actions = [
    {
      action: "Airtime",
      icon: "/assets/Untitled/airtime.png",
      component: <AirtimeLayout close={()=>{setModalIsOpen(false)}}/>,
      linkTo: "/airtime",
    },
    {
      action: "Data",
      icon: "/assets/Untitled/data.png",
      component: <DataLayout close={()=>{setModalIsOpen(false)}}/>,
      linkTo: "/data",
    },
    {
      action: "Cable TV",
      icon: "/assets/Untitled/cable.png",
      linkTo: "/cable",
    },
    {
      action: "Electricity",
      icon: "/assets/Untitled/electricity.png",
      linkTo: "/electricity",
    },
    {
      action: "Road Taxes",
      icon: "/assets/Untitled/taxes.png",
      linkTo: "/taxes",
    },
    {
      action: "Education",
      icon: "/assets/Untitled/school.png",
      linkTo: "/education",
    },
    {
      action: "Insurance",
      icon: "/assets/Untitled/insurance.png",
      linkTo: "/insurance",
    },
    {
      action: "Tickets",
      icon: "/assets/Untitled/tickets.png",
      linkTo: "/tickets",
    },
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActionIndex, setSelectedActionIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedActionIndex(index);
    setModalIsOpen(true);
  };

  const renderModal = () => {
    if (!modalIsOpen || selectedActionIndex === null) {
      return null;
    }

    const selectedAction = actions[selectedActionIndex];

    return <BaseModal>{selectedAction.component}</BaseModal>;
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center w-full gap-5 py-5">
        <div className="bg-white px-[35px] py-[25px] lg:w-[100%] md:w-[50%]  rounded-xl shadow-md">
          <BaseTitle title={"Quick Actions"} />
          <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-2 gap-3 items-center mt-5">
            {actions.map((items, index) => {
              return (
                <div key={index} onClick={() => handleClick(index)} className="cursor-pointer lg:min-w-[100px] min-h-[84px] flex rounded-lg gap-2 lg:p-[20px] p-[10px] items-center bg-gradient-to-r from-[#FF9900] to-[#FFD584]">
                  <Image src={items.icon} width={30} height={30} alt="..." />
                  <p className="font-bold lg:text-lg text-xs leading-5 text-[#333333]">
                    {items.action}
                  </p>
                </div>
              );
            })}
             {renderModal()}
          </div>
        </div>

        {/* <div className="bg-white shadow-md rounded-xl px-[30px] py-[25px]">
          <div className="w-[80%]">
            <BaseTitle title={"Transfers"} />
          </div>
          <div className="flex w-full justify-around gap-3 items-center h-[180px]">
            <div className="border border-[3px] flex flex-col items-center justify-center w-[150px] gap-3 border-[#FF9900] py-5 rounded-xl">
              <Image
                width={50}
                height={50}
                src={"/assets/Untitled/bankorng.png"}
                alt="..."
              />
              <p className="font-bold text-[#333333]">To bank</p>
            </div>
            <div className="border border-[3px] flex flex-col items-center justify-center w-[150px] gap-3 border-[#FF9900] py-5 rounded-xl">
              <Image
                width={50}
                height={50}
                src={"/assets/Untitled/wallet.png"}
                alt="..."
              />
              <p className="font-bold text-[#333333]">To Wallet</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default QuickActions;
