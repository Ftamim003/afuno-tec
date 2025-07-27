import React from "react";
import { BsTelephone } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-green-600 text-white py-6 px-4 flex flex-col leading-6 md:flex-row items-center justify-center gap-4">
        <h2 className="text-lg font-semibold uppercase md:px-16 ">
          Sign Up For Our Newsletter
        </h2>
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2  text-black w-full md:w-[300px] bg-white"
          />
          <button className=" text-white border bg-green px-6 py-2 leading-6 font-semibold">
            Submit
          </button>
        </div>
      </div>
      <footer className="bg-[#333] text-white text-sm mx-auto ">
        {/* Main Footer Content */}
        <div className="max-w-7xl p-2 mx-auto text-white/80">
          <div className="container py-10 grid grid-cols-1 md:grid-cols-5 gap-18">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-4 uppercase text-base">All Categories
                <hr className="w-9 mt-1 border-red-700"/>
              </h3>
                
              <ul className="space-y-1 list-disc leading-8">
                <li>Hotels</li>
                <li>Activities</li>
                <li>TOURS & ECO TOURISM</li>
                <li>Events and tickets</li>
                <li>Business and meetings</li>
                <li>Nosy be</li>
                <li>Travel</li>
                <li>Corporate deal</li>
                <li>Airport & VIP pick up</li>
                <li>Team building</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="md:w-72">
              <h3 className="font-semibold mb-4 uppercase text-base">
                Additional Information
                  <hr className="w-9 mt-1 border-red-700"/>
              </h3>
              <ul className="space-y-1 list-disc leading-8">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Why are we the best?</li>
                <li>FAQs</li>
                <li>Video Tutorials</li>
                <li>
                  <a href="https://deal.mu" className="underline">
                    deal.mu
                  </a>{" "}
                  by baodeal
                </li>
                <li>Corporate Deals</li>
                <li>Madagascar blogs</li>
                <li>Influencer Program</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-4 uppercase text-base">
                Legal Information
                  <hr className="w-9 mt-1 border-red-700"/>
              </h3>
              <ul className="space-y-1 list-disc leading-8">
                <li>Terms & Conditions</li> 
                <li>Cookie Policy</li>
                <li>Cancellation policy</li>
                <li>Cyclone Protocol</li>
                <li>Privacy</li>
              </ul>
            </div>

            {/* Column 4: Contact Form */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 uppercase text-base">
                Send Us A Message
                <hr className="w-9 mt-1 border-red-700"/>
              </h3>
              <p className="text-gray-300 mb-4">
                Feel free to contact us by phone, email or by our contact form
              </p>
              <form className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full px-4 py-2 bg-white text-[#404040]"
                />
                <input
                  type="text"
                  placeholder="Your Telephone"
                  className="w-full px-4 py-2 bg-white text-[#404040]"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full px-4 py-2 bg-white text-[#404040]"
                />
                <textarea
                  placeholder="Type your message here...*"
                  className="w-full px-4 bg-white py-2 text-[#404040] h-24"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2  text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
           <h2 className="uppercase text-base">Contact Details <hr  className="border-red-700 w-9 mt-1 mb-3"/></h2>
          <div className="bg-[#444] container px-4 py-10 max-w-2xl gap-8 ">
            <div className="flex flex-col md:flex-row justify-between gap-8  mx-auto">
              {/* Address and contact */}
              <div className="text-sm space-y-2 max-w-lg text-white/80">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 w-5 h-5 mb-3" />
                  <p className="text-sm ml-3">
                    The Octopus Building, Royal Road, Pointe aux Canonniers,
                    30510
                  </p>
                </div>
                <p className="flex gap-1 text-white/80"> <BsTelephone className="w-5 h-5"/> <strong className="ml-4">Tel (business hours):</strong> 269 1500 </p>
                <p className="ml-10 text-white/80"> <strong>Tel (Hotline):</strong> 5256 6138</p>
                <p className="ml-10 "><strong className="text-white/80">Monday - Friday: 08h00</strong> - 20h00</p> 
                <p className="ml-10 text-white/80"> <strong>Saturday:</strong> 08h00 - 16h00</p>
                <p className="ml-10 text-white/80"><strong>Sunday:</strong> 08h00 - 13h00 (Office Closed)</p>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-5 h-5 " /> <span className="ml-4">info@deals.mu</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-10 mb-10 border-[#515151]" />
          {/* Copyright */}
          <div className="text-center text-xs py-4 text-gray-300 md:flex justify-between">
            <p className="">
              © 2025 Deals.mu, a Registered Tour Operator (No. 15288), Trading
              as Deals Simply the Best Ltd
            </p>

            {/* Social Links */}
            <div className="flex text-sm items-center justify-center gap-3 ">
              <p >Stay connected</p>
              <div className="flex items-center gap-5  ">
                <FaFacebookF className="w-5 h-5 " />
                <FaYoutube className="w-6 h-6"/>
                <FaInstagram className="w-7 h-7"/>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
      </footer>
    </div>
  );
}
