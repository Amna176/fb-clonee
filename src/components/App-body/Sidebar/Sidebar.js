import { UserAddOutlined } from "@ant-design/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src='https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-9/95477914_2086703658141814_8536877641221799936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBAtLXAkxuWbMihnVD0aZzYPLm0ijy0XVg8ubSKPLRdbfgLB79PZdtoXJJ0d4igMGtCbWe48gctjy-yJVQ_VVi&_nc_ohc=SFKCwP7IUaEAX8bu5Vk&tn=bROQ5ID0gK1sSxlC&_nc_ht=scontent.fisb17-1.fna&oh=00_AT9QkxnIZHSUtYFVfhlXU6C8gySETwmaIWzUCMEqcgxwww&oe=6329B2BB'
        title='Amna'
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
