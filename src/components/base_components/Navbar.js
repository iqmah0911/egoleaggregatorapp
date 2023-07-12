
import Image from "next/image"; //Image is an in-built component for dispalying images in nextJs
import { useState } from "react";

//An array of items on the navigation bar
const navItems = [
  {
    icon: "/assets/Untitled/nav2/dashboard_active.png",
    link: "Dashboard",
  },
  {
    icon: "/assets/Untitled/nav2/trx.png",
    link: "Transaction Details",
  },
  {
    icon: "/assets/Untitled/nav2/summary.png",
    link: "Transaction Summary",
  },
  {
    icon: "/assets/Untitled/nav2/purse.png",
    link: "Wallet Report",
  },
  {
    icon: "/assets/Untitled/nav2/tickets.png",
    link: "Tickets Report",
  },
  {
    icon: "/assets/Untitled/nav2/reprint.png",
    link: "Reprint",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState("");
  const [burger, setBurger] = useState("invisible");

  return (
    //Navigation bar container starts here
    <div className="fixed w-full">
      {/* First layer of the navigation bar starts here */}
      <div className="bg-white shadow-md flex w-full justify-between lg:px-[80px] px-[20px] py-5 items-center border-b border-b-grey">
        <Image
          src={"/assets/Untitled/logo.png"}
          width={100}
          height={100}
          alt="logo"
        />
        <div className="flex gap-5 items-center">
          <p className="font-bold">Settings</p>
          <div className="bg-[#FF8F0B] px-2 py-1 rounded-full">
            <p className="text-white">BE</p>
          </div>
          <div
            onClick={() => {
              setBurger((prevState) => (prevState === "invisible" ? "visible transition duration-700 ease-in-out" : "invisible"));
            }}
            className="gap-1 flex flex-col block lg:hidden"
          >
            <div className="bg-[#FF8F0B] h-[3px] w-[24px]"></div>
            <div className="bg-[#FF8F0B] h-[3px] w-[24px]"></div>
            <div className="bg-[#FF8F0B] h-[3px] w-[24px]"></div>
          </div>
        </div>
      </div>
      {/* first layer ends here */}

      {/* Second layer starts here */}
      <div className={`bg-white shadow-md flex flex-col lg:flex-row w-full lg:visible ${burger} justify-between px-[10px] py-[20px] lg:px-[161px] lg:py-2`}>
        {/* Items array rendered here using the array.map js function */}
        {navItems.map((items, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-2 cursor-pointer ${
                index === 0
                  ? "bg-gradient-to-l from-[#FF9900] to-[#FFD584] px-3 rounded-lg text-white py-2"
                  : "hover:bg-gradient-to-l from-[#FF9900] to-[#FFD584] px-3 rounded-lg hover:text-white py-2"
              }`}
            >
              <Image src={items.icon} width={20} height={20} alt={items.link} />
              <p className="text-sm">{items.link}</p>
              {items.link === "Tickets Report" && (
                <div className="relative">
                  <div
                    className={`${style}`}
                    onClick={() => {
                      setToggle((prevState) => !prevState);
                      setStyle((prevState) =>
                        prevState === "" ? "rotate-180" : ""
                      );
                    }}
                  >
                    <Image
                      src={"/assets/Untitled/drop_down.png"}
                      width={20}
                      height={20}
                      alt="empty"
                    />
                  </div>
                  {toggle && (
                    <div className="bg-white shadow-md top-[20px] right-[25px] px-[50px] py-2 absolute text-black">
                      ...
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Second layer ends here */}
    </div>
    // Navigation container ends here
  );
}
