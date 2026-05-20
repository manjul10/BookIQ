import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import supabase from "../../services/supabase";

export const useRecentBookings = () => {
  const numDays = 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: bookings } = useQuery({
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select("created_at ,totalPrice, extrasPrice")
        .gte("created_at", queryDate);
      if (error) throw new Error(error.message);
      return data;
    },
    queryKey: ["bookings", `last-${numDays}`],
  });

  return { isLoading, bookings };
};
