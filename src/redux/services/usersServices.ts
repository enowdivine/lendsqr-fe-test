import axios from "axios";

const ENDPOINT = `${process.env.REACT_APP_USERS}`;

const allUsers = async () => {
  const response = await axios.get(`${ENDPOINT}`);
  return response.data;
};

const singleUser = async (userId: any) => {
  const response = await axios.get(`${ENDPOINT}/${userId}`);
  return response.data;
};

const usersServices = {
  allUsers,
  singleUser,
};

export default usersServices;
