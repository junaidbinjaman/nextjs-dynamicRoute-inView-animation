import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { RoutePatch } from "../pages/_app";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { y: 200, opacity: 0, x: 0 },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 100, delay: 0.5 },
  },
};

const Country = (props) => {
  const { name, flag, region, subregion, capital, area, population } =
    props.country;
  const [route, setRoute] = useContext(RoutePatch);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }

    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <Link href={`country/${name}`}>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={animation}
        onClick={() => {
          setRoute(name);
        }}
      >
        <div className="scale transition delay-50 duration-300 ease-in-out hover:shadow-lg cursor-pointer  shadow-md my-10 flex flex-col justify-center items-center w-100">
          <Image src={flag} width={300} height={200} alt="" />
          <h3 className="font-bold my-3 text-2xl">{name}</h3>
          <div className="flex justify-between w-full py-2 font-semibold px-4 mb-5 bg-gray-100">
            <p>{capital}</p>
            <p>{area}</p>
          </div>
          <div className="flex justify-between w-full py-2 font-semibold px-4 mb-2 bg-gray-100 ">
            <p>{population}</p>
            <p>{region}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Country;
