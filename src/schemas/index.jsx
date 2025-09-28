import * as Yup from "yup";

export const contactSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your valid name"),
    email: Yup.string().max(35).required("Please enter your valid email"),
    message: Yup.string().min(15).max(250).required("Please write your message"),
});