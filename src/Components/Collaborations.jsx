import React from "react";

const Collaborations = () => {
          return (
                    <div className="text-center bg-black text-white p-16 md:p-12 sm:p-8 ">
                              <p className="text-4xl md:text-3xl sm:text-2xl font-normal font-inter mb-28 md:mb-24 sm:mb-20">
                                        Over 40K+ companies have collaborated with us
                              </p>
                              <div className="flex justify-between items-center  flex-wrap gap-12 md:gap-10 sm:gap-8 mb-20 md:mb-16 sm:mb-12 px-10">
                                        <a href="https://cred.club/" className="w-24">
                                                  <img src="/svgs/cred.svg" className=" transition-transform duration-300 hover:scale-110" />
                                        </a>
                                        <a href="https://www.paypal.com/" className="w-24">
                                                  <img src="/svgs/paypal.svg" className="transition-transform duration-300 hover:scale-110" />
                                        </a>
                                        <a href="https://www.amazon.com/" className="w-24">
                                                  <img src="/svgs/amazon.svg" className="transition-transform duration-300 hover:scale-110" />
                                        </a>
                                        <a href="https://www.flipkart.com/" className="w-24">
                                                  <img src="/svgs/flipkart.svg" className="transition-transform duration-300 hover:scale-110" />
                                        </a>
                                        <a href="https://paytm.com/" className="w-24">
                                                  <img src="/svgs/Vector.svg" className="transition-transform duration-300 hover:scale-110" />
                                        </a>
                              </div>
                              <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold font-poppins">
                                        Our Features
                              </h2>
                    </div>
          );
};

export default Collaborations;
