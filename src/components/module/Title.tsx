const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-blue-main mb-5 border-b-[2px] border-b-gray-300 pb-2.5 text-[1.1rem] font-normal">
      {children}
    </h3>
  );
};

export default Title;
