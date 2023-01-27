import { useState, useEffect } from "react";
import { UserCards } from "./cards/UserCards";

export const WorkingHours = () => {
  const [workingHours, setWorkingHours] = useState([]);

  useEffect(() => {
    setWorkingHours([
      {
        id: 1,
        startTime: 6,
        endTime: 12,
      },
      {
        id: 1,
        startTime: 12,
        endTime: 9,
      },
    ]);
  }, []);

  return (
    // WorkingHours
    <div className="grid grid-cols-12 gap-2 mt-2">
      <div className="bg-blue-500 col-span-3 p-2">
        <div className="bg-yellow-400 grid grid-cols-1">
          <div className="flex items-center gap-3 m-2">
            <input className="w-5 h-5" type="checkbox" name="" id="" />
            <p className="gray-text font-semibold">Seleccionar todo</p>
          </div>
        </div>

        <UserCards />
      </div>

      <div className="bg-white col-span-9 p-2">
        <div className="grid grid-cols-7">
          <div className="font-medium gray-text p-2">Lunes </div>
          <div className="font-medium gray-text p-2">Martes</div>
          <div className="font-medium gray-text p-2">Miercoles</div>
          <div className="font-medium gray-text p-2">Jueves</div>
          <div className="font-medium gray-text p-2">Viernes</div>
          <div className="font-medium gray-text p-2">Sabado</div>
          <div className="font-medium gray-text p-2">Domingo</div>
        </div>

        <div className="grid grid-cols-7">
          {workingHours.map((hours, id) => {
            console.log(hours);
            return (
              <div
                key={id}
                className="gray-text grow px-3 py-2 font-bold rounded-md bg-green-400 m-2"
              >
                {hours.startTime} A {hours.endTime}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
