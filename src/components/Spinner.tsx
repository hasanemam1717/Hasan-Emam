const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-600 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border-4 border-cyan-900"></div>
      </div>
    </div>
  );
};

export default Spinner;
