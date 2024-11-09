import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";
import { eventList } from "./events";

const CalendarComponent = ({ sectionGap }) => {
  const [date, setDate] = useState(new Date());
  const [eventsForDate, setEventsForDate] = useState([]);

  const handleDateSelect = (selectedDate) => {
    if (!selectedDate) return;

    setDate(selectedDate);

    // Format selected date to "YYYY-MM-DD"
    const formattedDate = selectedDate.toISOString().split("T")[0];

    // Filter events that match the selected date
    const events = eventList
      .filter((item) => {
        const eventDate = new Date(item.date).toISOString().split("T")[0];
        return eventDate === formattedDate;
      })
      .flatMap((item) => item.events);

    setEventsForDate(events);
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
      <div className="container flex flex-col gap-5">
        <SectionHeading
          title="SPIPS Calendar"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor mattis
              sit phasellus mollis sit <br />
              aliquam sit nullam neque.
            </>
          }
        />
        <div className={style["calander_inner"]}>
          <div className="h-50">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </div>
          {date && (
            <div className="mt-4">
              <div>Selected Date: {date.toDateString()}</div>
              <div className="mt-2">
                {eventsForDate.length > 0 ? (
                  eventsForDate.map((event, index) => (
                    <div key={index} className="p-2 border-b">
                      <h4 className="font-semibold">{event.title}</h4>
                      <p>{event.location}</p>
                      <p>{event.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No events for this date.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
