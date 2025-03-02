"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    logo: "",
    title: "Web development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt quaerat enim, sit rerum maiores ratione reiciendis.",
    href: "",
  },
  {
    num: "02",
    logo: "",
    title: "App development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt quaerat enim, sit rerum maiores ratione reiciendis.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[74vh] flex flex-col justify-center py-18 xl:py-0">
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center xl:gap-6 group border-t border-white/20 hover:border-accent transition-all duration-500"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-200">
                    {service.num}
                  </div>
                  <Link href={service.href} className="">
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
