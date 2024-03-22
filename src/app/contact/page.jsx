import Contactform from "@/components/Contactform";

const Contact = () => {
  // console.log('first')

  return (
    <div className="h-screen  bg-slate-400" id="contact">
      {/* <h3> Contact Us</h3> */}

      <div className="di" id="contact_body">
        <div className="title">
          <p className=" text-center mb-8 text-3xl md:text-3xl font-bold">
            Contact Us{" "}
          </p>
        </div>

        <Contactform />
      </div>
    </div>
  );
};

export default Contact;
