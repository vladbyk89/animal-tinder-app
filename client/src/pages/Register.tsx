export default function Register() {
  return (
    <form>
      <label htmlFor="fullName">
        Full Name:{" "}
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          required
        />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="JohnDoe@gmail.com"
          required
        />
      </label>
      <label htmlFor="userName">
        User Name:{" "}
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Johnny123"
          required
        />
      </label>
      <label htmlFor="password">
        Password:{" "}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
