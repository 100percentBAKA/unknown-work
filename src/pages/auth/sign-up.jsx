// import { useFormik } from "formik";
// import { REGISTER_SCHEMA } from "../../schemas/index";
// import { Link } from "react-router-dom";

// function SignUp() {
//   const formik = useFormik({
//     initialValues: {
//       fullname: "",
//       email: "",
//       password: "",
//       dob: null,
//       country: "",
//       city: "",
//       state: "",
//       address: "",
//       pincode: "",
//     },
//     validationSchema: REGISTER_SCHEMA,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <div>
//       <div className="flex flex-col space-y-1 mb-6">
//         <div className="font-bold text-2xl">Sign Up</div>
//         <div className="text-sm">Enter the details mentioned below</div>
//       </div>

//       <form onSubmit={formik.handleSubmit} className="mt-4 px-3">
//         <div className="flex flex-col space-y-4">
//           <div className="form-field">
//             <label htmlFor="fullname" className="text-sm">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.fullname}
//               placeholder="Enter your full name"
//               className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//             />
//             {formik.touched.fullname && formik.errors.fullname ? (
//               <div className="error-text">{formik.errors.fullname}</div>
//             ) : null}
//           </div>

//           <div className="form-field">
//             <label htmlFor="email" className="text-sm">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.email}
//               placeholder="Enter your email"
//               className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div className="error-text">{formik.errors.email}</div>
//             ) : null}
//           </div>

//           <div className="form-field">
//             <label htmlFor="password" className="text-sm">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.password}
//               placeholder="Enter your password"
//               className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div className="error-text">{formik.errors.password}</div>
//             ) : null}
//           </div>

//           <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
//             <div className="form-field flex-grow">
//               <label htmlFor="dob" className="text-sm">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 id="dob"
//                 name="dob"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.dob}
//                 placeholder="Select your date of birth"
//                 className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               />
//               {formik.touched.dob && formik.errors.dob ? (
//                 <div className="error-text">{formik.errors.dob}</div>
//               ) : null}
//             </div>

//             <div className="form-field flex-grow">
//               <label htmlFor="country" className="text-sm">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.country}
//                 className="w-full placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               >
//                 <option value="ind">India</option>
//                 <option value="ind">India</option>
//                 <option value="ind">India</option>
//                 {/* Add options for countries here */}
//               </select>
//               {formik.touched.country && formik.errors.country ? (
//                 <div className="error-text">{formik.errors.country}</div>
//               ) : null}
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
//             <div className="form-field flex-grow">
//               <label htmlFor="city" className="text-sm">
//                 City
//               </label>
//               <input
//                 type="city"
//                 id="city"
//                 name="city"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.city}
//                 placeholder="Enter your city"
//                 className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               />
//               {formik.touched.city && formik.errors.city ? (
//                 <div className="error-text">{formik.errors.city}</div>
//               ) : null}
//             </div>

//             <div className="form-field flex-grow">
//               <label htmlFor="state" className="text-sm">
//                 State
//               </label>
//               <input
//                 type="state"
//                 id="state"
//                 name="state"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.state}
//                 placeholder="Enter your state"
//                 className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               />
//               {formik.touched.state && formik.errors.state ? (
//                 <div className="error-text">{formik.errors.state}</div>
//               ) : null}
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
//             <div className="form-field flex-grow">
//               <label htmlFor="address" className="text-sm">
//                 Address
//               </label>
//               <input
//                 type="address"
//                 id="address"
//                 name="address"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.address}
//                 placeholder="Enter your address"
//                 className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               />
//               {formik.touched.address && formik.errors.address ? (
//                 <div className="error-text">{formik.errors.address}</div>
//               ) : null}
//             </div>

//             <div className="form-field flex-grow">
//               <label htmlFor="pincode" className="text-sm">
//                 Pincode
//               </label>
//               <input
//                 type="number" // Changed to number type
//                 id="pincode"
//                 name="pincode"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.pincode}
//                 placeholder="Enter your pincode"
//                 className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
//               />
//               {formik.touched.pincode && formik.errors.pincode ? (
//                 <div className="error-text">{formik.errors.pincode}</div>
//               ) : null}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Lets Go
//           </button>

//           <Link to="/auth/sign-in">
//             Already have an account ?{" "}
//             <span className="text-blue-500 underline">Log in</span>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
import { useFormik } from "formik";
import { REGISTER_SCHEMA } from "../../schemas/index";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      dob: null,
      country: "",
      city: "",
      state: "",
      address: "",
      pincode: "",
    },
    validationSchema: REGISTER_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className="flex flex-col space-y-1 mb-6">
        <div className="font-bold text-2xl">Sign Up</div>
        <div className="text-sm">Enter the details mentioned below</div>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <form onSubmit={formik.handleSubmit} className="mt-4 px-3">
        <div className="flex flex-col space-y-4">
          <div className="form-field">
            <label htmlFor="fullname" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              placeholder="Enter your full name"
              className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <div className="error-text">{formik.errors.fullname}</div>
            ) : null}
          </div>

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
              className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
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
              className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-text">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="dob" className="text-sm">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
              placeholder="Select your date of birth"
              className="py-5 placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="error-text">{formik.errors.dob}</div>
            ) : null}
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="form-field flex-grow">
              <label htmlFor="country" className="text-sm">
                Country
              </label>
              <select
                id="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                className="w-full placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
              >
                <option value="">Select country</option>
                <option value="ind">India</option>
                <option value="usa">USA</option>
                {/* Add more country options */}
              </select>
              {formik.touched.country && formik.errors.country ? (
                <div className="error-text">{formik.errors.country}</div>
              ) : null}
            </div>

            <div className="form-field flex-grow">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                placeholder="Enter your city"
                className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
              />
              {formik.touched.city && formik.errors.city ? (
                <div className="error-text">{formik.errors.city}</div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="form-field flex-grow">
              <label htmlFor="state" className="text-sm">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                placeholder="Enter your state"
                className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="error-text">{formik.errors.state}</div>
              ) : null}
            </div>

            <div className="form-field flex-grow">
              <label htmlFor="pincode" className="text-sm">
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode}
                placeholder="Enter your pincode"
                className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <div className="error-text">{formik.errors.pincode}</div>
              ) : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="address" className="text-sm">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              placeholder="Enter your address"
              className="placeholder:text-[13px] h-[32px] rounded-md placeholder:pl-3 py-5 px-3"
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="error-text">{formik.errors.address}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Let's Go
          </button>

          <Link to="/auth/sign-in">
            Already have an account?{" "}
            <span className="text-blue-500 underline">Log in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
