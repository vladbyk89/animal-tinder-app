import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";

interface RegisterType {
  fullName: string;
  email: string;
  userName: string;
  password: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // set data
    const response = await axios.post("api/users/add-user", data);

    console.log(response);
  };
  const onError = (data: any) => console.log(data);

  return (
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
          required
          {...register("email")}
        />
      </label>
      <label htmlFor="userName">
        User Name:{" "}
        <input
          type="text"
          id="userName"
          placeholder="Johnny123"
          required
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
      <button type="submit">Submit</button>
    </form>
  );
}
