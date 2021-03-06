import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../../store/actions/authActions";

function OptionBar({ logoutAction }) {
  return (
    <div className="option-bar w-100">
      <div className="h-100 align-items-center ">
        <ul className="option-bar-inner nav justify-content-between w-100">
          <li>
            <NavLink to="/chat">
              <i className="fas fa-home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat">
              <i className="fas fa-user" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat">
              <i className="fas fa-cog" />
            </NavLink>
          </li>
          <li>
            <button id="logout-button" onClick={logoutAction}>
              <i className="fas fa-sign-out-alt" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default connect(
  null,
  { logoutAction }
)(OptionBar);
