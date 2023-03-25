// import React from "react";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


// import { styles } from "../styles";

// const Footer = () => {
//   return (
//     <footer className={`${styles.section} bg-black-100 text-white`}>
//       <div className={`${styles.sectionContent} flex flex-col justify-center items-center md:flex-row md:justify-between`}>
//         <div className="text-center md:text-left">
//           <p className="text-secondary font-light mb-2">
//             “The best way to predict the future is to invent it.” - Alan Kay
//           </p>
//           <p className="text-sm font-medium">
//             Made with <span className="text-red-500">❤</span> by My Social Fox
//           </p>
//         </div>
//         <div className="flex mt-4 md:mt-0">
//           <a
//             href="https://github.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl mx-2 hover:text-blue-500 transition-colors duration-200"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://twitter.com/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl mx-2 hover:text-blue-400 transition-colors duration-200"
//           >
//             <FaTwitter />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/your-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl mx-2 hover:text-blue-600 transition-colors duration-200"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </footer>
    
//   );
// };

// export default Footer;
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Footer = () => {
  return (
    <div className={`mt-24 py-16 bg-tertiary`}>
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className='text-center'
      >
        <p className={`text-white text-xl font-medium`}>
          "Unlock the sly power of digital marketing with us, just like a fox"
        </p>
        <p className={`${styles.sectionSubText} mt-8`}>Connect with us</p>

        <div className={`mt-8 flex justify-center`}>
          <a
            href='https://instagram.com/mysocialfox.co?igshid=YmMyMTA2M2Y='
            target='_blank'
            rel='noopener noreferrer'
            className={`text-white mr-4`}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://www.linkedin.com/company/my-social-fox/'
            target='_blank'
            rel='noopener noreferrer'
            className={`text-white mr-4`}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100089731789738'
            target='_blank'
            rel='noopener noreferrer'
            className={`text-white mr-4`}
          >
            <FaFacebook size={24} />
          </a>
          <a
            href='https://twitter.com/mysocialfox_co?t=iJ_Az5YWtMfjYfky7D2HgQ&s=09'
            target='_blank'
            rel='noopener noreferrer'
            className={`text-white`}
          >
            <FaTwitter size={24} />
          </a>
          
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");

