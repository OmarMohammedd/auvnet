import { MdKeyboardArrowRight } from "react-icons/md";
import "./MobileAPP.css";
import { motion } from "framer-motion";
import { leftService, rightService } from "../../utils/motion";
import ServiceForm from "../../components/formComponent/ServiceForm";
import { useEffect, useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import backgroundImg from "../../assets/c9d433e674314792b37980a2a26ef4d5.gif";
import HtmlHead from "../../components/HtmlHead/HtmlHead";
import { useTranslation } from "react-i18next";

const MobileAPP = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const title = "Services-mobileApp | AUVNET";
  const description = "Services-mobileApp | AUVNET";

  const [submitService, setSubmitService] = useState(false);
  const [loading, setLoading] = useState(false);
  localStorage.setItem("services-visited", "true");
  return (
    <>
      <HtmlHead title={title} description={description}>
        <meta property="og:site_name" content="AUVNET Mobile App" />
        <meta
          property="og:title"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions"
        />
        <meta
          property="og:description"
          content="AUVNET is a leading technology company that specializes in providing comprehensive design services and software development solutions. With a strong focus on creativity, innovation, and technical expertise, we offer a wide range of services including UI/UX design, graphic design, logo design, AI development, website building, mobile app development, app security, desktop app development, and more. Our mission is to empower businesses and individuals with cutting-edge technology and captivating designs that drive growth and success in the digital world.
      "
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://media.auvnet.com/auvnet/AUVNET%20Logo%20B.png"
        />
        <meta
          property="og:url"
          content="https://AUVNET.com/services/mobileapp"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </HtmlHead>
      <div className="uiux">
        <div className="main-container">
          <motion.div
            variants={leftService(0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_lefttt"
          >
              <div className="background-service-txt graphic-design">
              <span>MO</span>
              <span>BIL</span>
              <span>E</span>
            </div>
            <div className="parent_op_ormm">
              <h3>
                {i18n.language === "en" && "Request a Mobile APP service"}
                {i18n.language === "ar" && "اطلب خدمة تطبيق الجوال"}
              </h3>
              <div className="paren_uttonsss">
                <button className="contac_uttonn">
                  <Link style={{ color: "#000" }} to="/contact">
                    {i18n.language === "en" && "Contact us"}
                    {i18n.language === "ar" && "اتصل بنا"}
                  </Link>
                </button>
                <button
                  className="sen_uttonn send-black-color"
                  onClick={() => setSubmitService(true)}
                  style={{
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.5 : 1,
                  }}
                >
                  {i18n.language === "en" && "send"}
                  {i18n.language === "ar" && "ارسل"}
                </button>
              </div>
            </div>

            <ServiceForm
              setLoading={setLoading}
              type={["mobileApp"]}
              submitService={submitService}
              setSubmitService={setSubmitService}
            />
          </motion.div>
          <motion.div
            variants={rightService(0, 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="uiux_righttt"
          >
            <div className="image">
              <img src={backgroundImg} alt="" />
              <div
                onClick={() => setSubmitService(true)}
                style={{
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.5 : 1,
                }}
              >
                <p>
                  {i18n.language === "en" && (
                    <>
                      SEND <br /> YOUR REQUEST
                    </>
                  )}
                  {i18n.language === "ar" && (
                    <>
                      أرسل <br /> طلبك الخاص لنا
                    </>
                  )}
                </p>
                <span>
                  <MdKeyboardArrowRight color="white" className="MdKeyboardArrowRight" />
                </span>
              </div>

              <div
                style={{ cursor: "pointer" }}
              
              >
                <Link to="/contact">
                  {i18n.language === "en" && (
                    <>
                      <p>
                        Click here to <br /> Contact us fastest{" "}
                      </p>
                    </>
                  )}
                  {i18n.language === "ar" && (
                    <>
                      <p>
                        انقر هنا <br /> للاتصال بنا بشكل أسرع{" "}
                      </p>
                    </>
                  )}
                </Link>
                <span>
                  <Link to="/contact">
                    <BsLightningFill className="BsLightningFill" />
                  </Link>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MobileAPP;