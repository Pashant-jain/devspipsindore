import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";

const CalendarComponent = ({ sectionGap }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div
      className={`${style["calander_wrp"]} ${
        sectionGap === "top"
          ? "spacing_top"
          : sectionGap === "bottom"
          ? "spacing_bottom"
          : sectionGap === "both"
          ? "spacing_both"
          : ""
      }`}
    >
      <div className="container flex flex-col gap-5">
        <SectionHeading
          title="SPIPS Calander"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
              sit phasellus mollis sit <br />
              aliquam sit nullam neques.
            </>
          }
        />
        <div className={style["calander_inner"]}>
          <div className="h-50">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                if (!d) return;
                setDate(d);
              }}
              className="rounded-md border"
            />
          </div>
          {date && <div>Selected Date : {date?.toString()} </div>}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
