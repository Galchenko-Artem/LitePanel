import React, { useMemo } from "react";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

function GenericTable<T extends object>({ data, columns }: TableProps<T>) {
  const headers = useMemo(() => columns.map(col => col.label), [columns]);

  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((label, idx) => (
              <th key={idx} className="text-left px-4 py-2 border-b">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="odd:bg-white even:bg-gray-50">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-2 border-b">
                  {String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GenericTable;
