"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const router = useRouter();
  // State variable to hold the error message
  const [error, setError] = useState("");
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must not exceed 20 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
        "Password must include at least one letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    marketing_accept: Yup.boolean(),
    term_accept: Yup.boolean().oneOf(
      [true],
      "Please accept terms to create an account."
    ),
  });

  // Submit handler for the form
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Check if accept terms is true
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        router.push("/login");
      }
      setError(" ");
    } catch (error) {
      console.log(error);
      setError("Failed to create user. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-300 to-blue-300">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Night"
            src="/photo.avif"
            width={1300}
            height={450}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Online Contact List Store
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Online contact list stores can be a convenient way to store and
              manage your contact information. They can also be a valuable tool
              for businesses that need to track customer contact information.
            </p>
          </div>
        </section>

        <main className="flex-1 items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Online Contact List Store
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Online contact list stores can be a convenient way to store and
                manage your contact information. They can also be a valuable
                tool for businesses that need to track customer contact
                information.
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center justify-center px-6 py-3 mt-4 bg-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>

              <span className="mx-2">Sign Up with Google</span>
            </Link>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign Up with
            </p>
            <Formik
              initialValues={{
                fname: "",
                lname: "",
                email: "",
                password: "",
                confirmPassword: "",
                marketing_accept: false,
                term_accept: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="FirstName"
                      name="fname"
                      className={`mt-1 w-full rounded-md pl-3 py-1.5 outline-none bg-white text-sm text-gray-700 shadow-sm
                        ${
                          errors.fname && touched.fname
                            ? "border-red-400"
                            : " border-gray-200"
                        }`}
                    />
                    <ErrorMessage
                      name="fname"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <Field
                      type="text"
                      id="LastName"
                      name="lname"
                      className={`mt-1 w-full rounded-md pl-3 py-1.5 outline-none bg-white text-sm text-gray-700 shadow-sm
                        ${
                          errors.lname && touched.lname
                            ? "border-red-400"
                            : " border-gray-200"
                        }`}
                    />
                    <ErrorMessage
                      name="lname"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <Field
                      type="email"
                      id="Email"
                      name="email"
                      className={`mt-1 w-full rounded-md pl-3 py-1.5 outline-none bg-white text-sm text-gray-700 shadow-sm
                        ${
                          errors.email && touched.email
                            ? "border-red-400"
                            : " border-gray-200"
                        }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <Field
                      type="password"
                      id="Password"
                      name="password"
                      className={`mt-1 w-full rounded-md pl-3 py-1.5 outline-none bg-white text-sm text-gray-700 shadow-sm
                        ${
                          errors.password && touched.password
                            ? "border-red-400"
                            : " border-gray-200"
                        }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password Confirmation
                    </label>

                    <Field
                      type="password"
                      id="PasswordConfirmation"
                      name="confirmPassword"
                      className={`mt-1 w-full rounded-md pl-3 py-1.5 outline-none bg-white text-sm text-gray-700 shadow-sm
                        ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-400"
                            : " border-gray-200"
                        }`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <Field
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-6 w-6 rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-sm text-gray-700">
                        I want to receive emails about events, product updates
                        and company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <Field
                        type="checkbox"
                        id="term_accept"
                        name="term_accept"
                        className="h-7 w-7 rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-sm text-gray-700">
                        By creating an account, you agree to our
                        <Link href="#" className="text-gray-700 underline">
                          terms and conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-gray-700 underline">
                          privacy policy{"   "}
                        </Link>
                        of online contact list store.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      type="submit"
                      className={`inline-block shrink-0 rounded-md border ${
                        !isSubmitting
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-300 bg-gray-300"
                      } px-12 py-3 text-sm font-medium text-white transition ${
                        !isSubmitting
                          ? "hover:bg-transparent hover:text-blue-600"
                          : ""
                      } focus:outline-none focus:ring ${
                        !isSubmitting ? "active:text-blue-500" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating..." : "Create an account"}
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link href="/login" className="text-gray-700 underline">
                        Log in
                      </Link>
                      .
                    </p>
                  </div>
                  {/* Display error message */}
                  {error && (
                    <ErrorMessage
                      name="term_accept"
                      component="div"
                      className="text-red-500 text-sm mt-2"
                    />
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
