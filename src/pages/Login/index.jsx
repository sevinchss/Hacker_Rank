import { Link } from "react-router-dom";
import cn from "./style.module.css";
import useGET from "../../utils/queries/useGet";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/context";
import { toast } from "react-toastify";
export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();

  const { data: users } = useGET(["users"], "/users");
  const { setUser } = useContext(UserContext);
  const onSubmit = (data) => {
    if (data?.name == "alex" && data?.password == "root") {
      toast.success("Welcome Admin");
      setUser({ name: "alex", password: "root", role: "admin" });
      nav("/");
    } else {
      const logedIn = users.filter(
        (u) => u.name == data?.name && u.password == data?.password
      );
      if (logedIn[0]) {
        setUser(logedIn[0]);
        toast.success("Welcome");
        nav("/");
      }
    }
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
          <h2>
            <Link to={"/registration"}>Sign up</Link>
          </h2>
          <h2 className={cn.active}>Log in</h2>
        </div>
        <div className={cn.form_fields}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn.input_field}>
              <i class="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="First & Last name"
                {...register("name", { required: true })}
              />
            </div>

            <div className={cn.input_field}>
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Your password"
                {...register("password", { required: true })}
              />
            </div>
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
