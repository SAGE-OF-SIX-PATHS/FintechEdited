import React, { useState } from "react";

const faqs = [
          {
                    question: "How secure is my financial data on FinTrack?",
                    answer:
                              "Your financial data's security is paramount at FinTrack. We employ advanced encryption protocols and stringent security measures to safeguard your information. Rest assured, your data is protected with the highest levels of security.",
          },
          {
                    question: "Can I link multiple bank accounts and cards to my account?",
                    answer:
                              "Yes, you can link multiple bank accounts and cards to your FinTrack account. This allows you to manage all your finances in one place with ease. Enjoy seamless tracking and better financial insights.",
          },
          {
                    question: "Is FinTrack accessible on mobile devices?",
                    answer: "Yes, FinTrack is fully accessible on mobile devices. You can easily manage your finances on the go with a seamless and responsive experience. Stay in control anytime, anywhere.",
          },
          {
                    question: "Does FinTrack offer support for investment management?",
                    answer: "Yes, FinTrack provides support for investment management. You can track your investments, analyze performance, and make informed financial decisions. Enjoy a smarter way to grow your wealth.",
          },
];

const FAQSection = () => {
          const [openIndex, setOpenIndex] = useState(0);

          const toggleFAQ = (index) => {
                    setOpenIndex(openIndex === index ? null : index);
          };

          return (
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-screen-lg mx-auto p-12 sm:p-6 bg-black text-white font-['Clash Display',sans-serif]">
                              {/* Left Side - FAQ Section */}
                              <div className="flex-1 min-w-[350px] w-full lg:w-1/2">
                                        <h1 className="text-4xl font-bold text-center md:text-3xl sm:text-2xl">FAQ’s</h1>
                                        <div className="mt-6">
                                                  {faqs.map((faq, index) => (
                                                            <div
                                                                      key={index}
                                                                      className={`cursor-pointer py-4 ${openIndex === index ? "text-gray-300" : ""}`}
                                                                      onClick={() => toggleFAQ(index)}
                                                            >
                                                                      <div className="text-2xl font-medium flex justify-between items-center md:text-xl sm:text-lg">
                                                                                {faq.question}
                                                                                <span className="text-xl md:text-lg">{openIndex === index ? "▲" : "▼"}</span>
                                                                      </div>
                                                                      {openIndex === index && faq.answer && (
                                                                                <p className="mt-3 text-lg text-gray-400 leading-relaxed md:text-base sm:text-sm">
                                                                                          {faq.answer}
                                                                                </p>
                                                                      )}
                                                                      <hr className="border-t border-gray-600 mt-2" />
                                                            </div>
                                                  ))}
                                        </div>
                              </div>

                              {/* Right Side - FAQ Image */}
                              <div className="flex-1 flex justify-center w-full lg:w-1/2">
                                        <img
                                                  src="/svgs/Rectangle.svg"
                                                  alt="FAQ"
                                                  className="w-full max-w-md h-auto rounded-2xl sm:w-4/5"
                                        />
                              </div>
                    </div>
          );
};

export default FAQSection;
