import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/context";
import Showcase from "../../components/Home/Showcase";
import Spotlight from "../../components/Home/Spotlight";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <Showcase />
      <Spotlight />
      <div className="container">
        <img
          src="https://www.hackerrank.com/wp-content/uploads/2024/01/interview-2.png"
          alt=""
        />
      </div>
    </>
  );
}
