import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateResume from "../pages/CreateResume";
import Landpage from "../pages/Landpage";
import Layout from "../pages/Layout";
import Layout2 from "../pages/Layout2";
import Templates from "../pages/Templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landpage />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout2>
              <Signup />
            </Layout2>
          }
        />
        <Route
          path="/login"
          element={
            <Layout2>
              <Login />
            </Layout2>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              <CreateResume />
            </Layout>
          }
        />

        <Route
          path="templates"
          element={
            <Layout2>
              <Templates />
            </Layout2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
