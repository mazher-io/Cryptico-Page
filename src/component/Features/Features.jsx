import svg1 from "../../assets/icon1.svg";
import svg2 from "../../assets/icon2.svg";
import svg3 from "../../assets/icon3.svg";
import svg4 from "../../assets/icon4.svg";
import svg5 from "../../assets/icon5.svg";
import svg6 from "../../assets/icon6.svg";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }} // Prevents re-triggering when scrolling back
    >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-10 lg:mx-20 my-16">
      {/* Card Component */}
      {[
        {
          title: "Real-Time Market Trends",
          description:
            "Get real-time updates on cryptocurrency market trends. Our platform provides live data, allowing you to track market shifts and make timely decisions in the dynamic world of crypto.",
          altText: "Real-Time Market Trends",
          image: svg1,
        },
        {
          title: "Portfolio Management",
          description:
            "Easily manage your crypto investments with our portfolio tracking tools. Monitor your holdings, analyze performance, and rebalance as needed to maximize returns.",
          altText: "Portfolio Management",
          image: svg2,
        },
        {
          title: "Crypto News Feed",
          description:
            "Stay informed with the latest crypto news from reliable sources. Our curated feed delivers essential updates and insights to keep you in the know about the industry.",
          altText: "Crypto News Feed",
          image: svg3,
        },
        {
          title: "Price Alerts",
          description:
            "Set custom price alerts for your favorite cryptocurrencies. Receive instant notifications when your chosen assets reach desired price points, helping you act quickly.",
          altText: "Price Alerts",
          image: svg4,
        },
        {
          title: "Risk Analysis",
          description:
            "Analyze the risk associated with various cryptocurrencies. Our platform helps you assess volatility, market sentiment, and potential returns to make better-informed decisions.",
          altText: "Risk Analysis",
          image: svg5,
        },
        {
          title: "Educational Resources",
          description:
            "New to crypto? Access educational resources covering everything from blockchain basics to advanced trading strategies. Empower yourself with knowledge before making investments.",
          altText: "Educational Resources",
          image: svg6,
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="rounded-[15px] p-4 sm:p-6 lg:p-8 shadow-md flex flex-col gap-3 sm:gap-4 transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(103, 132, 255, 0.15) 0%, transparent 94%)",
            border: "1px solid rgba(103, 132, 255, 0.1)",
          }}
        >
          <div className="flex items-start sm:items-center gap-2">
            <div className="bg-gradient-to-r from-custom-blue-1 to-custom-blue-2 rounded-[12px] p-3 sm:p-4 mr-4 shadow-lg ">
              <img
                src={feature.image}
                alt={feature.altText}
                className="h-12 w-12 sm:h-16 sm:w-16 filter brightness-0 invert"
              />
            </div>
            <h3 className="text-[16px] sm:text-[20px] font-bold text-white sm:justify-center mt-4">
              {feature.title}
            </h3>
          </div>
          <p className="text-white mt-2 text-sm sm:text-base">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
    </motion.div>
  );
};

export default Features;
