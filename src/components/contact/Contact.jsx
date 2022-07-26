import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useAppContext } from "../../context";
import Pdf from "../../Resume.pdf";
import { toast } from "react-toastify";

import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState();

  const formRef = useRef();
  const {
    state: { darkMode },
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please fill all the details", {
        position: "bottom-right",
      });
    } else {
      setButtonDisabled(true);
      emailjs
        .sendForm(
          "service_r5ljzi8",
          "template_rszmfch",
          formRef.current,
          "o1efdj1s7j19T1Gw_"
        )
        .then(
          () => {
            toast.success(
              "The email sent successfully, I'll contact you soon!",
              {
                position: "bottom-right",
              }
            );
            setButtonDisabled(false);
          },
          (error) => {
            console.log(error.text);
            setButtonDisabled(false);
          }
        );
    }
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <AiOutlineWhatsApp className="c-icon" /> +972 50 592 0062
            </div>
            <div className="c-info-item">
              <AiOutlineMail className="c-icon" />
              galmalach2@gmail.com{" "}
            </div>
            <div className="c-info-item">
              <AiOutlineLinkedin className="c-icon" />{" "}
              <a
                href="https://www.linkedin.com/in/gal-malach/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: darkMode ? "white" : "#222",
                }}
              >
                My Linkedin
              </a>
            </div>
            <div className="c-info-item">
              <AiFillGithub className="c-icon" />{" "}
              <a
                href="https://github.com/GalMalach08"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: darkMode ? "white" : "#222",
                }}
              >
                My GitHub
              </a>
            </div>
            <div className="c-info-item">
              <CgFileDocument className="c-icon" />{" "}
              <a
                href={Pdf}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: darkMode ? "white" : "#222",
                }}
              >
                My CV{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to send a quick email ?</b> Get in touch. I am always
            available and answer quickly.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              name="user_name"
            />

            <input
              style={{ backgroundColor: darkMode && "#333" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button
              disabled={buttonDisabled}
              style={{
                backgroundColor:
                  !name || !email || !subject || !message || buttonDisabled
                    ? "#bee2bd"
                    : "#59b256",
                cursor:
                  !name || !email || !subject || !message || buttonDisabled
                    ? "auto"
                    : "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
