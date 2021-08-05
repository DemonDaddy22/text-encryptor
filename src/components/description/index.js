import { useState } from "react";

import ExpandIcon from "../../assets/expandIcon";
import { themed } from "../../utils/theme";

import classes from "./styles.module.css";

const Description = () => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => setShowContent(!showContent);

  return (
    <div className={classes.descriptionContainer}>
      <div className={classes.descriptionHeading} onClick={handleShowContent}>
        <div className={classes.descriptionLabel}>How it Works ? </div>
        <ExpandIcon
          height="0.75rem"
          width="0.75rem"
          strokeColor={themed("#1480779f", "#36b6aba7")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: showContent ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.15s",
          }}
        />
      </div>
      {showContent && (
        <div className={classes.descriptionContent}>
          <p>- Enter the message phrase that you intend to send to someone.</p>
          <p>
            - Enter a secret key which acts as a password to protect your
            message.
          </p>
          <p>- Choose for how long do you want your message to remain valid.</p>
          <p>
            - Once encrypted, you can share the link with your friend(s) who can
            decrypt your message with the help of the secret key you provided.
          </p>
        </div>
      )}{" "}
    </div>
  );
};

export default Description;
