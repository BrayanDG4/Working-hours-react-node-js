import {ButtonPDF} from '../buttons/ButtonPDF'

export const ToolBar = () => {
  return (
    <div className="container sm:mx-auto pb-3 flex mt-3 justify-center items-center space-between bg-white">
      <div className="ml-2">
        <h1 className="text-3xl font-bold">
          <a href="">Tu horario</a>
        </h1>
      </div>
      <div className="md:flex md:space-x-10 md:items-center">
        <div className="hidden md:flex">
          <ButtonPDF />
        </div>
      </div>
    </div>
  )
}