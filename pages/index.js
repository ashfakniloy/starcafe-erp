import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/admin">
        <div className=" text-white bg-custom-blue px-6 py-2 cursor-pointer rounded-lg font-semibold">
          Login
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
