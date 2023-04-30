import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSearchChecker } from "../../store/action/nftAction";
import { Navdiv } from "./styles/nav.styles";

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <Navdiv>
      <div className="nav_wrapper">
        <div className="nav_content_State">
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="nav_content_State_text_body">
              <p className="nav_content_State_text">Home</p>
            </div>
          </NavLink>

          <NavLink
            to="/view_nft"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="nav_content_State_text_body">
              <p className="nav_content_State_text">NFTs</p>
            </div>
          </NavLink>
        </div>

        <div className="search_wrapper">
          <div
            className="search_icon_body"
            onClick={() => {
              dispatch(getSearchChecker(true));
            }}
          >
            <FiSearch className="search_icon" />
          </div>
        </div>
      </div>
    </Navdiv>
  );
};

export default Nav;
