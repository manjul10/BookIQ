import supabase from "./supabase";

export const getBookings = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select(", cabins(), guests(*) ");

  if (error) {
    throw new Error("Bookings could not be loaded");
  }

  return data;
};
