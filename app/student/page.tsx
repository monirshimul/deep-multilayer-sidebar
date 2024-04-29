"use client";
import StudentFormReusable from "./StudentFormReusable";
import StudentRegistrationForm from "./StudentRegistrationForm";

type Props = {};

const page = (props: Props) => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    type: "",
    image: null,
    educationLevel: "",
  };

  const values = {
    name: "Hamid",
    phone: "01915894565",
    email: "hamid@gmail.com",
    type: "student",
    image: null,
    educationLevel: "HSC",
  };
  const submitData = (valueOfUpdate: any) => {
    console.log("submitted", valueOfUpdate);
  };
  return (
    <div>
      {/* <SignUpForm /> */}
      <StudentFormReusable
        initialValues={values}
        submitButtonText="Update"
        imgSrc="/img/create.png"
        onSubmit={submitData}
      />
      <StudentRegistrationForm />
    </div>
  );
};

export default page;
