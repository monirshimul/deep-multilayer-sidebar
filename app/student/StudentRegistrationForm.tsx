"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

interface PersonalInfoValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AcademicInfoValues {
  universityName: string;
  degreeProgram: string;
  graduationYear: string;
}

interface SignUpInfoValues {
  username: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const StudentRegistrationForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const personalInfoInitialValues: PersonalInfoValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const academicInfoInitialValues: AcademicInfoValues = {
    universityName: "",
    degreeProgram: "",
    graduationYear: "",
  };

  const signUpInfoInitialValues: SignUpInfoValues = {
    username: "",
    confirmPassword: "",
    agreeToTerms: false,
  };

  const personalInfoSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const academicInfoSchema = Yup.object().shape({
    universityName: Yup.string().required("University name is required"),
    degreeProgram: Yup.string().required("Degree program is required"),
    graduationYear: Yup.string().required("Graduation year is required"),
  });

  const signUpInfoSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    agreeToTerms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions")
      .required("You must agree to the terms and conditions"),
  });

  const totalSteps = 3;

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const calculateProgress = () => {
    return ((step - 1) / (totalSteps - 1)) * 100;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <Formik
          initialValues={{
            ...personalInfoInitialValues,
            ...academicInfoInitialValues,
            ...signUpInfoInitialValues,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={
            step === 1
              ? personalInfoSchema
              : step === 2
              ? academicInfoSchema
              : signUpInfoSchema
          }
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold">
                    Step 1: Personal Information
                  </h2>
                  <div>
                    <label htmlFor="firstName" className="block">
                      First Name
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full border-gray-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block">
                      Last Name
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full border-green-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="w-full border-blue-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="w-full border-yellow-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold">
                    Step 2: Academic Information
                  </h2>
                  <div>
                    <label htmlFor="universityName" className="block">
                      University Name
                    </label>
                    <Field
                      id="universityName"
                      name="universityName"
                      as="select"
                      className="w-full border-pink-300 border rounded-md px-4 py-2"
                    >
                      <option value="">Select University</option>
                      <option value="university1">University 1</option>
                      <option value="university2">University 2</option>
                    </Field>
                    <ErrorMessage
                      name="universityName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="degreeProgram" className="block">
                      Degree Program
                    </label>
                    <Field
                      id="degreeProgram"
                      name="degreeProgram"
                      as="select"
                      className="w-full border-indigo-300 border rounded-md px-4 py-2"
                    >
                      <option value="">Select Degree Program</option>
                      <option value="program1">Program 1</option>
                      <option value="program2">Program 2</option>
                    </Field>
                    <ErrorMessage
                      name="degreeProgram"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="graduationYear" className="block">
                      Graduation Year
                    </label>
                    <Field
                      id="graduationYear"
                      name="graduationYear"
                      type="text"
                      className="w-full border-purple-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="graduationYear"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>
              )}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold">
                    Step 3: Sign-Up Information
                  </h2>
                  <div>
                    <label htmlFor="username" className="block">
                      Username
                    </label>
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      className="w-full border-cyan-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block">
                      Confirm Password
                    </label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="w-full border-lime-300 border rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="agreeToTerms">
                      Agree to Terms and Conditions
                    </label>
                  </div>
                  <ErrorMessage
                    name="agreeToTerms"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              )}
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                  >
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2 relative max-w-md rounded-full overflow-hidden bg-gray-200">
            <div
              className="absolute h-full bg-blue-500"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index < step ? "bg-blue-500" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
