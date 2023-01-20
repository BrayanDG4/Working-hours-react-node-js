import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export const Calendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locale="es"
        initialView="dayGridMonth"
        headerToolbar={{
          start: "", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        }}
        
      />
    </>
  );
};
