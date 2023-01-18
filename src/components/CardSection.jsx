import { BasicCard } from "./BasicCard";

export const CardSection = () => {
  return (
    <section className="my-8 green-option-2">
      <div className="container mx-auto pt-10">
        <h3 className="gray-text text-3xl text-center font-bold uppercase mb-8">
          ¿Por qué deberías usar <br /> tu horario?
        </h3>
      </div>
      <BasicCard />
    </section>
  );
};
