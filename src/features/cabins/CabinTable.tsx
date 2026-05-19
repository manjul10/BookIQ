import CabinRow from "./CabinRow";
import { useCabins } from "./useCabin";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();

  if (isLoading)
    return <p className="p-8 text-center text-gray-500"> Loading Cabins...</p>;
  return (
    <div
      className="overflow-hidden rounded-lg border border-gray-200 bg-white
  shadow-sm"
    >
      <table className="w-full text-left">
        <thead className="bg-gray-50 uppercase text-xs font-semibold text-gray-500">
          <tr>
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4">Cabin</th>
            <th className="px-6 py-4">Capacity</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Discount</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {cabins?.map((cabin) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CabinTable;
