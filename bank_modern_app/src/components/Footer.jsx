// Importing necessary styles and assets
import styles from "../style"; 
import { logo } from "../assets"; 
import { footerLinks, socialMedia } from "../constants";

// Footer Component
const Footer = () => (
  // Section for footer, aligning content at the center with padding and flex direction set to column
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    
    {/* First part of footer, flex starts for content alignment, adjusting between medium and small screens */}
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      
      {/* Left section containing the logo and description */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={logo} // Logo imported from assets
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain" // Setting size and ensuring logo fits properly
        />
        
        {/* Description text */}
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {/* Right section containing footer links */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key} // Unique key for each footer link group
            className="flex flex-col ss:my-0 my-4 min-w-[150px]" // Ensuring minimal width for responsiveness
          >
            
            {/* Title of the footer section */}
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            
            {/* List of links under each section */}
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name} // Unique key for each link
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0" // Adding margin except for the last item
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom part of the footer with copyright and social media icons */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      
      {/* Copyright text */}
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>

      {/* Social media icons */}
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id} // Unique key for each social media icon
            src={social.icon} // Icon image source
            alt={social.id} // Alt text for accessibility
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0" // Adding margin except for the last item
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
