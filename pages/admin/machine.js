import { machinesData } from "../../components/data/machinesData";
import MachineForm from "../../components/Form/MachineForm";
import Table from "../../components/Table";
import { machinesColumn } from "../../components/Table/columns/machines";
import Tabs from "../../components/Tabs";

function MachinePage() {
  const table = (
    <Table columnsHeading={machinesColumn} usersData={machinesData} />
  );
  const form = <MachineForm />;

  const tabsData = [
    {
      label: "All Machines",
      content: table,
    },
    {
      label: "Add Machine",
      content: form,
    },
  ];

  return (
    <div className="bg-white p-8 rounded shadow-md relative">
      <Tabs tabsData={tabsData} />
      {/* <div className="flex">
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
      </div>

      {toggleState === 0 && (
        <div className="mt-10 flex flex-col items-center">
          <Table columnsHeading={machinesColumn} usersData={machinesData} />
        </div>
      )}

      {toggleState === 1 && <MachineForm />} */}
    </div>
  );
}

export default MachinePage;
