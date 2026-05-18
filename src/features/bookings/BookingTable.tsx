import BookingRow from "./BookingRow";
import { useBooking } from "./useBookings";

const BookingTable = () => {
  const { isLoading, bookings } = useBooking();

  if (isLoading)
    return (
      <p className="p-8 text-center text-gray-500">Loading Bookings... </p>
    );
  return (
    <div
      className="overflow-hidden rounded-lg border border-gray-200 bg-white
  shadow-sm"
    >
      <table className="w-full text-left">
        <thead className="bg-gray-50 uppercase text-xs font-semibold text-gray-500">
          <tr>
            <th className="px-6 py-4">Cabin</th>
            <th className="px-6 py-4">Guest</th>
            <th className="px-6 py-4">Dates</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking) => (
            <BookingRow key={booking.id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
