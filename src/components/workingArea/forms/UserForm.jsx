import { Form, Formik } from "formik";
import { useState } from "react";

export const UserForm = ({ getInfo }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          rol: "",
          // startTimeMonday: "",
          // startTimeTuesday: "",
          // startTimeWednesday: "",
          // startTimeThursday: "",
          // startTimeFriday: "",
          // startTimmeSaturday: "",
          // startTimeSunday: "",
          // endTimeMonday: "",
          // endTimeTuesday: "",
          // endTimeWednesday: "",
          // endTimeThursday: "",
          // endTimeFriday: "",
          // endTimmeSaturday: "",
          // endTimeSunday: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          let info = {
            name: values.name,
            rol: values.rol,
            hours: [
              {
                id: 1,
                startTime: values.startTimeMonday,
                endTime: values.endTimeMonday,
              },
              {
                id: 1,
                startTime: values.startTimeTuesday,
                endTime: values.endTimeTuesday,
              },
              {
                id: 1,
                startTime: values.startTimeWednesday,
                endTime: values.endTimeWednesday,
              },
              {
                id: 1,
                startTime: values.startTimeThursday,
                endTime: values.endTimeThursday,
              },
              {
                id: 1,
                startTime: values.startTimeFriday,
                endTime: values.endTimeFriday,
              },
              {
                id: 1,
                startTime: values.startTimeSaturday,
                endTime: values.endTimeSaturday,
              },
              {
                id: 1,
                startTime: values.startTimeSunday,
                endTime: values.endTimeSunday,
              }
            ],
          };
          getInfo(info);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Nombre:
              </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                placeholder="Ingresar nombre"
                className="border p-3 w-full rounded-lg opacity-70"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="rol"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Rol:
              </label>
              <input
                onChange={handleChange}
                name="rol"
                type="text"
                id="rol"
                placeholder="Ingresar rol"
                className="border p-3 w-full rounded-lg opacity-70"
              />
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeMonday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Lunes:
              </label>
              <div className="flex gap-2 items-center ml-10">
                <input
                  onChange={handleChange}
                  name="startTimeMonday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeMonday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="endTimeMonday"
                  type="number"
                  min={0}
                  max={24}
                  id="endTimeMonday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeTuesday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Martes:
              </label>
              <div className="flex gap-2 items-center ml-6">
                <input
                  onChange={handleChange}
                  name="startTimeTuesday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeTuesday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="endTimeTuesday"
                  type="number"
                  min={0}
                  max={24}
                  id="endTimeTuesday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeWednesday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Miercoles:
              </label>
              <div className="flex gap-2 items-center">
                <input
                  onChange={handleChange}
                  name="startTimeWednesday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeWednesday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="startTimeWednesday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeWednesday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeThursday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Jueves:
              </label>
              <div className="flex gap-2 items-center ml-8">
                <input
                  onChange={handleChange}
                  name="startTimeThursday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeThursday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="startTimeThursday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeThursday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeFriday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Viernes:
              </label>
              <div className="flex gap-2 items-center ml-6">
                <input
                  onChange={handleChange}
                  name="startTimeFriday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeFriday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="startTimeFriday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeFriday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeSaturday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Sábado:
              </label>
              <div className="flex gap-2 items-center ml-6">
                <input
                  onChange={handleChange}
                  name="startTimeSaturday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeSaturday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="startTimeSaturday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeSaturday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <label
                htmlFor="startTimeSunday"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Domingo:
              </label>
              <div className="flex gap-2 items-center ml-3">
                <input
                  onChange={handleChange}
                  name="startTimeSunday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeSunday"
                  placeholder="Inicio"
                  className="border p-3 w-full rounded-lg opacity-70"
                />

                <p>A</p>

                <input
                  onChange={handleChange}
                  name="endTimeSunday"
                  type="number"
                  min={0}
                  max={24}
                  id="startTimeSunday"
                  placeholder="Fin"
                  className="border p-3 w-full rounded-lg opacity-70"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition-colors
                    cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
            >
              Agregar usuario
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
