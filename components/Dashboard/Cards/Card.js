import Link from "next/link";
import CountUp from "react-countup";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Card({ title, count, link }) {
  return (
    <Link href={link} passHref>
      <a>
        <div
          className={`bg-white min-h-[150px] px-8 py-6 gap-40 shadow-md rounded hover:scale-[1.03] ease-out hover:shadow-lg transition duration-500 group cursor-pointer`}
        >
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
