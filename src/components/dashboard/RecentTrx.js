
import React from "react";
import BaseTitle from "../base_components/BaseTitle";
import formatDigits from "../base_components/formatNumber";
import TopTrxAgents from "./TopTrxAgents"

const RecentTrx = () => {

  const tableHeader = [
    "S/N",
    "Product",
    "txn Amount",
    "Reference no.",
    "current Balance",
  ]  
  const RecentTrx = [
    {
      product: "Airtime",
      amount: "5000",
      reference: "9876543210",
      balance: "89000",
    },
    {
      product: "Data",
      amount: "5000",
      reference: "9876543210",
      balance: "84000",
    },
    {
      product: "Insurance",
      amount: "15000",
      reference: "9876543210",
      balance: "69000",
    },
    {
      product: "Airtime",
      amount: "7000",
      reference: "9876543210",
      balance: "62000",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-5">
      <div className="bg-white px-[30px] py-[25px] rounded-xl shadow-md w-full lg:w-[100%]">
        <div className="w-full mb-5">
          <BaseTitle title={"Today's Transactions"} />
        </div>
        <div className="w-full overflow-x-auto">
            <table className="border-collapse border-slate-500 w-full">
                <thead className="w-full">
                    <tr className="w-full bg-[#ECECEC]">
                        {
                            tableHeader.map((headers, index)=>{
                                return (
                                    <th key={index} className="border-slate-600 text-sm uppercase whitespace-nowrap py-2 px-2 text-left font-bold">{headers}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        RecentTrx.map((trx, index)=>{
                            return (
                                <tr key={index}>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{index + 1}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{trx.product}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] font-bold text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{'₦'}{formatDigits(trx.amount)}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{trx.reference}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{'₦'}{formatDigits(trx.balance)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>   
      </div>
     
      

      
         <TopTrxAgents/>
        
      
    </div>
  );
};

export default RecentTrx;
