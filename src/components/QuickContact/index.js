import React from "react";
import HeaderSocial from "../../components/HeaderSocial";

const QuickContact = ({ phone, email, location }) => {
  return (
    <div className="contact-info">
      <h3>CONTACT</h3>
      <ul>
        <li style={{ display: "flex" }}>
          <span style={{ whiteSpace: "nowrap" }}>Follow me:</span>
          <div id="socialsResponsive">
            <HeaderSocial />
          </div>
        </li>
        <li>
          <span>Promotion:</span>
          <a href={`mailto:zoranaism@gmail.com`}>zoranaism@gmail.com</a>
        </li>
        <li>
          <span>Join Production:</span>
          <a href={`https://www.stellarsoundpodcast.com/become-a-volunteer`}>
            click here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickContact;
