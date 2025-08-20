import React, { useRef, useState } from "react";
import Input from "../input";

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();

    window.emailjs
      .sendForm(
        "service_yfdkz8r",
        "template_opauxne",
        form.current,
        "5DFi3dkyGaqczi50H"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          setStatus("error");
          console.log(error);

          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <div className="relative">
      <form
        id="contact-form"
        action="/"
        method="post"
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-3"
      >
        <Input type="text" id="name" name="name" placeholder="Name" required />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          type="textarea"
          id="message"
          name="message"
          placeholder="Message"
          required
        />
        <button type="submit" className="p-2 rounded">
          Send
        </button>
      </form>

      {status && (
        <div
          className={`absolute top-0 left-0 right-0 p-3 mt-2 text-center rounded`}
        >
          {status === "success"
            ? "Message sent successfully!"
            : "Failed to send message. Try again later."}
        </div>
      )}
    </div>
  );
};

export default Form;
