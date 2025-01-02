import axios from "axios";

const BASE_URL = "https://www.wrike.com/api/v4";
const ACCESS_TOKEN =
  "eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjY2ODY0MTksXCJpXCI6OTI3ODMxMSxcImNcIjo0NjkwMzEzLFwidVwiOjIxMDA0NDQ0LFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNzM1ODIxMzA3fQ.JMhTX34gEa51E06dSpw4J6IrvQ6Ibwg8hRwgyVxGb8s";

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
