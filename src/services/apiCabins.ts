import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
};

export const createEditCabin = (newCabin, id)=>{
    //check if image is an existing supabase url or a new file
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    
const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

// it it is a new image construct the full image path
const imagePath = hasImagePath
  ? newCabin.image
  : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//create/edit cabin in the database
  let query = supabase.from("cabins");
//Create
if(!id) query = query.insert([{...newCabin, image: imagePath}])

    //Edit
    if(id) query = query.update({...newCabin, image:imagePath}).eq("id",id);


}
