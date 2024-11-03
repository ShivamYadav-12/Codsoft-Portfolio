import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="my-5 py-6">
        <div className="m-8 flex items-center justify-between gap-4 text-4xl">
            <a href="https://www.linkedin.com/in/shivam-yadav-72abaa266/"><FaLinkedin/></a>
            <a href="https://github.com/ShivamYadav-12"><FaGithub/></a>
            <a href="https://leetcode.com/u/shivam_yadav07/"><SiLeetcode/></a>
        </div>
    </nav>
  )
}

export default Navbar