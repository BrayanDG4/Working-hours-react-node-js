import { Form, Formik } from "formik";

export const UserForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          rol: "",
          startTime: "",
          endTime: "",
        }}
        onSubmit={(values) => {
          console.log(values);
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

            <div className="mb-5">
              <label
                htmlFor="startTime"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Hora de ingreso:
              </label>
              <input
                onChange={handleChange}
                name="startTime"
                type="text"
                id="startTime"
                placeholder="Ingresar hora de entrada"
                className="border p-3 w-full rounded-lg opacity-70"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="endTime"
                className="mb-2 block uppercase text-gray-700 font-bold"
              >
                Hora de salida:
              </label>
              <input
                onChange={handleChange}
                name="endTime"
                type="text"
                id="endTime"
                placeholder="Ingresar hora de salida"
                className="border p-3 w-full rounded-lg opacity-70"
              />
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
