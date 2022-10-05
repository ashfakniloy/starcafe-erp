import { entriesData } from "../../components/data/entriesData";
import EntryForm from "../../components/Form/EntryForm";
import Table from "../../components/Table";
import { entriesColumn } from "../../components/Table/columns/entries";
import Tabs from "../../components/Tabs";

function EntryPage() {
  const table = (
    <Table columnsHeading={entriesColumn} usersData={entriesData} />
  );
  const form = <EntryForm />;

  const tabsData = [
    {
      label: "All Entries",
      content: table,
    },
    {
      label: "Add Entry",
      content: form,
    },
  ];

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <Tabs tabsData={tabsData} />
    </div>
  );
}

export default EntryPage;
