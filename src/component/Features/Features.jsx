import svg from '../../assets/icon.svg';

const Features = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-[60px] mr-40 ml-40 sm:mr-[150px] sm:ml-[150px] ' >
            
            {/* Card Component */}
            {[
                {
                    title: "Expense Tracking",
                    description: "Master your spending habits and gain valuable insights into your finances with our expense tracking tools. Effortlessly categorize your expenditures and identify areas for improvement to take control of your financial journey.",
                    altText: "Expense Tracking"
                },
                {
                    title: "Budgeting",
                    description: "Create a personalized budget that works for you, allowing you to set financial goals and track your progress seamlessly. With our intuitive budgeting tools, managing your money becomes a straightforward and empowering process.",
                    altText: "Budgeting"
                },
                {
                    title: "Financial Planning",
                    description: "Receive expert advice and guidance tailored to help you achieve your long-term financial goals. Our financial planning services provide a strategic roadmap to navigate your financial journey with confidence and clarity.",
                    altText: "Financial Planning"
                },
                {
                    title: "Investment Tracking",
                    description: "Keep tabs on your investments and monitor their performance with ease. Our investment tracking tools help you make informed decisions and optimize your portfolio to align with your financial objectives.",
                    altText: "Investment Tracking"
                },
                {
                    title: "Savings Goals",
                    description: "Set and manage your savings goals effectively to achieve your financial aspirations. With our platform, you can track progress, stay motivated, and build a secure financial future.",
                    altText: "Savings Goals"
                },
                {
                    title: "Debt Management",
                    description: "Take control of your debts and work toward financial freedom with our debt management solutions. Our tools help you create a clear plan to reduce your obligations and regain financial stability.",
                    altText: "Debt Management"
                },
            ].map((feature, index) => (
                <div key={index} className='rounded-[15px] p-6 sm:p-8 md:p-10 shadow-md flex flex-col gap-3 sm:gap-4  transition-transform transform hover:scale-105 hover:shadow-xl' style={{ 
                    background: 'radial-gradient(circle at 50% 50%, rgba(103, 132, 255, 0.15) 0%, transparent 70%)', 
                    border: '1px solid rgba(103, 132, 255, 0.1)' 
                }}>
                    <div className='flex items-start sm:items-center gap-2'>
                        <div className='bg-gradient-to-r from-custom-blue-1 to-custom-blue-2 rounded-[12px] p-3  sm:p-4 mr-4 shadow-lg '>
                            <img src={svg} alt={feature.altText} className='h-12 w-12 sm:h-16 sm:w-16 filter brightness-0 invert' />
                        </div>
                        <h3 className='text-[16px] sm:text-[20px] font-bold text-white'>{feature.title}</h3>
                    </div>
                    <p className='text-white mt-2 text-sm sm:text-base'>{feature.description}</p>
                </div>
            ))}

        </div>
    );
};

export default Features;
