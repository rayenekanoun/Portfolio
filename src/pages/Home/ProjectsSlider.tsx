import { Box } from "@chakra-ui/react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  { title: "Project 1", color: "red.100" },
  { title: "Project 2", color: "blue.400" },
  { title: "Project 3", color: "green.400" },
  { title: "Project 4", color: "purple.400" },
  { title: "Project 5", color: "red.400" },
  { title: "Project 6", color: "blue.400" },
  { title: "Project 7", color: "green.400" },
  { title: "Project 8", color: "purple.400" },
];

const ProjectSlider = ({ direction = "left" }) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["5%", "-20%"] : ["-5%", "20%"],
    { ease: easeInOut }
  );

  return (
    <Box
      fontSize="5xl"
      fontWeight="medium"
      width={["100%", "100%", "100%"]}
      textAlign="center"
      p={5}
    >
      <div ref={containerRef} className=" py-12">
        <h2 className="text-2xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-6xl text-white text-center mb-8">
          My Projects 🚀
        </h2>
        <div className="relative overflow-hidden w-full h-[300px]">
          <motion.div
            className="absolute flex gap-6 left-0"
            style={{ x }}
            animate={{ opacity: isInView ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
          >
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className={`
                      )
                        min-w-[280px] md:min-w-[320px] h-[180px] md:h-[200px]
                        ${project.color} rounded-lg shadow-xl
                        flex items-center justify-center
                        cursor-pointer backdrop-blur-sm
                      `}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <span className="text-white text-xl font-bold">
                  {project.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Box>
  );
};
export default ProjectSlider;
