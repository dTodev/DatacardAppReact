import DataCardImage from "./DataCardImage";
import DataCardFooter from "./DataCardFooter";
import DataCardShortInfo from "./DataCardShortInfo";
import DataCardLongInfo from "./DataCardLongInfo";

export default function DataCard(props) {
  return (
    <div className="datacard-container">
      <DataCardImage data={props.data} />
      <DataCardShortInfo data={props.data} />
      <DataCardLongInfo data={props.data} />
      <DataCardFooter />
    </div>
  );
}
