import { isFuture, isPast, isToday, sub } from "date-fns";
import supabase from "../services/supabase";
import { cabins } from "./dataCabins";
import { guests } from "./dataGuests";
import { bookings } from "./dataBookings";
import { subtractDates } from "../utils/helper";
import { useState } from "react";
import Button from "../ui/Button";

const deleteGuests = async () => {
  const { error } = await supabase.from("guests").delete().gt("id", 0);
  if (error) {
    console.error("Error deleting guests:", error);
  } else {
    console.log("Guests deleted successfully");
  }
};

const deleteBookings = async () => {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) {
    console.error("Error deleting bookings:", error);
  } else {
    console.log("Bookings deleted successfully");
  }
};

const deleteCabins = async () => {
  const { error } = await supabase.from("cabins").delete().gt("id", 0);
  if (error) {
    console.error("Error deleting cabins:", error);
  } else {
    console.log("Cabins deleted successfully");
  }
};

// Database creation functions
const createGuests = async () => {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) console.log("Error inserting guests:", error);
  else console.log("Guests inserted successfully");
};

const createCabins = async () => {
  const { error } = await supabase.from("cabins").insert(cabins);
  if (error) console.log("Error inserting cabins:", error);
  else console.log("Cabins inserted successfully");
};

const createBookings = async () => {
  //While Booking we need a guestId and a cabinId
  //We cannot use the id form the local data files because supabse generates its own id,
  // so we need to fetch the data from the database to get the correct ids.

  //fetching guests id from the database
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestsIds = guestsIds?.map((guest) => guest.id) || [];

  //fetching cabins id from the database
  const { data: cabinsIds } = await supabase
    .from("cabins")
    .select("id")
    .order("id");
  const allCabinsIds = cabinsIds?.map((cabin) => cabin.id) || [];

  // preparing the bookings data with the correct guestId and cabinId

  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinId - 1); // getting the cabin data from the local data
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const cabinPrice = numNights * (cabin?.regularPrice - cabin?.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0;

    //Setting Price in real ap
    const totalPrice = cabinPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    ) {
      status = "checked-out";
    }
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    ) {
      status = "unconfirmed";
    }
    if (
      isFuture(new Date(booking.endDate)) ||
      (isToday(new Date(booking.endDate)) &&
        isPast(new Date(booking.startDate)) &&
        !isToday(new Date(booking.startDate)))
    ) {
      status = "checked-in";
    }

    return {
      ...booking,
      numNights,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestsIds.at(booking.guestId - 1), // replacing with real guest id
      cabinId: allCabinsIds.at(booking.cabinId - 1), // replacing with real cabin id
      status,
    };
  });

  //uploading the processed bookings
  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log("Error inserting bookings:", error);
  else console.log("Bookings inserted successfully");
};

const Uploader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const uploadAll = async () => {
    setIsLoading(true);
    // We need to delete the bookings first because they reference the guests and cabins
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();

    //Booking must be created after guests and cabins because they reference them
    await createCabins();
    await createGuests();
    await createBookings();

    setIsLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA UPLOADER (DEV ONLY)</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload All Sample Data
      </Button>
    </div>
  );
};

export default Uploader;
