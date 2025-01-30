interface MiddleProps {
  children: React.ReactNode;
}

const Middle = ({ children }: MiddleProps) => {
  return (
    <div className="bg-darkgray">
      <div className="container">{children}</div>
    </div>
  );
};

export default Middle;
