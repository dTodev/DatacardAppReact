import mailIcon from "../assets/mail-icon.png";
import linkedIcon from "../assets/Vector.png";

export default function DataCardShortInfo(props) {
  return (
    <div className="short-info-container">
      <h1 className="name">{props.data.name}</h1>
      <h3 className="job-title">{props.data.jobTitle}</h3>
      <h4 className="website-link">{props.data.website}</h4>
      <div className="contact-buttons-container">
        <a href={`mailto:${props.data.email}`} className="email-button">
          <img src={mailIcon} />
          Email
        </a>
        <a
          className="linkedin-button"
          href={`${props.data.linkedin}`}
          target="_blank"
        >
          <img src={linkedIcon} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
