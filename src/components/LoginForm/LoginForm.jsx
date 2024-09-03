import { Field, Form, Formik } from "formik";
import s from "../RegistrationForm/RegistrationForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function handleSubmit(vals, actions) {
    dispatch(loginThunk(vals));
    actions.resetForm(initialValues);
  }

  if (isLoggedIn) return <Navigate to="/" replace />;
  return (
    <div className={s.hero}>
      <div className={s.card}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <label className={s.label}>Email</label>
            <Field
              className={s.input}
              name="email"
              type="email"
              placeholder="Email..."
              required
            />
            <label className={s.label}>Password</label>
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Password..."
              required
            />
            <button type="submit" className={`${s.logBtn} ${s.button}`}>
              Login
            </button>
            <p>No account yet?</p>
            <Link to="/register" className={`${s.regBtn} ${s.button}`}>
              Register
            </Link>
          </Form>
        </Formik>
      </div>
      <div className={s.textCont}>
        <h1>Please login to use the service</h1>
      </div>
    </div>
  );
}
