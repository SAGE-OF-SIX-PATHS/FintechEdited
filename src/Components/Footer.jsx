import React from "react";

const Footer = () => {
          return (
                    <footer className="bg-[#141414] text-white font-['Clash Display',sans-serif] p-10 w-[85%] mx-auto rounded-[17px] md:w-[90%] sm:w-full">

                              {/* Footer Container - Flex on Large Screens, Column on Small */}
                              <div className="w-full border-b border-white pb-6 flex lg:flex-row sm: flex-col sm:items-start sm:gap-6 sm: min-w-20">

                                        {/* Logo & Description */}
                                        <div className="flex-1 min-w-[250px] sm:w-full">
                                                  <div className="flex items-center gap-3">
                                                            <img src="svgs/Logo.svg" alt="FinTrack Logo" className="w-12" />
                                                            <h2 className="text-2xl font-bold">FinTrack</h2>
                                                  </div>
                                                  <p className="text-sm mt-4 leading-6 opacity-80 max-w-[300px]">
                                                            We strive to be the go-to platform for comprehensive financial management, helping users
                                                            achieve their goals and secure their future.
                                                  </p>
                                        </div>

                                        {/* Quick Menu */}
                                        <div className="flex-1 min-w-[200px] sm:w-full">
                                                  <h3 className="text-lg font-bold mb-2">Quick Menu</h3>
                                                  <ul className="space-y-2">
                                                            <li className="text-sm cursor-pointer hover:underline">About</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Pricing</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Blog</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Help</li>
                                                  </ul>
                                        </div>

                                        {/* Resources */}
                                        <div className="flex-1 min-w-[200px] sm:w-full">
                                                  <h3 className="text-lg font-bold mb-2">Resources</h3>
                                                  <ul className="space-y-2">
                                                            <li className="text-sm cursor-pointer hover:underline">Community</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Newsletter</li>
                                                            <li className="text-sm cursor-pointer hover:underline">Blog</li>
                                                            <li className="text-sm cursor-pointer hover:underline">API</li>
                                                  </ul>
                                        </div>
                              </div>

                              {/* Footer Bottom */}
                              <div className="flex justify-between items-center mt-6 text-sm opacity-80 sm:flex-col sm:gap-4">
                                        <p className="whitespace-nowrap">© 2024 PennyWise. All Rights Reserved</p>
                                        <div className="flex gap-5 text-xl">
                                                  <img src="svgs/facebook.png" alt="" srcset="" className="h-5 w-5 rounded ml-2 mt-3"/>
                                                  {/* <img src="svgs/Instagram.png" alt="" srcset="" className="h-5 w-5 rounded ml-0 mt-3"/>
                                                  <img src="svgs/Twitter.png" alt="" srcset="" className="h-5 w-5 rounded ml-6 mt-3"/> */}
                                        </div>
                              </div>

                    </footer>
          );
};

export default Footer;
