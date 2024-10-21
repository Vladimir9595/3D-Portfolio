import React from 'react'

const CustomMessagePopUp = ({ message, type, onClose }) => {
  const modalTypeClasses = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    info: 'bg-sky-100 text-sky-800 border-sky-300',
  }
  const selectedClasses = modalTypeClasses[type] || modalTypeClasses.success
  const buttonClasses = {
    success:
      'text-[#166534] font-bold border-green-300 shadow-md shadow-green-300',
    error: 'text-[#991B1B] font-bold border-red-300 shadow-md shadow-red-300',
    warning:
      'text-[#854D0E] font-bold border-yellow-300 shadow-md shadow-yellow-300',
    info: 'text-[#075985] font-bold border-sky-300 shadow-md shadow-sky-300',
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className={`relative p-6 rounded-lg shadow-lg ${selectedClasses} border-2`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-lg font-bold mb-4 text-center">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <p className="mb-6 text-center">{message}</p>

        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={`bg-white border px-4 py-2 rounded-xl ${buttonClasses[type]} hover:bg-gray-100`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomMessagePopUp
