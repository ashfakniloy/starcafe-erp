import { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTrash,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
// import { COLUMNS } from "./columns";
// import MOCK_DATA from "./data.json";
import { GlobalFilter } from "./GlobalFilter";
import useDropdown from "../../hooks/useDropdown";
// import { ColumnFilter } from "./ColumnFilter";
// import { Checkbox } from "./Checkbox";

function Table({ columnsHeading, usersData }) {
  const columns = useMemo(() => columnsHeading, [columnsHeading]);
  // const data = useMemo(() => MOCK_DATA, []);
  const data = useMemo(() => usersData, [usersData]);
  // const defaultColumn = useMemo(() => {
  //   return {
  //     Filter: ColumnFilter,
  //   };
  // }, []);

  // console.log("tables", usersData);

  // const [active, setActive] = useState("");
  const {
    showDropdown: active,
    setShowDropdown: setActive,
    node,
  } = useDropdown();
  // const { node } = useDropdown();

  const showMenu = (i) => {
    if (active === i) {
      return setActive(null);
    }

    setActive(i);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    // selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      // defaultColumn,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
    // (hooks) => {
    //   hooks.visibleColumns.push((columns) => [
    //     {
    //       id: "selection",
    //       // Header: ({ getToggleAllRowsSelectedProps }) => (
    //       //   <Checkbox {...getToggleAllRowsSelectedProps()} />
    //       // ),
    //       // Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
    //     },
    //     ...columns,
    //   ]);
    // }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  // const selectedRows = JSON.stringify(
  //   {
  //     selectedFlatRows: selectedFlatRows.map((row) => row.original),
  //   },
  //   null,
  //   2
  // );

  // console.log(selectedRows);

  // const [pageNumber, setPageNumber] = useState(pageIndex + 1);

  // console.log(pageIndex + 1);

  return (
    <div className="">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        className="table-auto  text-xs lg:text-base min-w-[1500px]"
      >
        <thead className="bg-custom-blue3">
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-sm border-collapse border border-gray-100"
                >
                  {column.render("Header")}
                  <span
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="inline-block px-2"
                  >
                    <div className="text-xs">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </div>
                  </span>
                  {/* <div className="mt-2 text-black font-normal">
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                key={i}
                {...row.getRowProps()}
                className="hover:shadow transition duration-200"
              >
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      key={i}
                      {...cell.getCellProps()}
                      className="px-4 py-3 text-sm text-custom-gray3 font-semibold border-collapse border border-gray-100"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}

                <td className="relative cursor-pointer">
                  {active !== i && (
                    <div
                      className={`px-2 py-3 border border-white text-lg  text-custom-gray3 bg-white ${
                        active === i && "text-indigo-500 bg-slate-100"
                      }`}
                      onClick={() => showMenu(i)}
                    >
                      <BsThreeDots />
                    </div>
                  )}
                  {active === i && (
                    <div
                      className={`px-2 py-3 border border-white text-lg  text-custom-gray3 bg-white ${
                        active === i && "text-indigo-500 bg-slate-100"
                      }`}
                      // onClick={() => showMenu(i)}
                    >
                      <BsThreeDots />
                    </div>
                  )}

                  {active === i && (
                    <div
                      ref={node}
                      className="absolute py-2 right-0 z-20 min-w-[130px] bg-white text-custom-gray3 font-semibold cursor-pointer shadow  border text-sm"
                    >
                      <div
                        className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2"
                        onClick={() => setActive(null)}
                      >
                        <FaTimes /> <p>Close</p>
                      </div>
                      <div className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2">
                        <FaEdit /> <p>Edit</p>
                      </div>
                      <div className="px-5 py-2 hover:bg-slate-100 hover:text-indigo-500 transition duration-300 flex items-center gap-2">
                        <FaTrash /> <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-center text-sm items-center mt-3 space-x-2">
        <span className="text-sm">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <span>
          | Rows per page:{" "}
          <select
            className="outline-none w-12 border border-slate-300"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>

        <span>
          | Go to page:{" "}
          <input
            type="number"
            min="1"
            max={pageOptions.length}
            className="w-10 outline-none border border-slate-500"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>

        <div className="flex gap-1">
          <button
            className="p-1 text-sm rounded-sm bg-cyan-300 disabled:opacity-50"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            className="bg-cyan-300 active:bg-cyan-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className="bg-cyan-300 active:bg-cyan-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className="p-1 text-sm rounded-sm  bg-cyan-300 disabled:opacity-50"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
