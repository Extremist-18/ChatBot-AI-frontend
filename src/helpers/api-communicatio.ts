import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Forward backend error message (e.g., "Invalid credentials")
        throw new Error(error.response?.data?.message || "Login failed");
      }
      throw new Error("Network error");
    }
  };

  export const signupUser = async (name:string ,email: string, password: string) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        { name,email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Forward backend error message (e.g., "Invalid credentials")
        throw new Error(error.response?.data?.message || "SignUp failed");
      }
      throw new Error("Network error");
    }
  };
  
// export const checkAuthStatus = async () => {
//     const res = await axios.get("user/auth-status",{
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       }
//     );
//     if(res.status!==200){
//       throw new Error("Unable to Authenticate");
//     }
//     const data = await res.data;
//     return data;
// };  

export const checkAuthStatus = async () => {
  try {
    const response = await axios.get('/api/check-auth');
    return response.data;
  } catch (error) {
    // Explicitly return null if unauthorized
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return null;
    }
    throw error;
  }
};

export const sendChatRequest = async (message:string) => {
  const res = await axios.post("chat/new",{
      message,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  if(res.status!==200){
    throw new Error("Unable to send Chat");
  }
  const data = await res.data;
  return data;
};  

export const getUserChats = async () => {
  const res = await axios.get("chat/all-chats",{}
  );
  if(res.status!==200){
    throw new Error("Unable to get Chat");
  }
  const data = await res.data;
  return data;
};  

export const deleteUserChats = async () => {
  const res = await axios.get("chat/delete",{}
  );
  if(res.status!==200){
    throw new Error("Unable to delete Chat");
  }
  const data = await res.data;
  return data;
};  

export const logoutUser = async () => {
  const res = await axios.get("user/logout",{}
  );
  if(res.status!==200){
    throw new Error("Unable to Logout");
  }
  const data = await res.data;
  return data;
}; 
 