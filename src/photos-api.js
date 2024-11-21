import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "9AX941lrFHxJzuB5DftjD5ozuPIyip8ymk73blu_4no";

export const fetchPhotos = async (query, page) => {
  try {
    const response = await axios.get(`/search/photos/`, {
      params: {
        query,
        page,
        per_page: 12,
        client_id: ACCESS_KEY,
      }
    });
    return response.data 
   
} catch (error) {console.error("Error fetching photos from Unsplash:", error);
    throw error; 
}
}; 
