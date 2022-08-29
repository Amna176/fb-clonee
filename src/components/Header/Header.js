import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

import FlagIcon from "@mui/icons-material/Flag";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header__input">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="Searh Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <AccountCircleIcon fontSize="large" className="userIcon" />
          <h4>sssangha</h4>
        </div>

        <IconButton>
          <AddIcon fontSize="medium" />
        </IconButton>

        <IconButton>
          <ForumIcon fontSize="medium" />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon fontSize="medium" />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
