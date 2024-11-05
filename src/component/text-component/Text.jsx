import "./textsection.css";

const Text = ({
  text,
  backgroundColor = "#fff",
  textColor = "#131731",
  headingText = "Unlock your true Potential<br/>with Cryptico"
}) => {
  return (
    <div className="flex items-center flex-col gap-3 mt-[90px]">
      <div
        className="button"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        {text}
      </div>
      <h1
        className="text-white font-extrabold text-[33px] text-center mb-5"
        dangerouslySetInnerHTML={{ __html: headingText }}
      />
    </div>
  );
};

export default Text;
