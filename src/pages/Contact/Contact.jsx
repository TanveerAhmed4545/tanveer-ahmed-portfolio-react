import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { BsSendFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SectionTitle from "../../components/SectionTitle";
// ..
AOS.init();

const Contact = () => {
  const customIcon = L.icon({
    iconUrl: "https://i.ibb.co/1z4RGm6/placeholder-684908-removebg-preview.png",
    iconSize: [32, 32],
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ca9tzg5", "template_xaaoyr4", form.current, {
        publicKey: "AMEBdQFqKht7XftCD",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          toast.success("Mail sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("This didn't work.");
        }
      );
  };

  return (
    <section
      className="py-5 px-[2.5%]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Helmet>
        <title>Tanveer Ahmed || Contact</title>
      </Helmet>
      <div className="flex justify-between items-center text-3xl md:text-4xl font-semibold pb-3 text-primary border-b-2 border-solid border-[#b5c1fe] ">
        <h1 className="uppercase">Contact_</h1>
        <HiMail />
      </div>
      <div className="py-5 min-h-[calc(100vh-11rem)]  flex flex-col justify-center">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <SectionTitle title={"Mail"} />
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  className="input input-bordered w-full mb-5"
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                />
                <input
                  className="input input-bordered w-full mb-5"
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="textarea textarea-bordered textarea-md w-full mb-5"
                  name="message"
                  required
                />
                <button
                  className="btn rounded-md bg-[#ECEFFE] flex gap-3"
                  type="submit"
                  value="Send"
                >
                  Send <BsSendFill className="text-primary" />
                </button>
              </form>
            </div>
          </div>
          <div className="py-5">
            <MapContainer
              className="w-full h-[50vh]   rounded-2xl"
              center={[23.8759, 90.3795]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[23.8759, 90.3795]} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="py-5 mt-5 bg-[#ECEFFE] rounded-md grid grid-cols-4 gap-5 justify-between">
          <a href="https://www.linkedin.com/in/tanveerahmed45/">
            <FaLinkedin className="text-3xl mx-auto text-primary" />
          </a>
          <a href="https://github.com/TanveerAhmed4545">
            <FaGithub className="text-3xl mx-auto text-primary" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100001729059456&mibextid=ZbWKwL">
            <FaFacebookSquare className="text-3xl mx-auto text-primary" />
          </a>
          <a href="https://twitter.com">
            <FaTwitterSquare className="text-3xl mx-auto text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
