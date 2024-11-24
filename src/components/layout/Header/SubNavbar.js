import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { headerLevel2Data } from "@/data/layout/header";

const SubNavbar = () => {
  return (
    <div className={style["sumNavbar"]}>
      {headerLevel2Data.links.map((link , index) => (
        <Link key={index} href={link.href} className="submenu_item" target={link.target}>
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default SubNavbar;
