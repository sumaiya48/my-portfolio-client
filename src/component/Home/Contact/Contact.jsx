import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_9j48g0x',
        'template_k3t1ydy',
        formRef.current,
        'yEiFd5DS0oKiuaOMl'
      )
      .then(
        () => {
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-[#0f1117] text-white px-6 py-20 md:px-16 font-sans"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
              DO YOU HAVE A PROJECT TO DISCUSS?
            </span>
          </h2>
          <p className="text-xl text-gray-300">GET IN TOUCH 💬</p>

          <div className="space-y-4 mt-6">
            <p className="uppercase text-sm text-gray-400">Contact</p>
            <a
              href="mailto:web.smm.zty@gmail.com"
              className="text-blue-400 hover:underline break-all"
            >
              sumaiyaislam202021@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <h3 className="uppercase text-gray-400 text-sm mb-4">Contact Form</h3>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>

           
        <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block shadow-lg shadow-pink-500/30">
  <button type='submit' className="bg-[#0f1117] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white transition shadow-inner">
    Send
  </button>
</div>

            {done && (
              <p className="text-green-400 pt-2">
                Thanks! Your message has been sent ✨
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
