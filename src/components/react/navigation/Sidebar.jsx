import React from "react";
import {
  FaFire,
  FaGamepad,
  FaHome,
  FaLaugh,
  FaMusic,
  FaPodcast,
  FaShirtsinbulk,
  FaVideo,
  FaWeight,
} from "react-icons/fa/index.js";
import { MdFemale, MdMovie, MdSchool, MdSports } from "react-icons/md/index.js";

function SidebarLink({ title, Icon, currentTab }) {
  return (
    <a href={`/?title=${title}`} className="flex-shrink-0">
      <div
        className={`flex items-center space-x-6 py-3 px-10 rounded-full cursor-pointer hover:scale-105 ease-in-out transition duration-200 ${
          currentTab === title
            ? "bg-red-600 hover:bg-black"
            : "hover:bg-red-600"
        } text-white`}
      >
        <Icon className="text-2xl" />

        <h3>{title}</h3>
      </div>
    </a>
  );
}

function Sidebar({ currentTab }) {
  return (
    <div className="flex overflow-x-scroll md:overflow-x-visible scrollbar-hide flex-row md:flex-col md:space-y-4 px-4 border-r border-white">
      <SidebarLink title="New" Icon={FaHome} currentTab={currentTab} />
      <SidebarLink title="Coding" Icon={FaFire} currentTab={currentTab} />
      <SidebarLink title="Astro JS" Icon={FaFire} currentTab={currentTab} />
      <SidebarLink title="React JS" Icon={FaFire} currentTab={currentTab} />
      <SidebarLink title="Music" Icon={FaMusic} currentTab={currentTab} />
      <SidebarLink title="Education" Icon={MdSchool} currentTab={currentTab} />
      <SidebarLink title="Podcast" Icon={FaPodcast} currentTab={currentTab} />
      <SidebarLink title="Movie" Icon={MdMovie} currentTab={currentTab} />
      <SidebarLink title="Gaming" Icon={FaGamepad} currentTab={currentTab} />
      <SidebarLink title="Live" Icon={FaVideo} currentTab={currentTab} />
      <SidebarLink title="Sport" Icon={MdSports} currentTab={currentTab} />
      <SidebarLink
        title="Fashion"
        Icon={FaShirtsinbulk}
        currentTab={currentTab}
      />
      <SidebarLink title="Beauty" Icon={MdFemale} currentTab={currentTab} />
      <SidebarLink title="Comedy" Icon={FaLaugh} currentTab={currentTab} />
      <SidebarLink title="Gym" Icon={FaWeight} currentTab={currentTab} />
    </div>
  );
}

export default Sidebar;
