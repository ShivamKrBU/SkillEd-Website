import React from "react";

import { FaFacebookF } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-12 px-4">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-gray-300 rounded-lg">
          <div className="flex justify-items-center items-center flex-col mt-7">
            <h1 className="text-2xl font-extrabold mb-4 text-blue-900">
              SkillEd
            </h1>
            <p className="text-sm text-center pl-5 pr-5">
              Build career and gain skills with courses, certificates, and
              degrees online from the world's best institutions and mentors.
            </p>
            <div className="flex gap-3 pt-4 mb-10 cursor-pointer">
              <FaFacebookF className="text-2xl" />
              <TbBrandPicsart className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
              <FaXTwitter className="text-2xl" />
            </div>
          </div>

          <div className="flex justify-center flex-col pl-5 gap-1">
            <h3 className="text-lg font-bold mb-4 ">Category</h3>
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
            <p>Customer Support</p>
            <p>For Business</p>
          </div>

          <div className="flex justify-center flex-col pl-5 gap-1">
            <h3 className="text-lg font-bold mb-4 ">Useful Links</h3>
            <p>About Us</p>
            <p>Refer A Friend</p>
            <p>Scholarship</p>
            <p>Marketing</p>
            <p>Free Course</p>
          </div>

          <div className="flex justify-center flex-col mb-7 pl-5 gap-1">
            <h3 className="text-lg font-bold mb-4 ">Contact Us</h3>
            <p>skillEd@gmail.com</p>
            <p>shivamkrbu005@gmail.com</p>
            <p>9149360694</p>
            <p>8126569776</p>
          </div>
        </div>

        <div className="mt-12 text-center gap-1">
          <h2 className="text-2xl font-extrabold mb-4">Contact Info</h2>
          <div className="flex flex-col items-center justify-center space-y-3">
            <p>
              Email:
              <a
                href="mailto:rohitpatel843332@gmail.com"
                className="text-blue-700 font-semibold cursor-pointer px-1"
              >
                SkillEd@gmail.com
              </a>
            </p>
            <p>
              Whatsapp:
              <a
                href="tel:+919149360694"
                className="text-blue-700 font-semibold px-1"
              >
                9149360694
              </a>
            </p>
            <p>
              Website:
              <a
                href="#"
                className="text-blue-700 font-semibold px-1"
              >
                example.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-lg font-bold mb-4">Visit My Other Accounts</h2>
          <p>
            <a href="/" className="text-blue-700 font-semibold cursor-pointer">
              Facebook
            </a>{" "}
            <a href="/" className="text-blue-700 font-semibold">
              Linkedin
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <p>Follow me and keep in touch for more stunning visuals.</p>
          <p className="font-bold">Thank you</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
