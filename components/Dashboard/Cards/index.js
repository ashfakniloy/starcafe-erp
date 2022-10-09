import { ImUsers } from "react-icons/im";
import { MdOutlineGroups } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import Card from "./Card";

function Cards() {
  const totalCounts = [
    {
      title: "Expense",
      count: 589054,
      link: "/admin/balance/expense",
    },
    {
      title: "Loan Balance",
      count: 26118,
      link: "/admin/balance/loan-balance",
    },
    {
      title: "Bank Balance",
      count: 289000,
      link: "/admin/balance/bank-balance",
    },
    {
      title: "Stock Value",
      count: 115425,
      link: "/admin/balance/stock-value",
    },
    {
      title: "Current Balance",
      count: 68914,
      link: "/admin/balance/current-balance",
    },
    {
      title: "Cash Balance",
      count: 37995,
      link: "/admin/balance/cash-balance",
    },
  ];

  return (
    <>
      {totalCounts.map((totalCount, i) => (
        <Card
          key={i}
          title={totalCount.title}
          count={totalCount.count}
          link={totalCount.link}
        />
      ))}
    </>
  );
}

export default Cards;
