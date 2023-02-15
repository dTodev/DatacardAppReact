export default function DataCardLongInfo(props) {
  return (
    <main className="long-info-container">
      <h2 className="about">About</h2>
      <p className="about-paragraph">{props.data.aboutText}</p>
      <h2 className="interests">Interests</h2>
      <p className="interests-paragraph">{props.data.interestsText}</p>
    </main>
  );
}
