import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { registerUser } from "../redux/slices/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate(); 
  const loading = useSelector(state => state.auth.loading);
  const authenticated = useSelector(state => state.auth.authenticated);
  useEffect(() => {
    if (authenticated) {
      navigation("/dashboard");
    }
  }, [authenticated]);
  return (
    <div>
      { loading && <div className="text-center text-blue-500 font-bold text-2xl animate-pulse ease-in-out">Loading...</div> }
      <section className="h-screen">
        <div className="h-full px-6 py-24 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between ">
            {/* Left column container with background*/}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ms-6 lg:w-5/12 bg-blue-200 py-10 px-10 rounded-xl  ">
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Required";
                  } else if (values.name.length < 4) {
                    errors.name = "Must be 4 characters or more";
                  }
                  if (!values.email) {  
                    errors.email = "Required";
                  } else if ( 
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = "Invalid email address";
                  } 
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password.length < 8) {
                    errors.password = "Must be 8 characters or more";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  dispatch(registerUser(values));
                }}
              >

                {( { errors, touched, values, handleChange, handleBlur, handleSubmit, }) => (


              <form onSubmit={handleSubmit}>
                {/* Username input */}
                <div className="relative mb-6" data-twe-input-wrapper-init="">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-blue-300 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </div>  
                {errors.name && touched.name && <p className="text-red-500">{errors.name}</p>}
                {/* Email input */}
                <div className="relative mb-6" data-twe-input-wrapper-init="">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full text-black rounded border-0 bg-blue-300 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                {/* Password input */}
                <div className="relative mb-6" data-twe-input-wrapper-init="">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-blue-300 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                    <input
                      className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                      type="checkbox"
                      defaultValue=""
                      id="exampleCheck3"
                      defaultChecked=""
                    />
                    <label
                      className="inline-block ps-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck3"
                    >
                      Remember me
                    </label>
                  </div>
                    <a
                      href="#!"
                      className="text-blue-500 font-bold font-size-15 hover:underline"
                    >
                      Terms and conditions
                    </a>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                >
                  Register
                </button>
              </form>

                )}

              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
