import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-end p-4">
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
