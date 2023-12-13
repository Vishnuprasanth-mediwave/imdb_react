import { useEffect, useState } from "react";
import { getUser } from "../services/api";
import { IUserAdd } from "../components/types";
import Layout from "../components/Layout";

const User = () => {
  const [user, setUser] = useState<IUserAdd>();
  const [error, setError] = useState<string>("");
  useEffect(() => {
    async function getUserFromAPI() {
      try {
        const response = await getUser();
        setUser(response.data);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data);
      }
    }
    getUserFromAPI();
  }, []);
  return (
    <>
      <Layout title="account">
        <div className="account">
          <h3 style={{ color: "red", textAlign: "center" }}>{error}</h3>
          <div className="details">
            <h2>firstname: {user?.first_name}</h2>
            <h2>lastname: {user?.last_name}</h2>
            <h2>user_name: {user?.user_name}</h2>
            <h2>email: {user?.email}</h2>
            <h2>phone_no: {user?.phone_no}</h2>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default User;
