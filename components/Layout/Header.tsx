import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-end pt-4 max-w-7xl mx-auto">
      <Image
        src={"/images/faggetournament.png"}
        alt=""
        width={200}
        height={100}
      />
    </div>
  );
};

export default Header;
