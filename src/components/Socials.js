import SocialButtonsContainer from "react-social-media-buttons";

import React, { Component } from "react";

export default class socials extends Component {
  render() {
    return (
        <SocialButtonsContainer
          links={[
            "https://www.facebook.com/medyen.kadhum/",
            "https://www.instagram.com/royaloppression",
            "https://www.linkedin.com/in/medyen-kadhum-574b7712a/",
          ]}
          buttonStyle={{ margin: "5px 5px", backgroundColor: "transparent" }}
          iconStyle={{ color: "#000000" }}
          openNewTab={true}
        />
    );
  }
}