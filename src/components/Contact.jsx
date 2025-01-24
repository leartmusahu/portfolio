import { CONTACT } from "../constants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wa5w5tn", "template_17ep4h6", form.current, {
        publicKey: "AODw8vISJrgJ1EOTk",
      })
      .then(
        () => {
          toast.success("Your message has been sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send your message. Please try again.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="border-t border-stone-900 pb-20 w-full">
        <motion.h2
          className="my-10 text-center text-4xl font-bold"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          Get in touch!
        </motion.h2>

        <div className="text-center tracking-tighter">
          <motion.p
            className="text-lg font-medium"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.p
            className="text-lg font-medium"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {CONTACT.email}
          </motion.p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mt-4 max-w-md p-5 rounded-lg shadow-md"
        >
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-neutral-600 focus:ring-purple-900"
            placeholder="Enter your name"
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-900"
            placeholder="Enter your email"
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-neutral-600 focus:ring-purple-900"
            placeholder="Write your message"
            rows="4"
          />
          <input
            type="submit"
            value="Send"
            className="w-full py-2 text-white bg-transparent border-white border-2 rounded-lg hover:bg-white hover:text-black transition duration-200 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
