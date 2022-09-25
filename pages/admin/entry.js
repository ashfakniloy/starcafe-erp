import { useState } from "react";
import { entriesData } from "../../components/data/entriesData";
import EntryForm from "../../components/Form/EntryForm";
import Table from "../../components/Table";
import { entriesColumn } from "../../components/Table/columns/entries";

function EntryPage() {
  const [toggleState, setToggleState] = useState(0);

  const tabOptions = ["All Entries", "Add Entry"];

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <div className="flex">
        {tabOptions.map((option, i) => (
          <h4
            key={i}
            className={`text-xl font-semibold px-3 py-2 border-t-2 border-white ${
              toggleState === i
                ? "bg-white border-t-2 border-indigo-600"
                : "bg-slate-100 border-slate-100 opacity-50 cursor-pointer"
            }`}
            onClick={() => toggleTab(i)}
          >
            {option}
          </h4>
        ))}

        {/* <h4 className="text-xl font-semibold px-3 py-2 ">Add Entry</h4> */}
      </div>

      {toggleState === 0 && (
        <div className="mt-10 flex flex-col items-center">
          <Table columnsHeading={entriesColumn} usersData={entriesData} />
        </div>
      )}

      {toggleState === 1 && <EntryForm />}
    </div>
  );
}

export default EntryPage;
