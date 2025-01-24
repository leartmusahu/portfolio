import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20 w-[100%]">
      <h2 className="my-10 text-center text-4xl">Get in touch!</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.email}</p>
      </div>
    </div>
  );
}
