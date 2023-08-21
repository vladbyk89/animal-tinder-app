export default function Register() {
  return (
    <main>
      <form>
        <label htmlFor="fName">
          Full Name:
          <input
            type="text"
            id="fName"
            name="fName"
            placeholder="John Doe"
            required
          />
        </label>
        <label htmlFor="Email">
          Email:
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="John Doe"
            required
          />
        </label>
        <label htmlFor="userName">
          User Name:
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="John Doe"
            required
          />
        </label>
        <label htmlFor="password">
          Passwrod:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="John Doe"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
