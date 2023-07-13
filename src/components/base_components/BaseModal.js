import Image from "next/image";

const BaseModal = ({ customStyle, children }) => {
  return (
    <div className={`${customStyle}`}>
      <div className="w-full min-h-screen flex justify-center items-center fixed inset-0 bg-[#98919150] backdrop-blur-sm overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BaseModal;
