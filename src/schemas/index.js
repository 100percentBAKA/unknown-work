import * as yup from "Yup"

export const REGISTER_SCHEMA = yup.object().shape({
    fullname: yup.string().required("Full Name is required"),
    email: yup.string().email("Invalid email").required("Email is required").matches(/^.+@.+\..+$/, "Email must be valid"),
    password: yup.string().required("Password is required"),
    dob: yup.date().nullable().required("Date of Birth is required").max(new Date(), "Date of Birth cannot be in the future"),
    country: yup.string().required("Selecting a country is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
    pincode: yup.string().required("Pin code is required")
});

export const LOGIN_SCHEMA = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
})
