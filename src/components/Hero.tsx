import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.svg')` }}
    >
      {/* Full-width background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/hero.svg')` }}
      ></div>

      {/* Container for content */}
      <div className="container-main relative z-10 flex h-full flex-col justify-center mx-auto px-6 sm:px-12 lg:px-24">
        <div className="mb-8 h-1 w-16 bg-white" />
        <div className="max-w-2xl space-y-4">
          <h1 className="space-y-2">
            <span className="block font-bold text-5xl sm:text-8xl text-[#EB9C1B]">
              {t("Fluffy Burger")}
            </span>
            <span className="block font-bold text-5xl sm:text-8xl text-white">
              {t("Melts in Your Mouth")}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white font-medium">
            {t("Handcrafted Burgers")}
          </p>
        </div>
      </div>
    </section>
  );
}
