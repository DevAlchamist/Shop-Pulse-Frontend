import { Link } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";
import profilePic from "../images/profilePic/Profile-Img.jpeg";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { UserCircleIcon } from "@heroicons/react/24/outline";

function ContactPage() {
  return (
    <>
    <Navbar>
    <div class="min-h-auto flex justify-center items-center">
   <div class=" shadow-xl max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="mountain" class="w-[250px] shadow-xl rounded-md border-2 border-gray-300" src={profilePic} />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-2xl font-semibold mb-2">Personal Info</h4>
            <p id="job" class="text-gray-800 mt-2"></p>
            <div class="flex mt-5">
               <p class="ml-3 text-gray-600">Name : Shubhanshu Nayak</p>
            </div>
            <div class="flex mt-5">
               <p class="ml-3 text-gray-600">Phone : +91 82877622653</p>
            </div>
            <div class="flex mt-5">
               <p class="ml-3 text-gray-600">Email - nayakshubhanshu69@gmail.com</p>
            </div>
            <div class="flex mt-5">
               <p class="ml-3 text-gray-600">Currently : Full Stack Developer</p>
            </div>
            <div class="flex mt-5">
               <p class="ml-3 text-gray-600">Eduction : Under-Graduate</p>
            </div>
            <ul class="flex flex-wrap justify-between items-center mt-3 sm:mt-0">
            <li>
              <Link
                to=""
                class=" px-2 text-sm text-blue-500 hover:underline md:mr-6 text-blue-600"
              >
                <IoLogoTwitter className="h-6 w-6 ml-2 "></IoLogoTwitter>
              </Link>
            </li>
            <li>
              <Link
                to=""
                class=" px-2 text-sm text-blue-500 hover:underline md:mr-6 text-blue-600"
                target="_blank"
              >
                <IoLogoLinkedin className="shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 h-6 w-6 ml-2 "></IoLogoLinkedin>
              </Link>
            </li>
            <li>
              <Link
                to=""
                target="_blank"
                class=" px-2 text-sm text-blue-500 hover:underline md:mr-6 text-blue-600"
              >
                <IoLogoGithub className="shadow-lg hover:shadow-xl hover:transform hover:scale-255 duration-300 h-6 w-6 ml-2 "></IoLogoGithub>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                class=" text-sm text-blue-500 text-blue-600"
              >
                <UserCircleIcon className="shadow-lg hover:shadow-xl hover:transform hover:scale-255 duration-300 ml-1 h-7 w-7 mb-0"></UserCircleIcon>
              </Link>
            </li>
          </ul>
         </div>
      </div>
   </div>
</div>
    </Navbar>
    </>
  );
}

export default ContactPage;
