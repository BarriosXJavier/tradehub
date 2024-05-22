import React from "react";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import Dashnav from "@/ui/dashboard/dashnav";
import Dashcard from "@/ui/dashboard/dashcard";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex space-x-6">
        <Sidebar />
        <Dashnav />
      </div>
    </div>
  );
};

export default Dashboard;
