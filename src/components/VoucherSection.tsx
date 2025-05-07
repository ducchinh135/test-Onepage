import React from "react";

interface GameCardProps {
  title: string;
  image: string;
  description: string;
  price: string;
  price_old: string;
}

const GameCard = ({
  title,
  image,
  description,
  price,
  price_old,
}: GameCardProps) => {
  return (
    <div
      className="rounded-xl p-px"
      style={{
        background:
          "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
      }}
    >
      <div className="bg-[#240500F7] rounded-xl p-3 sm:p-5 h-full w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md"
        />
        <div className="p-2">
          <h3 className="text-white font-bold text-base sm:text-lg">{title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm my-2">{description}</p>
          <div className="flex justify-center gap-2 items-center mt-4 bg-red-600 hover:bg-red-700 py-2 cursor-pointer rounded-md">
            <span className="text-white/70 font-medium text-xs sm:text-sm line-through">
              {price_old}
            </span>
            <span className="text-white font-bold text-sm sm:text-base">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VoucherSection = () => {
  const games = [
    {
      title: "VNG Garena Sales",
      image: "/voucher/imgVoucher-3.png",
      description:
        "Use Apps Store code to buy VNG with half price. lorem ipsum",
      price: "$12.34",
      price_old: "$24.68",
    },
    {
      title: "Pokemon Scarlet/Violet",
      image: "/voucher/imgVoucher-2.png",
      description: "Receive legendary Pokémon when buying by Apps Store",
      price: "$12.34",
      price_old: "$24.68",
    },
    {
      title: "Sleep Pokemon",
      image: "/voucher/imgVoucher-1.png",
      description:
        "Use Apps Store code to buy VNG with half price. lorem ipsum",
      price: "$12.34",
      price_old: "$24.68",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex overflow-hidden py-10 sm:py-16">
      <div className="absolute inset-0 -z-10">
        <img
          src="/bgVoucherSection.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/100"></div>
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
            Voucher
          </h2>

          <div className="flex items-center justify-center">
            <div className="bg-red-600 rounded-lg py-3 px-3 sm:py-4 sm:px-4 inline-block mb-6 sm:mb-8 border border-[#666666] w-fit">
              <p className="text-white font-bold text-sm sm:text-base">
                <span className="mr-1 bg-white text-black rounded-full py-1 px-2 text-xs sm:text-sm">
                  +200%
                </span>
                Triple the value of the first purchase!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoucherSection;
