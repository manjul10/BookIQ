import BookingTable from "../features/bookings/BookingTable";

const Bookings = () => {
  return (
   <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">All bookings</h1>
           {/* placeholder to add filtering and the "Add Booking" button here  */}
        </div>

        <BookingTable />
      </div>
  );
};

export default Bookings;
