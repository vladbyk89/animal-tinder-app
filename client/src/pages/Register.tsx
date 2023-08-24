import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface RegisterType {
  fullName: string;
  email: string;
  userName: string;
  password: string;
}

export default function Register() {
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      // set data.
      const response = await axios
        .post("api/users/add-user", data)
        .then((res) => res)
        .catch((err) => {
          setIsError(true);
          return err;
        });

      console.log(response);

      // reset();
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const onError = (data: any) => console.log("check 1", data);

  return (
    <div className="registerForm">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="fullName">
          Full Name:{" "}
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            required
            {...register("fullName")}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            placeholder="JohnDoe@gmail.com"
            {...register("email")}
          />
        </label>
        <label htmlFor="userName">
          User Name:{" "}
          <input
            type="text"
            id="userName"
            placeholder="Johnny123"
            {...register("userName")}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            placeholder="********"
            required
            {...register("password")}
          />
        </label>
        {isError && (
          <p style={{ color: "red", fontSize: ".8rem" }}>
            Error submiting form. Please submit again.
          </p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
