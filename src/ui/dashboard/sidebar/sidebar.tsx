import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MenuLinks from "../menuLinks";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section className="flex flex-col">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span>Admin</span>
          <span>Administrator</span>
        </div>
      </div>
      <div>
        <MenuLinks />
      </div>
    </section>
  );
};

export default Sidebar;
