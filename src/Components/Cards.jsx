import React from "react";

const FeatureCards = () => {
          return (
                    <div className="flex justify-center gap-5 px-10 py-16 flex-wrap max-w-[1200px] mx-auto">
                              <div className="bg-[#141414] text-white p-10 rounded-2xl w-2/5 min-w-[320px] shadow-md transition-transform duration-300 hover:scale-105">
                                        <h2 className="text-3xl font-bold leading-snug mb-4 text-left">
                                                  Customizable<br /> Budgeting Tools
                                        </h2>
                                        <p className="text-lg leading-relaxed">
                                                  Tailor your budget to your unique financial goals with customizable
                                                  categories, spending limits, and alerts, ensuring that you stay on
                                                  track and achieve your desired outcomes.
                                        </p>
                              </div>

                              <div className="bg-[#141414] text-white p-10 rounded-2xl w-2/5 min-w-[320px] shadow-md transition-transform duration-300 hover:scale-105">
                                        <h2 className="text-3xl font-bold leading-snug mb-4 text-left">
                                                  Investment Portfolio<br /> Management
                                        </h2>
                                        <p className="text-lg leading-relaxed">
                                                  Take charge of your investments with our portfolio tracker, giving
                                                  real-time updates, and personalized insights to optimize your
                                                  strategy and maximize returns.
                                        </p>
                              </div>
                    </div>
          );
};

export default FeatureCards;
