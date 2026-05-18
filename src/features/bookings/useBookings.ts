import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBooking";

export const useBooking = () => {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, error, bookings };
};
