import { ToolBar } from "./ToolBar";
import { Calendar } from "./Calendar";
import {WorkingHours} from './WorkingHours';

const nameMonth = () => {
  let currentMonth = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
    new Date()
  );

  return `${currentMonth} ${new Date().getDate()}`;
};

export const WorkingArea = () => {
  return (
    <section className="">
      <ToolBar />
      <div className="h-screen bg-gray-50">
        <div className="container mx-auto px-2 pt-8">
          {/* section info */}
          <div className="flex space-between">
            <div className="flex gap-4">
              <h2 className="text-3xl font-bold gray-text">Calendario</h2>

              <div className="button-3 gray-text bg-gray-100 text-xl">
                <p>
                  Enero <span>2023</span>
                </p>
              </div>
            </div>

            <div>
              <button className="button-4 bg-green-500 hover:bg-green-600 transition-all">
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

          <WorkingHours/>
          
        </div>
      </div>
    </section>
  );
};
