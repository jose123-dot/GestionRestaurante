import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
const Login = () => {
  //eventos
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  //return
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="description"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
              <h1>Login</h1>
              {signinErrors.map((error, i) => (
                <div className="bg-red-500 p-2 text-white" key={i}>
                  {error}
                </div>
              ))}
              <form onSubmit={onSubmit}>
                {/*   <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    {...register("email", { require: true })}
                  />
                  {errors.email && (
                    <p className="text'red">Llene el Campo Email</p>
                  )}
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                  {/* errores de validacion */}
                </div>
                {/*   <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    {...register("password", { require: true })}
                  />
                  {errors.password && (
                    <p className="text'red">Por favor ponga la contraseña</p>
                  )}
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
