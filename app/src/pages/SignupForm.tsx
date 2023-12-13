import { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { IUserAdd } from "../components/types";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";
function SignupForm() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  async function handleAddUser(user: IUserAdd) {
    try {
      const userPayload = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        user_password: user.user_password,
        phone_no: user.phone_no,
      };
      console.log(userPayload);
      const response = await addUser(userPayload);
      console.log(response);
      setShowModal(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting movie:", error);
      }
    }
  }
  return (
    <>
      <Layout title="signup">
        <h1>SignupForm</h1>
        <Form handleAddUser={handleAddUser} />
        {showModal && (
          <dialog open>
            <article>
              <header>
                <a href="#close" aria-label="Close" className="close"></a>
                Signup
              </header>
              <p>successfully signup</p>
              <footer>
                <button onClick={() => navigate("/login")} role="button">
                  Confirm
                </button>
              </footer>
            </article>
          </dialog>
        )}
      </Layout>
    </>
  );
}

export default SignupForm;
