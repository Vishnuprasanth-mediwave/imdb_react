import { useEffect, useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { IUserAdd } from "../components/types";
import { getUser, updateUser } from "../services/api";

function UpdateForm() {
  const [details, setDetails] = useState<IUserAdd>({
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    phone_no: "",
  });
  const [error, setError] = useState<string>("");
  useEffect(() => {
    async function getUserFromAPI() {
      try {
        const response = await getUser();
        setDetails(response.data);
      } catch (error: any) {
        console.log(error);
        setError(error.response.data);
      }
    }
    getUserFromAPI();
  }, []);
  function handleUpdateUser(user: IUserAdd) {
    UpdateUserFromAPI(user);
  }
  async function UpdateUserFromAPI(user: IUserAdd) {
    try {
      const response = await updateUser(user);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      setError(error.response.data);
    }
  }

  console.log(details);

  return (
    <>
      <Layout title="update">
        <h1>UpdateForm</h1>
        <Form
          details={details}
          type="update"
          handleAddUser={handleUpdateUser}
        />
        {error && <p>{error}</p>}
      </Layout>
    </>
  );
}

export default UpdateForm;
