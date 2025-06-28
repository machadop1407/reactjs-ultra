import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Form() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required."),
    email: yup.string().required("Email is Required.").email("Invalid email."),
    age: yup
      .number("Please add a number")
      .required("Age is Required.")
      .min(18, "You must be at least 18.")
      .max(65, "You must be younger then 65."),
    isMarried: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h3>My Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p style={{ color: "red" }}> {errors.name.message}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p style={{ color: "red" }}> {errors.email.message}</p>
          )}
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            placeholder="Enter your Age"
            {...register("age")}
          />
          {errors.age && <p style={{ color: "red" }}> {errors.age.message}</p>}
        </div>
        <div>
          <label>Are You Married:</label>
          <input type="checkbox" {...register("isMarried")} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
