import axios from "axios";

const API_KEY = "11bffea0316789bec76f6dd84a7c2a05"; // Replace with your API Key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
