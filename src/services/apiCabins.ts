import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase
    .from("cabins")
    .select(
      "id, created_at, name, maxCapacity, regularPrice, discount, description, image",
    );
  // const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export const createEditCabin = async (newCabin, id) => {
  //check if image is an existing supabase url or a new file
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );

  // it it is a new image construct the full image path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //create/edit cabin in the database
  let query;

  let cabinDataToInsertUpdate = { ...newCabin, image: imagePath };
  if (id) {
    delete cabinDataToInsertUpdate.id;
  }
  //Create
  if (!id) query = supabase.from("cabins").insert([cabinDataToInsertUpdate]);

  //Edit
  // if (id) query = supabase.from("cabins").update(cabinDataToInsertUpdate).eq("id", Number(id));
  if (id && typeof id !== "object")
    query = supabase
      .from("cabins")
      .update(cabinDataToInsertUpdate)
      .eq("id", Number(id));
      
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("cabin could't be created/deleted");
  }

  //upload image (only if it's a new image file, not an existing URL)

  if (hasImagePath) return data; //if path already exsists, no need to upload

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image, {
      cacheControl: "3600",
      upsert: false,
    });

  //Delete the cabin If there was an error uploading image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }
  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin could not be deleted");
  }
  return data;
};
;
