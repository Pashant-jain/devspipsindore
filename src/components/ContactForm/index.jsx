import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import style from "./style.module.scss";
import SectionHeading from "../comman/sectionHeading";
import { Button, Form } from "react-bootstrap";
import Call from "/public/assets/icons/contact-call.svg";
import Fax from "/public/assets/icons/contact-fax.svg";
import Mail from "/public/assets/icons/contact-mail.svg";
import Image from "next/image";

const ContactForm = ({ sectionGap }) => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email sending function using EmailJS
  const sendEmail = async (data) => {

    // console.log("Data to send:", data);  // Log the data being sent
    const toastId = toast.loading("Sending your message, please wait...");
    try {
      await emailjs.send(
        'service_xj6vceg',
        'template_coobn8j',  // Use correct template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          whereFind: data.whereFind
        },
        '9RQeYekv_rL9W-Lmg'
      );
      toast.success("Message sent successfully", { id: toastId });
    } catch (error) {
      // console.error("EmailJS Error:", error);
      toast.error("Error sending message, try again later.", { id: toastId });
    }
  };
  

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    sendEmail(data);
  };

  return (
    <div
      className={`${style["contact_wrp"]} ${
        sectionGap === "top"
          ? "spacing_top"
          : sectionGap === "bottom"
          ? "spacing_bottom"
          : sectionGap === "both"
          ? "spacing_both"
          : ""
      }`}
    >
      <div className="container">
        <div className={style["contact_inner"]}>
          <div className={style["contact_dtl_wrp"]}>
            <SectionHeading title="Get in Touch" className="mb-5" />
            <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Input */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Name *"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </Form.Group>

              {/* Email Input */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Form.Group>

              {/* Phone Number Input */}
              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control
                  type="tel"
                  placeholder="Phone Number *"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
                )}
              </Form.Group>

              {/* Dropdown Select */}
              <Form.Group className="mb-3" controlId="formWhereFind">
                <Form.Select
                  {...register("whereFind", {
                    required: "Please select an option",
                  })}
                >
                  <option value="">How did you find us?</option>
                  <option value="Google">Google</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends/Relation">Friends/Relation</option>
                  <option value="Other">Other</option>
                </Form.Select>
                {errors.whereFind && (
                  <span className="text-danger">
                    {errors.whereFind.message}
                  </span>
                )}
              </Form.Group>

              {/* Message Textarea */}
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a Message here"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <span className="text-danger">{errors.message.message}</span>
                )}
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div className={style["contact_dtl"]}>
              <div className={style["single_contact"]}>
                <Image src={Call} alt="" width={24} height={24} />
                <div>
                  <h5 className="extrasmall-text text-uppercase">PHONE</h5>
                  <p className="extrasmall-text">+91 731 2499911</p>
                </div>
              </div>
              <div className={style["single_contact"]}>
                <Image src={Call} alt="" width={24} height={24} />
                <div>
                  <h5 className="extrasmall-text text-uppercase">Fax</h5>
                  <p className="extrasmall-text">
                  +91 731 2490114</p>
                </div>
              </div>
              <div className={style["single_contact"]}>
                <Image src={Call} alt="" width={24} height={24} />
                <div>
                  <h5 className="extrasmall-text text-uppercase">Email</h5>
                  <p className="extrasmall-text">info@spipsindore.ac.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className={style["contact_map"]}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=St.%20Paul%20Institute%20of%20Professional%20Studies%20Indore%2C%2091%2C%20Lalaram%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452001&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="St. Paul Institute of Professional Studies Indore"
              aria-label="St. Paul Institute of Professional Studies Indore"
              width="100%"
              height="700px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
