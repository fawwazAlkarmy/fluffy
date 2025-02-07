import { useTranslations } from "next-intl";
import Image from "next/image";

interface Category {
  name: string;
  image: string;
  textColor?: string;
}

const categories: Category[] = [
  {
    name: "Burgers",
    image: "/burgers.svg",
  },
  {
    name: "Crispy",
    image: "/crispy.svg",
    textColor: "text-[#EB9C1B]",
  },
  {
    name: "Fries",
    image: "/fries.svg",
  },
  {
    name: "Snacks",
    image: "/snacks.svg",
    textColor: "text-[#EB9C1B]",
  },
  {
    name: "Kids Meal",
    image: "/kids.svg",
  },
];

export default function MenuCategories() {
  const t = useTranslations("Menu");
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group flex flex-col items-center space-y-6 cursor-pointer"
            >
              <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>

              <span
                className={`text-xl md:text-2xl font-semibold ${
                  category.textColor || "text-gray-900"
                } transition-colors duration-300 group-hover:text-[#EB9C1B]`}
              >
                {t(category.name)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
