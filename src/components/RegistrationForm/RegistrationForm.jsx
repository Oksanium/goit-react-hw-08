import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import * as Yup from "yup";

export default function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function handleSubmit(vals, actions) {
    dispatch(registerThunk(vals));
    actions.resetForm(initialValues);
  }

  const RegSchema = Yup.object().shape({
    password: Yup.string().min(7, "min 7 symbols").required("required"),
  });

  if (isLoggedIn) return <Navigate to="/" replace />;
  return (
    <div className={s.hero}>
      <div className={s.card}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={RegSchema}
        >
          <Form className={s.form}>
            <label className={s.label}>Name</label>
            <Field
              className={s.input}
              name="name"
              type="text"
              placeholder="Your name..."
              required
            />
            <label className={s.label}>Email</label>
            <Field
              className={s.input}
              name="email"
              type="email"
              placeholder="Email..."
              required
            />
            <div className={s.labelArea}>
              <label className={s.label}>Password</label>

              <span className={s.err}>
                <ErrorMessage name="password" className={s.err} />
              </span>
            </div>
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Password..."
              required
            />
            <button type="submit" className={`${s.regBtn} ${s.button}`}>
              Register
            </button>
            <p>Already have an account?</p>
            <Link to="/login" className={`${s.logBtn} ${s.button}`}>
              Login
            </Link>
          </Form>
        </Formik>
      </div>
      <div className={s.textCont}>
        <h1>Register new account</h1>
      </div>
    </div>
  );
}
