import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useCabins } from "../features/cabins/useCabin";
import Stats from "../features/dashboard/Stats";

const Dashboard = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { cabins, isLoading: isLoading2 } = useCabins();

  if (isLoading1 || isLoading2) return <p> Loading State...</p>;
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-gray-800">Hotel Analytics</h1>
      <Stats bookings={bookings} cabinCount={cabins?.length} />

      <div className="bg-white p-8 border border-gray-100 rounded-md shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Recent Activity
        </h2>
        <p className="text-gray-400 italic">
          Chart area 
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
