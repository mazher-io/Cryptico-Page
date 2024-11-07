import "./textsection.css";

const Text = ({
  text,
  textColor = "#5063f0", // Retained textColor prop with default value
  headingText = "Unlock your true Potential<br/>with Cryptico"
}) => {
  return (
    <div className="flex items-center flex-col gap-3 mt-20 md:mt-24 lg:mt-[90px]">
      <div
        className="text-[15px] md:text-[18px] lg:text-[20px]" // Responsive text size
        style={{ color: textColor }} // Removed backgroundColor from style
      >
        {text}
      </div>
      <h1
        className="text-white font-bold text-[30px] md:text-[35px] lg:text-[40px] text-center mb-5 font-sans" // Responsive heading size
        style={{ lineHeight: "131.99%" }} // Kept line-height as a style
        dangerouslySetInnerHTML={{ __html: headingText }}
      />
    </div>
  );
};

export default Text;