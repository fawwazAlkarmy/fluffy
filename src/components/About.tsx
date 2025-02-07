import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-24 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {t("at")}{" "}
            <span className="text-[#EB9C1B]">{t("Fluffy Burger")}</span>{" "}
            {t("desc")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{t("desc2")}</p>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <img
            src="/about.svg"
            alt="People sharing delicious burgers at Fluffy Burger"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
