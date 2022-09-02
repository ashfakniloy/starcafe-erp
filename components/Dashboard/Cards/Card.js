import Link from "next/link";
import CountUp from "react-countup";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Card({ title, count, link }) {
  return (
    // <div className="bg-gradient-to-t [&:nth-child(1)]:from-violet-500 [&:nth-child(1)]:to-violet-300 [&:nth-child(2)]:from-red-500 [&:nth-child(2)]:to-red-300 [&:nth-child(3)]:from-green-500 [&:nth-child(3)]:to-green-300 [&:nth-child(4)]:from-orange-500 [&:nth-child(4)]:to-orange-300 text-white flex justify-between items-center px-8 py-6 gap-40 shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
    <Link href={link} passHref>
      <a>
        <div
          className={`bg-white min-h-[150px] px-8 py-6 gap-40 shadow-md rounded hover:scale-105 hover:shadow-lg transition duration-300 group cursor-pointer`}
        >
          {/* <div className="text-5xl p-4 rounded-full bg-neutral-200">{icon}</div> */}
          <div className="space-y-4">
            <h1 className="capitalize text-[15px] text-custom-indigo2 font-semibold">
              {title}
            </h1>
            <div className="text-custom-gray2 font-semibold text-[33px]">
              {count ? (
                <div className="flex  items-center">
                  <TbCurrencyTaka />
                  <CountUp end={count} duration={2} />
                </div>
              ) : (
                "---"
              )}
            </div>
            <div className="flex justify-end items-center gap-1 text-gray-400 text-sm font-semibold group-hover:underline underline-offset-2">
              <p className=" text-end">Details</p>
              <FaArrowAltCircleRight />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
