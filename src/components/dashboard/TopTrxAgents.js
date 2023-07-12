
import React from "react";
import BaseTitle from "../base_components/BaseTitle";
import formatDigits from "../base_components/formatNumber";

const TopTrx = () => {

  const tableHeaderr= [
    "S/N",
    "agents",
    "values",
  ]  
  const TopTrx = [
    {
      Agents: "Name Surname1",
      values: "89000",
    },
    {
        Agents: "Name Surname1",
        values: "89000",
    },
    {
        Agents: "Name Surname1",
      values: "89000",
    },
    {
        Agents: "Name Surname1",
        values: "89000",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-5">
      <div className="bg-white px-[30px] py-[25px] rounded-xl shadow-md w-full lg:w-[100%]">
        <div className="w-full mb-5">
          <BaseTitle title={"Top Transacting Agents"} />
        </div>
        <div className="w-full overflow-x-auto">
            <table className="border-collapse border-slate-500 w-full">
                <thead className="w-full">
                    <tr className="w-full bg-[#ECECEC]">
                        {
                            tableHeaderr.map((headers, index)=>{
                                return (
                                    <th key={index} className="border-slate-600 text-sm uppercase whitespace-nowrap py-2 px-2 text-left font-bold">{headers}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        TopTrx.map((trx, index)=>{
                            return (
                                <tr key={index}>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{index + 1}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] text-[#5F5F5F] border-b px-2 py-3 text-left  border-slate-600">{trx.Agents}</td>
                                    <td className="whitespace-nowrap border-[#ECECEC] font-bold text-[#5F5F5F] border-b px-2 py-3 text-left border-slate-600">{'₦'}{formatDigits(trx.values)}</td>
                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>   
      </div>
     
      {/* <div className="bg-white px-[30px] py-[25px] rounded-xl shadow-md w-full lg:w-[50%]">
        <div className="w-full">
          <BaseTitle title={"Top Transacting Agents"} />
        </div>
      </div> */}
    </div>
  );
};

export default TopTrx;
