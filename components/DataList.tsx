import React from "react";
import DataRow from "./DataRow";
import type { ForexPair } from "../types";

interface DataListProps {
  data: ForexPair[];
}

const DataList: React.FC<DataListProps> = ({ data }) => {
  return (
    <main className="flex-grow overflow-y-auto">
      <div className="divide-y divide-gray-800">
        {data.map((pair) => (
          <DataRow key={pair.id} pair={pair} />
        ))}
      </div>
    </main>
  );
};

export default DataList;
