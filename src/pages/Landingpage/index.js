import React from "react";
import { LandingPageDiv } from "./styled/landingpage_styles";
import { SiMediafire } from "react-icons/si";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <LandingPageDiv>
      <div className="landing_wrapper">
        <div className="landing_header_wrapper">
          <p className="landing_section_one">
            Discover, collect, and sell extraordinary NFTs.
          </p>

          <p className="landing_section_two">
            Explore on the world's best & largest NFT marketplace
          </p>
        </div>

        <div className="button_wrapper">
          <button
            className="button_wrapper_one"
            onClick={() => {
              navigate("/view_nft");
            }}
          >
            <div className="button_wrapper_one_icon_body">
              <SiMediafire className="button_wrapper_one_icon" />
            </div>

            <p className="button_wrapper_one_text">Explore</p>
          </button>
          <button className="button_wrapper_one">
            <div className="button_wrapper_one_icon_body">
              <FaRegEdit className="button_wrapper_one_icon" />
            </div>

            <p className="button_wrapper_one_text">Create</p>
          </button>
        </div>
      </div>
    </LandingPageDiv>
  );
};

export default LandingPage;
