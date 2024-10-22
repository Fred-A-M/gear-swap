/* eslint-disable react/prop-types */
export default function Modal({ isVisible, onClose, children}) {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#cabfa4] p-4 rounded-lg z-50">
        {children} 
      </div>
    </>
  );
}