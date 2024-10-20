import React from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { DateFormatter } from "@internationalized/date";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";

const CalendarComponent = ({ sectionGap }) => {
  const [selectedDate, setSelectedDate] = React.useState(
    today(getLocalTimeZone())
  );
  let { locale } = useLocale();
  let isInvalid = isWeekend(selectedDate, locale);

  // Create a DateFormatter for the locale
  const formatter = new DateFormatter(locale);

  // Convert selectedDate to a JS Date object
  const jsDate = selectedDate.toDate(getLocalTimeZone());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date: ", date);
  };

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
      <div className="container">
        <SectionHeading
          title="Spips Calander"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
              sit phasellus mollis sit <br />
              aliquam sit nullam neques.
            </>
          }
        />
        <div className={style["calander_inner"]}>
          <div className={`${style["calendar-container"]} calendar-container`}>
            <Calendar
              aria-label="Date (Invalid on weekends)"
              errorMessage={isInvalid ? "We are closed on weekends" : undefined}
              isInvalid={isInvalid}
              value={selectedDate}
              onChange={handleDateChange}
              weekdayStyle="short"
              showMonthAndYearPickers={true}
              className="calander"
            />
          </div>
          {selectedDate && <p>Selected Date: {formatter.format(jsDate)}</p>}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
