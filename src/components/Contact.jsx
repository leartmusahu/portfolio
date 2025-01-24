import { CONTACT } from "../constants";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="border-t border-stone-900 pb-20 w-full">
      <h2 className="my-10 text-center text-4xl font-bold">Get in touch!</h2>
      <div className="text-center tracking-tighter">
        <p className="text-lg font-medium">{CONTACT.phoneNo}</p>
        <p className="text-lg font-medium">{CONTACT.email}</p>
      </div>

      <ToastContainer />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-4 max-w-md p-5 rounded-lg shadow-md"
      >
        <label className="block mb-2 text-sm font-semibold text-gray-700 color-black">
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
  );
}
