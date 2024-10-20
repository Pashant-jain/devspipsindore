import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

const AnnouncementsCard = ({
  AnnouncementType,
  date,
  month,
  title,
  link,
  target,
}) => {
  return (
    <Link
      href={link}
      target={target}
      className={`${style["AnnouncementsCard_wrp"]}`}
    >
      <div className={style["Announcement_date"]}>
        <strong className="heading-2">{date}</strong>
        <span className=".text-regular">{month}</span>
      </div>
      <p className="text-regular line-clamp line-clamp-2">{title}</p>
      <div className={style["tag"]}>{AnnouncementType}</div>
    </Link>
  );
};

export default AnnouncementsCard;
