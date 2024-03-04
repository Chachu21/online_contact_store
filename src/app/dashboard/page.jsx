import React from "react";
import Loading from "../loading";
import AdminSidebar from "@/components/adminSideBar";
import AdminNavbar from "@/components/adminNavBar";
import SupperComponent from "@/components/supperComponent";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex  bg-gray-50 overflow-hidden">
      <AdminSidebar />
      <div className="w-full h-full ">
        <AdminNavbar />
        <div className="w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2">
          <SupperComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
