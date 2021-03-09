import React from "react";
import "./Sidebar.css";
import { Twitter, Home, Search, NotificationsNone } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Twitter />

      <SidebarOption Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      {/* Button -> Twitter */}
    </div>
  );
}

export default Sidebar;
