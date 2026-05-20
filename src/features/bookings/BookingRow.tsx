import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helper";

const BookingRow = ({ booking }) => {
  const {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = booking;



  const statusToColor = {
    unconformed: "bg-blue-100 text-blue-700",
    "checked-in": "bg-green-100 text-green-700",
    "checked-out": "bg-gray-200 text-gray-700",
  };
  return (
    <tr
      className="border-b border-gray-100 last:border-0 hover:bg-gray-50
  transition-colors"
    >
      <td className="px-6 py-4 font-semibold text-gray-600 font-mono">
        {cabinName}
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="font-medium text-gray-700">{guestName}</span>
          <span className="text-xs text-gray-400">{email}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <div className="flex flex-col">
          <span className="font-medium">
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            &rarr; {numNights} night stay
          </span>
          <span>
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </div>
      </td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase ${statusToColor[status]}`}
        >
          {status.replace("-", " ")}
        </span>
      </td>
      <td
        className="px-6 py-4 font-semibold
  text-gray-700"
      >
        {formatCurrency(totalPrice)}
      </td>
      <td className="px-6 py-4 text-right">
        {/* We will add an "Actions" menu here later */}
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </td>
    </tr>
  );
};

export default BookingRow;
