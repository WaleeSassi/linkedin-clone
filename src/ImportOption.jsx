import "./ImportOption.css";

function ImportOption({ title, Icon, color }) {
  return (
    <div className="importOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default ImportOption;
