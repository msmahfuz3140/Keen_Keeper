import React from "react";
import footerLogo from "../../assets/Images/logo-xl.png";
import twiter from "../../assets/Images/twitter.png";
import facebook from "../../assets/Images/facebook.png";
import instagram from "../../assets/Images/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white w-full">

      <div className="
        max-w-[1200px]
        mx-auto
        px-4 sm:px-6 lg:px-8
        py-10 sm:py-12
        flex flex-col
        items-center
        text-center
        space-y-6
      ">

      
        <div className="w-full flex justify-center">
          <img
            src={footerLogo}
            alt="footer Logo"
            className="w-32 sm:w-40 md:w-48"
          />
        </div>

        
        <p className="
          max-w-md sm:max-w-xl
          text-xs sm:text-sm
          text-white/80
          leading-relaxed
        ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

      
        <div className="flex flex-col items-center gap-3">

          <p className="text-sm font-medium">Social Links</p>

          <div className="flex gap-4">

            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              flex items-center justify-center
              hover:bg-white/20
              transition
              cursor-pointer
            ">
              <img src={instagram} alt="instagram" />
            </div>

            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              flex items-center justify-center
              hover:bg-white/20
              transition
              cursor-pointer
            ">
              <img src={facebook} alt="facebook" />
            </div>

            <div className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              flex items-center justify-center
              hover:bg-white/20
              transition
              cursor-pointer
            ">
              <img src={twiter} alt="twitter" />
            </div>

          </div>
        </div>

        
        <div className="w-full border-t border-white/20"></div>

        
        <div className="
          w-full
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-3
          text-xs sm:text-sm
          text-white/70
        ">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="
            flex flex-wrap
            justify-center md:justify-end
            gap-4 sm:gap-6
          ">
            <p className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Terms of Service
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Cookies
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;