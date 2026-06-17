import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitting data....");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }

  return (
    <>
      <h1>React Hook Form</h1>
      <p>Open inspect - console for output</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              required: "First Name is required",
              minLength: { value: 3, message: "minimum required length is 3" },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label>Middle Name:</label>
          <input
            className={errors.MiddleName ? "input-error" : ""}
            type="text"
            {...register("MiddleName", {
              required: "First Name is required",
              minLength: { value: 3, message: "minimum required length is 3" },
            })}
          />
          {errors.MiddleName && (
            <p className="error-msg">{errors.MiddleName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label>Last Name:</label>
          <input
            className={errors.LastName ? "input-error" : ""}
            type="text"
            {...register("LastName", {
              required: "First Name is required",
              minLength: { value: 3, message: "minimum required length is 3" },
            })}
          />
          {errors.LastName && (
            <p className="error-msg">{errors.LastName.message}</p>
          )}
        </div>
        <br />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "submitting" : "submit"}
        />
      </form>
    </>
  );
}

export default App;
