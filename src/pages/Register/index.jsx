import { Link, useNavigate } from "react-router-dom";
import cn from "./style.module.css";
import { useForm } from "react-hook-form";
import usePost from "../../utils/queries/usePost";
import { toast } from "react-toastify";
export default function Registration() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = usePost("/users");

  const onSubmit = (data) => {
    mutation.mutate(
      { ...data, role: "user" },
      {
        onSuccess: () => {
          toast.success("Successfully Registered");
          nav("/login");
        },
      }
    );
  };

  return (
    <div className={cn.body}>
      <img
        src="https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg"
        alt=""
      />
      <div>
        <h1>For Developers</h1>
        <p>Practice coding, prepare for interviews, and get hired.</p>
      </div>
      <div className={cn.form}>
        <div className={cn.labels}>
          <h2 className={cn.active}>Sign up</h2>
          <h2>
            <Link to={"/login"}>Log in</Link>
          </h2>
        </div>
        <div className={cn.form_fields}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn.input_field}>
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="First & Last name"
              />
            </div>
            {errors.name && (
              <span className={cn.error}>
                <i class="fa-solid fa-circle-info"></i>This field is required
              </span>
            )}
            <div className={cn.input_field}>
              <i className="fa-regular fa-envelope"></i>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <span className={cn.error}>
                <i class="fa-solid fa-circle-info"></i> This field is required
              </span>
            )}
            <div className={cn.input_field}>
              <i className="fa-solid fa-lock"></i>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Your password"
              />
            </div>
            {errors.password && (
              <span className={cn.error}>
                <i class="fa-solid fa-circle-info"></i>This field is required
              </span>
            )}
            <span>
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">
                I agree to HackerRank's{" "}
                <a href="https://www.hackerrank.com/terms-of-service/">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="https://www.hackerrank.com/privacy/">
                  Privacy Policy.
                </a>
              </label>
            </span>
            <button>Create An Account</button>
          </form>
          <div className={cn.connect}>
            <span className={cn.connect_line}></span>
            <p>or connect with</p>
            <span className={cn.connect_line}></span>
          </div>
          <div className={cn.ikons}>
            <a href="">
              <img
                src="https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg"
                alt=""
              />
            </a>
            <div className={cn.h_line}></div>
            <a href="">
              <img
                src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg"
                alt=""
              />
            </a>
            <div className={cn.h_line}></div>
            <a href="">
              <img
                src="https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg"
                alt=""
              />
            </a>
            <div className={cn.h_line}></div>
            <a href="">
              <img
                src="https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
