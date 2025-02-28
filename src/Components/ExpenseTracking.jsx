const ExpenseTracking = () => {
          return (
                    <div className="flex justify-between items-center bg-[#222] text-white p-16 rounded-2xl gap-12 w-4/5 mx-auto min-h-[75vh] my-12">
                              {/* Left Side - Text */}
                              <div className="w-2/5 font-['Clash Display',sans-serif]">
                                        <h2 className="text-5xl font-bold">Investment-Like Expense Tracking</h2>
                                        <p className="text-xl leading-relaxed mt-6">
                                                  Easily monitor your spending habits with detailed categorization and
                                                  analysis, empowering you to make informed financial decisions and stay
                                                  within your budget.
                                        </p>
                              </div>

                              {/* Right Side - Chart */}
                              <div className="w-3/5 p-10 bg-gray-800 rounded-xl flex justify-center items-center">
                                        <img src="/svgs/Chart.svg" alt="Expense Chart" className="w-full max-w-[85%] h-auto" />
                              </div>
                    </div>
          );
};

export default ExpenseTracking;
