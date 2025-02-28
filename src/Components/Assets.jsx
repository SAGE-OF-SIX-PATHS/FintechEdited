import React from "react";

const InvestmentCard = () => {
          return (
                    <div className="flex justify-center gap-5 px-10 py-16 flex-wrap max-w-[1200px] mx-auto">
                              <div className="bg-[#141414] text-white p-10 rounded-2xl w-2/5 min-w-[320px] shadow-md transition-transform duration-300 hover:scale-105">
                                        <div className="w-full h-full flex justify-center items-center">
                                                  <img
                                                            src="/svgs/NewGraph.svg"
                                                            alt="Investment Graph"
                                                            className="w-[90%] h-auto max-h-[85%] sm:w-[95%] sm:max-h-[75%]"
                                                  />
                                        </div>
                              </div>

                              {/* Right Side - Investment Text */}
                              {/* <div className="bg-[#141414] text-white p-10 rounded-2xl w-2/5 min-w-[320px] shadow-md transition-transform duration-300 hover:scale-105"></div> */}
                              <div className="bg-[#141414] text-white p-10 rounded-2xl w-2/5 min-w-[320px] shadow-md transition-transform duration-300 hover:scale-105">
                                        <h1 className="text-2xl font-bold leading-[1.3] mb-4 md:text-xl sm:text-lg">
                                                  Enjoy risk-free <br /> investments!
                                        </h1>
                                        <p className="leading-[1.6] text-lg md:text-base sm:text-sm">
                                                  Our guiding principle is simple: We do what’s best for you. We prioritize your
                                                  financial well-being above all else. With our unwavering commitment to your
                                                  success, trust <span className="text-inherit font-inherit">FinTrack</span> to be your steadfast
                                                  partner on your journey towards financial empowerment.
                                        </p>
                              </div>
                    </div>
          );
};

export default InvestmentCard;
