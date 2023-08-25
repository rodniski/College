import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson} from "react-icons/rx";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const Siderbar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-bloc k">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w0full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-bloc k">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/costumers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-bloc k">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-bloc k">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-bloc k">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Siderbar;
