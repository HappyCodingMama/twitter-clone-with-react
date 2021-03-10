import React from "react";
import "./Sidebar.css";
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitter" />

      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="MailOutline" />
      <SidebarOption Icon={BookmarkBorder} text="BookmarkBorder" />
      <SidebarOption Icon={ListAlt} text="ListAlt" />
      <SidebarOption Icon={PermIdentity} text="PermIdentity" />
      <SidebarOption Icon={MoreHoriz} text="More" />
      {/* Button -> Twitter */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
