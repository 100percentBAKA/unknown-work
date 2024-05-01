import { useFormik } from "formik";
import { LOGIN_SCHEMA } from "../../schemas/index";
import { Link } from "react-router-dom";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LOGIN_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <div className="font-bold text-2xl">Sign In</div>
        <div className="text-sm">Enter your login details below</div>
      </div>

      <form onSubmit={formik.handleSubmit} className="mt-4">
        <div className="flex flex-col space-y-4">
          <div className="form-field">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
              className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-text">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
              className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-text">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>

          <Link to="/auth/sign-up">
            Dont have an account?{" "}
            <span className="text-blue-500 underline">Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
