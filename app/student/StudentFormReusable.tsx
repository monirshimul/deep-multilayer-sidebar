"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa6";
import * as Yup from "yup";
import useQueryParams from "../hooks/useQueryParams";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(
      /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
      "Phone number must be valid number"
    )
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  type: Yup.string().required("Type is required"),
  image: Yup.mixed().required("Image is required"),
  educationLevel: Yup.string().required("Education level is required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  type: "",
  image: null,
  educationLevel: "",
};

interface StudentFormProps {
  initialValues: any;
  onSubmit: (values: any) => void;
  submitButtonText: string;
  imgSrc?: string;
}

const StudentFormReusable: React.FC<StudentFormProps> = ({
  initialValues,
  onSubmit,
  submitButtonText,
  imgSrc,
}) => {
  const [submittedData, setSubmittedData] = useState<
    typeof initialValues | null
  >(null);
  const [queryParams, updateQueryParams, resetQueryParams] = useQueryParams();
  console.log(queryParams);
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    updateQueryParams(values);
    onSubmit(values);
    setSubmittedData(values);
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: string | Blob | File | undefined,
      shouldValidate?: boolean | undefined
    ) => void
  ) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result?.toString();
        setFieldValue("image", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`p-5 border border-dashed rounded-lg flex ${
        imgSrc ? "container mx-auto flex-row" : ""
      } justify-around items-center`}
    >
      {imgSrc && (
        <div className="">
          <Image src={imgSrc} alt="student" width={450} height={200} />
        </div>
      )}
      <div className="flex-1 max-w-2xl p-8 bg-white rounded-lg shadow-md ">
        <h1 className="text-3xl flex justify-center items-center mb-4 text-neutral-500 font-catamaran font-light text-center gap-2">
          <FaWpforms className="text-teal-500" /> Student {submitButtonText}{" "}
          Form
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="name">Student Name</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border rounded-md px-4 py-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full border rounded-md px-4 py-2"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border rounded-md px-4 py-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label htmlFor="type">Type</label>
                <Field
                  as="select"
                  id="type"
                  name="type"
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select Type</option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label htmlFor="image">Image Upload</label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  className="w-full border rounded-md px-4 py-2"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div>
                <label htmlFor="educationLevel">Education Level</label>
                <Field
                  as="select"
                  id="educationLevel"
                  name="educationLevel"
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select Education Level</option>
                  <option value="HSC">HSC</option>
                  <option value="SSC">SSC</option>
                </Field>
                <ErrorMessage
                  name="educationLevel"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md text-white font-bold py-2 px-4 rounded-lg"
              >
                {submitButtonText}
              </button>
            </Form>
          )}
        </Formik>
        {/* {submittedData && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Submitted Data</h2>
            <div className="max-w-md mx-auto border border-gray-300 rounded-md p-4 flex">
              <img
                src={submittedData.image}
                alt="User"
                className="rounded-md w-1/3"
              />
              <div className="w-2/3 ml-4">
                <h3 className="text-lg font-semibold mb-2">
                  Name: {submittedData.name}
                </h3>
                <p>Email: {submittedData.email}</p>
                <p>Phone: {submittedData.phone}</p>
                <p>Type: {submittedData.type}</p>
                <p>Education Level: {submittedData.educationLevel}</p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default StudentFormReusable;
