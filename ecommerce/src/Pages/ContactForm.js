import { useRef } from "react";
import React from "react";

const ContactForm = (props) => {
  const nameInputref = useRef();
  const emailInputref = useRef();
  const numberInputref = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const User = {
      name: nameInputref.current.value,
      email: emailInputref.current.value,
      number: numberInputref.current.value,
    };
    props.onAddingUser(User);
    nameInputref.current.value = "";
    emailInputref.current.value = "";
    numberInputref.current.value = "";
  };
  return (
    <div className="container d-flex justify-content-center">
      <form
        onSubmit={submitFormHandler}
        className="w-75 border rounded border-primary p-3 my-5"
      >
                <h2 className="text-center text-primary">Please Fill Details</h2>

        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label fw-bold fs-5">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Name"
            name="name"
            ref={nameInputref}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold fs-5">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            ref={emailInputref}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label fw-bold fs-5">
            Mobile Number:
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Enter Number"
            name="number"
            ref={numberInputref}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
