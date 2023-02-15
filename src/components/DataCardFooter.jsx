import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import githubIcon from "../assets/github-icon.png";

//This component is not finished, links and onClick functions are to be added.

export default function DataCardFooter() {
  return (
    <footer className="datacard-footer-container">
      <img className="social-image" src={twitterIcon}></img>
      <img className="social-image" src={facebookIcon}></img>
      <img className="social-image" src={instagramIcon}></img>
      <img className="social-image" src={githubIcon}></img>
    </footer>
  );
}
