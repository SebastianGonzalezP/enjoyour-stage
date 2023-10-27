//
import TeamSlider from '../../components/TeamSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Team = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 items-center justify-center">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="h2"
            >
              Nuestro <span className="text-yellow-300">Equipo</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit={'hidden'}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Todos los integrantes de este gran proyecto!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit={'hidden'}
            className="w-full xl:max-w-[65%] flex place-items-end"
          >
            {/* slider */}
            <TeamSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
