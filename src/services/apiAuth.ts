import supabase from "./supabase";

const login = async (credentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(credentials);
  if (error) {
    console.error("Error logging in:", error);
    return null;
  } else {
    console.log("Logged in successfully:", data);
    return data;
  }
};

const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error("Error fetching user:", error);
    return null;
  } else {
    console.log("Current user:", data);
    return data?.user || null;
  }
};
const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error logging out:", error);
  } else {
    console.log("Logged out successfully");
  }
};

export { login, logout, getCurrentUser };
