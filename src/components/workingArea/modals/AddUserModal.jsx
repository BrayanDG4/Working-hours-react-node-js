import { MdClear } from "react-icons/md";

export const AddUserModal = ({ children, modal, setModal }) => {
  return (
    <>
      {modal && (
        // Overlay
        <div className="overlay">
          {/* ContenedorModal */}
          <div className="w-2/3 relative p-16 glass">
            {/* EncabezadoModal */}
            <div className="flex items-center space-between mb-20">
              <h3 className="font-bold text-3xl gray-text">Agregar usuario</h3>
            </div>

            <div onClick={()=>{setModal(false)}} className="close-icon">
              <MdClear className="w-full h-full" />
            </div>

            {children}

          </div>
        </div>
      )}
    </>
  );
};
