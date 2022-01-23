import type { NextPage } from "next";
import Link from "next/link";

const navItem = ["Home", "About", "Projects", "Services"];

interface Props {
  translate: string;
}

const SiderBar: NextPage<Props> = ({ translate }) => {
  return (
    <div
      className={`${translate} sm:hidden top-0 right-0 w-screen bg-slate-900  px-4 text-white fixed h-full ease-in-out duration-300`}
    >
      <div className="flex flex-col space-y-3 justify-center items-center h-[80vh]">
        {navItem.map((item, index) => (
          <Link key={index} href="#">
            <a className="text-xl py-2 px-3 text-white hover:text-blue-400 ease-in-out duration-300 ">
              {item}
            </a>
          </Link>
        ))}
        <Link href="#">
          <a className="flex text-xl justify-center items-center py-2 px-3 w-full bg-blue-900 text-white rounded-md hover:bg-blue-600 transition ease-in-out duration-300 ">
            Sign In
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SiderBar;
