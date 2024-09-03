import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { RestrictedRoute } from "./routes/RestrictedRoute";

import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage ";
import Home from "./pages/Home";

import "./App.css";
import { refreshThunk } from "./redux/auth/operations";
import { selectRefreshPending } from "./redux/auth/selectors";

import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const refreshPending = useSelector(selectRefreshPending);

  return refreshPending ? (
    <p> Loading...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute component={<Home />} />}></Route>
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          ></Route>
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          ></Route>
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          ></Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
