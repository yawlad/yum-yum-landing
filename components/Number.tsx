import localFont from "next/font/local";

const rotondac = localFont({
  src: [
    {
      path: "../public/fonts/rotondac.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

interface NumberProps {
  children: React.ReactNode;
  className?: string;
}

const Number = ({ children, className }: NumberProps) => {
  return <span className={`${rotondac.className} ${className}`}>{children}</span>;
};

export default Number;
