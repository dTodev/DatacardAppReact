import { useState } from "react";

export default function AddCard(props) {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    jobTitle: "",
    website: "",
    email: "",
    linkedin: "",
    aboutText: "",
    interestsText: "",
    image: "",
  });

  function updateInfo(event) {
    let value = event.target.value;
    let prop = event.target.name;
    setCardInfo((oldState) => {
      return { ...oldState, [prop]: value };
    });
  }

  return (
    <div className="input-form-container">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="Role"
        name="jobTitle"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="Website"
        name="website"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="LinkedIn"
        name="linkedin"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="About"
        name="aboutText"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="Interests"
        name="interestsText"
        onChange={(event) => updateInfo(event)}
      />
      <input
        type="text"
        placeholder="Image URL"
        name="image"
        onChange={(event) => updateInfo(event)}
      />
      <button className="add-btn" onClick={() => (props.function(cardInfo))}>
        Add
      </button>
    </div>
  );
}
