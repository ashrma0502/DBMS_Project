const ErrorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="w-auto h-auto p-3 text-center rounded-sm bg-red-300 border-l-4 border-red-500 text-red-700">
      {message}
    </div>
  );
};

export default ErrorAlert;