
const Screen = ({ input, output }) => {
  return (
    <div className="display">
    <span className="result">{output}</span>
    <span id="display" className="input">{input}</span>
  </div>
  );
};

export default Screen;
