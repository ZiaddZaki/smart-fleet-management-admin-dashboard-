import React from "react";
import * as Yup from "yup";
import DynamicForm from "../DynamicForm/DynamicForm";
import axios from "axios";
import Popup from "../Popup/Popup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  nationalId: Yup.string()
    .matches(/^\d+$/, "Please enter a valid national ID")
    .required("National ID is required"),
  // role: Yup.string().oneOf(["Manager"]).required(),
  address: Yup.object({
    street: Yup.string().required("Street is required"),
    area: Yup.string().required("Area is required"),
    governorate: Yup.string().required("Governorate is required"),
    country: Yup.string().required("Country is required"),
  }),
});

const fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter phone number",
  },

  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "Enter date of birth",
  },
  {
    name: "nationalId",
    label: "National ID",
    type: "text",
    placeholder: "Enter national ID",
  },

  {
    name: "address.street",
    label: "Street",
    type: "text",
    placeholder: "Enter street address",
  },
  {
    name: "address.area",
    label: "Area",
    type: "text",
    placeholder: "Enter area address",
  },
  {
    name: "address.governorate",
    label: "Governorate",
    type: "text",
    placeholder: "Enter governorate address",
  },
  {
    name: "address.country",
    label: "Country",
    type: "text",
    placeholder: "Enter country address",
  },
];
const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: "",
  nationalId: "",
  // role: "Manager",

  address: {
    street: "",
    area: "",
    governorate: "",
    country: "",
  },
};

export default function MecghanicAdd() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [resData, setresData] = React.useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  async function onSubmit(data) {
    setIsLoading(true);
    const finalData = {
      ...data,
      role: "mechanic",
    };
    try {
      const res = await axios.post(
        "https://veemanage.runasp.net/api/User/add",
        finalData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("Login Successful:", res.data);
      const resEmail = res?.data?.email;
      const resPassword = res?.data?.password;
      setresData({
        email: resEmail,
        password: resPassword,
      });
      setIsPopupOpen(true);
    } catch (error) {
      // console.error("Login Error:", error);
      setError(error?.response?.data?.message||"Something went wrong");
    }

    setIsLoading(false);
  }
  return (
    <>
      <DynamicForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        title="Add Mechanic"
        defaultValues={defaultValues}
        back_link="/users/mechanics"
        error={error}
        isLoading={isLoading}
      />
      {isPopupOpen && (
        <Popup
          isLoading={isLoading}
          link={"/users/mechanics"}
          email={resData.email}
          password={resData.password}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}
