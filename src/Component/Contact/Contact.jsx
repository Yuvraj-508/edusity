import React,{useState} from "react";
import "./Contact.css";
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phn_icon from '../../assets/edusity_assets/phone-icon.png'
import loca_icon from '../../assets/edusity_assets/location-icon.png'
import white_arr from '../../assets/edusity_assets/white-arrow.png'



function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "854a4f90-0e72-4b3e-b750-e6fa8e50551f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
          <li> <img src={phn_icon} alt="" /> +1 123-456-7890</li>
          <li> <img src={loca_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">
            Your Name
          </label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label htmlFor="">
            Phone Number
          </label>
          <input type="tel" name="phone" placeholder="Enter your nmobile number" required />
           <label htmlFor="">
           Write your Message
          </label>
          <textarea name="message"  rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn bg-white text-[#212121] text-[16px] py-3 px-5 rounded-4xl cursor-pointer border-0 outline-0 inline-flex items-center justify-center gap-2">Submit <img src={white_arr} alt="" className="w-5"/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
