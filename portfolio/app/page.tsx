import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-2">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h2 xl:h1 mb-2 xl:mb-4">
              Hello I'm <br /> <span className="text-accent">Yogya Jain</span>
            </h1>
            <p className="text-sm xl:text-base x-w-[450px] mb-2 xl:mb-4 text-white/80">
              I am a student at NIT Trichy persuing B tech and enthrusiast in
              entreprenuorship
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-1"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border border-accent rounded-full flex justify-center items-center 
                   text-accent text-base hover:text-primary hover:bg-accent hover:transition-all duration:500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-1 xl:mb-8 relative">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
