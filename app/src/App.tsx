import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "@picocss/pico";

import Home from "./pages/Home";
const SignupForm = lazy(() => import("./pages/SignupForm"));
const UpdateForm = lazy(() => import("./pages/UpdateForm"));
import Loading from "./components/loding";
import LoginForm from "./pages/LoginForm";
import MovieForm from "./pages/MovieForm";
import User from "./pages/user";
import SingleMovie from "./pages/singleMovie";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/movie" element={<MovieForm />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/u" element={<User />} />
            <Route path="/update/:id" element={<UpdateForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
