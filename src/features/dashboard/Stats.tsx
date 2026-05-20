import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helper";

const Stats = ({ bookings, cabinCount }) => {
  const numBookings = bookings?.length;
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  return (
    <div className="grid grid-cols-4 gap-6">
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value="--"
      />
      <Stat
        title="Occupancy"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value="--"
      />
    </div>
  );
};

const Stat = ({ icon, title, value, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    indigo: "bg-indigo-100 text-indigo-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div
      className="bg-white border border-gray-100 rounded-md p-4 grid
  grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1 shadow-sm"
    >
      <div
        className={`row-span-full aspect-square rounded-full flex items-center
  justify-center ${colors[color]}`}
      >
        {icon}
      </div>
      <h5
        className="self-end text-xs uppercase font-semibold text-gray-500
  tracking-wider"
      >
        {title}
      </h5>
      <p className="text-2xl font-bold leading-none">{value}</p>
    </div>
  );
};

export default Stats;
