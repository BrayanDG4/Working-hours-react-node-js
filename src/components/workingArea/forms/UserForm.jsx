export const UserForm = () => {
  return (
    <>
      <form action="" method="POST">
        <div class="mb-5">
          <label
            for="name"
            class="mb-2 block uppercase text-gray-700 font-bold"
          >
            Nombre:
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Nombre"
            class="border p-3 w-full rounded-lg opacity-70"
          />
        </div>

        <div class="mb-5">
          <label
            for="name"
            class="mb-2 block uppercase text-gray-700 font-bold"
          >
            Rol:
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Nombre"
            class="border p-3 w-full rounded-lg opacity-70"
          />
        </div>

        <div class="mb-5">
          <label
            for="name"
            class="mb-2 block uppercase text-gray-700 font-bold"
          >
            Hora de ingreso:
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Nombre"
            class="border p-3 w-full rounded-lg opacity-70"
          />
        </div>

        <div class="mb-5">
          <label
            for="name"
            class="mb-2 block uppercase text-gray-700 font-bold"
          >
            Hora de salida:
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Nombre"
            class="border p-3 w-full rounded-lg opacity-70"
          />
        </div>

        <input
          type="submit"
          value="Agregar usuario"
          class="bg-sky-600 hover:bg-sky-700 transition-colors
                    cursor-pointer uppercase font-bold w-full p-3 text-white rounded-md"
        />
      </form>
    </>
  );
};
