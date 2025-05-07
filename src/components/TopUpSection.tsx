import React from "react";

interface PackProps {
  title: string;
  image: string;
  gemCount: number;
  price: string;
  color: string;
}

const Pack = ({ title, image, gemCount, price, color }: PackProps) => {
  return (
    <div
      className="rounded-xl p-px"
      style={{
        background:
          "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
      }}
    >
      <div className="bg-[#240500F7] rounded-xl p-5 h-full w-full">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <h3 className="text-white font-bold text-center text-lg">{title}</h3>
        <div className="flex items-center justify-between mt-2 mb-4 bg-[#482929] py-2 px-3">
          <div className="flex items-center">
            <img src="/icons/iconGem.png" className="w-6 h-6" />
            <span className="text-white ml-2">Gem</span>
          </div>
          <span className="text-white">{gemCount}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-white font-bold bg-red-600 w-full py-2 px-3 mr-2 text-center">{price}</span>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 transition-colors cursor-pointer">
            <img src="/icons/iconGlobal.png" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TopUpSection = () => {
  const packs = [
    {
      title: "Small Pack",
      image: "/topup/imgTopUp-1.png",
      gemCount: 20,
      price: "$5.99",
      color: "bg-purple-600",
    },
    {
      title: "Medium Pack",
      image: "/topup/imgTopUp-2.png",
      gemCount: 30,
      price: "$9.99",
      color: "bg-pink-600",
    },
    {
      title: "Giant Pack",
      image: "/topup/imgTopUp-3.png",
      gemCount: 50,
      price: "$19.99",
      color: "bg-emerald-600",
    },
    {
      title: "Enormous Pack",
      image: "/topup/imgTopUp-4.png",
      gemCount: 100,
      price: "$49.99",
      color: "bg-gray-400",
    },
  ];

  return (
    <section className="relative w-full  min-h-screen flex overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bgTopUp.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/100"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-12 flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Direct Top-up
          </h2>

          <div className="flex items-center justify-center">
            <div className="bg-red-600 rounded-lg py-4 px-4 inline-block mb-8 border border-[#666666] w-fit">
              <p className="text-white font-bold">
                <span className=" mr-1 bg-white text-black rounded-full py-1 px-2">
                  +200%
                </span>
                Triple the value of the first purchase!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {packs.map((pack, index) => (
              <Pack key={index} {...pack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUpSection;
