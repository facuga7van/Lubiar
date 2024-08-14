import React from "react";

export default function Whatsapp() {
  return (
    <>
      <a
        href="https://wa.me/message/72HUXVW3IQHYC1"
        className="fixed bottom-5 right-5 bg-green-600 p-4 hover:p-5 rounded-full shadow-lg z-10 text-center no-underline hover:-translate-x-2 hover:-translate-y-2  hover:scale-125 all duration-300 ease-in-out hover:bg-teal-500"
        target="_blank"
        rel="noopener noreferrer"
        style={{ filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2))" }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[4rem] h-[4rem]"
        />
      </a>
    </>
  );
}
