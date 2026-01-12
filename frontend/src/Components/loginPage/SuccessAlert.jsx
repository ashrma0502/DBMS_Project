const SuccessAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="w-auto h-auto p-3 text-center rounded-sm bg-green-300 border-l-4 border-green-500 text-green-700">
      {message}
    </div>
  );
};

export default SuccessAlert;