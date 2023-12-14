import { lazy, Suspense, useState } from "react";
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
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movie" element={<MovieForm />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/u" element={<User />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
