"use client";
import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
const Contact = () => {
  // console.log('first')

  const [nameformvalidate, setnameformvalidate] = useState(false);
  const [emailformvalidate, setemailformvalidate] = useState(false);
  const [msgformvalidate, setmsgformvalidate] = useState(false);
  const [errrorMsg, seterrorMsg] = useState("");
  const [FormName, setFormName] = useState("");
  const [FormEmail, setFormEmail] = useState("");
  const [FormMsg, setFormMsg] = useState("");

  const FormSubmmitHandler = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(FormEmail);

    const contactData = {
      name: FormName,
      emal: FormEmail,
      msg: FormMsg,
    };

    if (FormName.trim().length <= 2) {
      alert("Name should be at least 3 characters long");
      setnameformvalidate(true);
    } else if (!isValidEmail) {
      alert("Please enter a valid email address");
    } else if (FormMsg.length <= 10) {
      alert("Message should be at least 10 characters long");
    } else {
      alert(" data has been send ");
    }
  };

  return (
    <div className="h-screen  bg-slate-400" id="contact">
      {/* <h3> Contact Us</h3> */}

      <div className="di" id="contact_body">
        <div className="title">
          <p className=" text-center mb-8 text-3xl md:text-3xl font-bold">
            Contact Us{" "}
          </p>
        </div>
        <div className="  border  w-11/12 md:w-4/6 lg:w-3/6 text-center pt-8  m-auto bg-slate-200 rounded-2xl">
          <form
            action=""
            className=" p-3 md:p-5 m-auto"
            onSubmit={FormSubmmitHandler}
          >
            <div className="text-left">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your name{" "}
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div className="text-left mt-4">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your email{" "}
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>
            <div className="text-left mt-4">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Message"
                required
                onChange={(e) => setFormMsg(e.target.value)}
              ></textarea>
            </div>
            <div className="submmit mb-5 mt-5">
              <button
                type="submmit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-9/12 md:w-2/6"
              >
                Submmit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
