import axios from 'axios';

const API_BASE_URL = "https://fedskillstest.coalitiontechnologies.workers.dev"; // Replace with the actual API base URL.
const AUTH_TOKEN = "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0"; // Your Basic Auth token
export const fetchPatientData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/patients`, {
      headers: {
        Authorization: AUTH_TOKEN, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error; 
  }
};