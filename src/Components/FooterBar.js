"use client";

import { Footer } from "flowbite-react";

function FooterBar() {
  return (
    <Footer
      container
      className="fixed bottom-0 w-full z-50 rounded-none h-10"
      style={{ backgroundColor: "rgba(1, 9, 34, 0.80)" }}
    >
      <Footer.Copyright href="https://www.ruh.ac.lk" by="University of Ruhuna™" year={2022} className="text-white"/>
      <Footer.LinkGroup>
        <Footer.Link href="#">
          <span className="text-white">About</span>
        </Footer.Link>
        <Footer.Link href="#">
          <span className="text-white">Privacy Policy</span>
        </Footer.Link>
        <Footer.Link href="#"><span className="text-white">Licensing</span></Footer.Link>
        <Footer.Link href="#"><span className="text-white">Contact</span></Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooterBar;
