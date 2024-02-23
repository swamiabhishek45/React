import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); // simulating network delay
    let r = await fetch("https://localhost:3000/", { method: "POST" });
    let res = await r.text();
    console.log(data, res);
  };
  return (
    <>
      {isSubmitting && <p>Loading...</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
        <input
          type="text"
          placeholder="Enter your name"
          {...register("username", {
            required: true,
            minLength: {
              value: 3,
              message: "Min length must be 3",
            },
          })}
        />
        <br />
        <input
          className="mt-2"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Passlength must be 8",
            },
          })}
        />
        {errors.password && (
          <p className="bg-red-600">{errors.password.message} </p>
        )}
        <br />
        <input
          className="bg-blue-500 rounded-md p-2 mt-2"
          disabled={isSubmitting}
          type="submit"
          value="submit"
        />
      </form>
    </>
  );
}

export default App;
