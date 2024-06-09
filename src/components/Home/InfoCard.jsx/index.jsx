import cn from "./style.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

export default function InfoCard({ title, desc, img, link }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={cn.body}>
      <div className={cn.text}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href="#">{link}</a>
      </div>
      <div
        className={cn.image}
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-anchor-placement="center-center"
      >
        <img src={img} alt={img} />
      </div>
    </div>
  );
}
