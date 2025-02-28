import React from "react";

const testimonials = [
          {
                    text: "FinTrack revolutionized how I manage my finances, making it effortless to track expenses and plan budgets.",
                    author: "Sarah Jhon",
          },
          {
                    text: "Finally, a finance tool that simplifies everything! FinTrack is intuitive, comprehensive, and user-friendly.",
                    author: "Michael Randolph",
          },
          {
                    text: "With FinTrack, I feel more in control of my money than ever before. It’s like having a personal finance assistant in my pocket.",
                    author: "Emily Ken",
          },
          {
                    text: "I’ve tried many finance apps, but FinTrack stands out for its reliability and ease of use. Highly recommended!",
                    author: "Alex Holt",
          },
          {
                    text: "As a busy professional, FinTrack is a lifesaver. It keeps me organized and on top of my finances effortlessly.",
                    author: "David Luther",
          },
          {
                    text: "FinTrack has helped me achieve my financial goals faster by providing valuable insights and tools. Truly indispensable!",
                    author: "Jessica Mary",
          },
];

const Testimonials = () => {
          return (
                    <div className="bg-black text-white py-12 px-6 text-center font-['Clash Display',sans-serif]">
                              <h1 className="text-4xl font-bold mb-8 sm:text-2xl">What our users say</h1>
                              <div className="grid grid-cols-1 gap-6 justify-center px-6 lg:grid-cols-3 sm:grid-cols-1">
                                        {testimonials.map((testimonial, index) => (
                                                  <div
                                                            key={index}
                                                            className="bg-[#141414] p-6 rounded-lg text-left shadow-md w-full"
                                                  >
                                                            <p className="text-lg leading-relaxed">"{testimonial.text}"</p>
                                                            <div className="flex justify-between items-center mt-4">
                                                                      <p className="font-bold">- {testimonial.author}</p>
                                                                      <span className="text-3xl font-bold text-white">”</span>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                              {/* Call to Action */}
                              <div className="mt-12">
                                        <h1 className="text-3xl font-bold mb-4 sm:text-xl">
                                                  Join the trust of 150k+ users, <br /> Sign up today
                                        </h1>
                                        <button className="bg-[#F0FF9D] hover:bg-[#c8e428] text-black font-bold py-3 px-6 rounded-md">
                                                  Get Started
                                        </button>
                              </div>
                    </div>
          );
};

export default Testimonials;
