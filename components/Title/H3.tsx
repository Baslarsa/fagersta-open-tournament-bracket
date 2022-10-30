const H3 = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h3
      className={`text-lg tracking-widest font-semibold font-bebas ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
