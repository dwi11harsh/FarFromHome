import Image from "next/image";

export const NavLogo = (): JSX.Element => {
  return (
    <>
      <Image
        src="/FarFromHome.png"
        alt="Far From Home"
        width={160}
        height={10}
        className="bg-white"
      />
    </>
  );
};
