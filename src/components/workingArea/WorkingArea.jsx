import { ToolBar } from "./ToolBar";

export const WorkingArea = () => {
  return (
    <section className="">
      <ToolBar />
      <div className="h-screen bg-gray-50">
        <div className="container mx-auto px-2 pt-8">
          {/* section info */}
          <div className="flex gap-4">
            <h2 className="text-3xl font-bold gray-text">Calendario</h2>

            <div className="button-3 gray-text bg-gray-100 text-xl">
              <p>
                Enero <span>2023</span>
              </p>
            </div>
          </div>
          {/* Selected counter */}
          <div className="gray-text-2 font-semibold">
            <p>0 seleccionados</p>
          </div>


        </div>
      </div>
    </section>
  );
};
