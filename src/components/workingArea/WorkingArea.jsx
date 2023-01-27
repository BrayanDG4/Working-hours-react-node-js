import { ToolBar } from "./ToolBar";
import { useState } from "react";
import { WorkingHours } from "./WorkingHours";
import { AddUserModal } from "./modals/AddUserModal";
import { UserForm } from "./forms/UserForm";

const getNameMonth = () => {
  let currentMonth = new Intl.DateTimeFormat("es-ES", { month: "long" })
    .format(new Date())
    .toUpperCase();

  return currentMonth;
};

export const WorkingArea = () => {
  const [modal1, setModal1] = useState(false);

  const [data, setData] = useState([]);

  const getInfo = (data) => {
    setData(data);
  };
  console.log(
     "desde area de trabajo" + data.name + data.rol + data.startTime
   );
  return (
    <section className="h-screen w-full">
      <ToolBar />
      <div className="h-screen bg-gray-50">
        <div className="container mx-auto px-2 pt-8">
          {/* section info */}
          <div className="flex space-between">
            <div className="flex gap-4">
              <h2 className="text-3xl font-bold gray-text">Calendario</h2>

              <div className="button-3 gray-text bg-gray-100 text-xl">
                <p>
                  {getNameMonth()} <span>2023</span>
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  setModal1(!modal1);
                }}
                className="button-4 bg-green-500 hover:bg-green-600 transition-all"
              >
                Agregar usuario
              </button>
            </div>
          </div>
          {/*end section info */}

          {/* Selected counter */}
          <div className="gray-text-2 font-semibold">
            <p>0 seleccionados</p>
          </div>
          {/*end Selected counter */}

          <WorkingHours data={data} />

          <AddUserModal modal={modal1} setModal={setModal1}>
            <UserForm getInfo={getInfo} />
          </AddUserModal>
        </div>
      </div>
    </section>
  );
};
