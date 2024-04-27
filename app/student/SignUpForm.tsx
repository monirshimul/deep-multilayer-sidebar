"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  programmingLanguages: string[];
}

const SignUpFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  programmingLanguages: Yup.array().min(
    1,
    "Select at least one programming language"
  ),
});

const SignUpForm: React.FC = () => {
  const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    programmingLanguages: [],
  };

  const handleSubmit = (values: SignUpFormValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpFormSchema}
      onSubmit={handleSubmit}
    >
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Form className="w-9/12 md:w-7/12 lg:w-4/12 2xl:w-3/12 mx-auto border p-10 border-dashed rounded-xl shadow-sm">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              type="text"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <div className="mb-4">
            <p className="mb-1">Programming Languages</p>
            <label className="inline-flex items-center">
              <Field
                type="checkbox"
                name="programmingLanguages"
                value="java"
                className="mr-2"
              />
              Java
            </label>
            <label className="inline-flex items-center ml-4">
              <Field
                type="checkbox"
                name="programmingLanguages"
                value="javascript"
                className="mr-2"
              />
              JavaScript
            </label>
            <label className="inline-flex items-center ml-4">
              <Field
                type="checkbox"
                name="programmingLanguages"
                value="php"
                className="mr-2"
              />
              PHP
            </label>
            <label className="inline-flex items-center ml-4">
              <Field
                type="checkbox"
                name="programmingLanguages"
                value="csharp"
                className="mr-2"
              />
              C#
            </label>
            <label className="inline-flex items-center ml-4">
              <Field
                type="checkbox"
                name="programmingLanguages"
                value="python"
                className="mr-2"
              />
              Python
            </label>
            <ErrorMessage
              name="programmingLanguages"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
          >
            Sign Up
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default SignUpForm;
