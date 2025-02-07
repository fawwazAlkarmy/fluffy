import Image from "next/image";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square w-full max-w-lg mx-auto">
          <Image
            src="/contact.svg"
            alt="Fried chicken and sauces on a serving tray"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-lg">
              <Phone className="h-6 w-6 text-orange-500" />
              <Link
                href="tel:0787218880"
                className="hover:text-orange-500 transition-colors"
              >
                07 8721 8880
              </Link>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <Mail className="h-6 w-6 text-orange-500" />
              <Link
                href="mailto:FluffyBurger@gmail.com"
                className="hover:text-orange-500 transition-colors"
              >
                FluffyBurger@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label="Yelp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M20.16 12.5c-.14-.2-1.27-.2-1.27-.2l-3.26 4.24s-.21.28-.46.28c-.25 0-.4-.22-.4-.22l-1.77-3.37s-.07-.13-.07-.31c0-.42.61-.55.61-.55l6.29-2.44s.23-.09.33.08m-3.84 7.62c-.03.24-.28.37-.28.37l-4.87.63s-.24.03-.37-.15c-.13-.17-.05-.38-.05-.38l2.46-3.15s.15-.21.35-.21c.21 0 .33.14.33.14l2.38 2.47s.08.1.05.28M9.13 19.41c-.22.11-.45-.05-.45-.05l-3.97-3.66s-.15-.14-.13-.36c.02-.23.2-.32.2-.32l2.01-1.11s.17-.09.35-.02c.17.07.24.21.24.21l1.94 4.66s.05.15-.19.65m-2.16-8.88c0 .23-.16.35-.16.35l-2.07.87s-.24.1-.41-.05c-.17-.14-.19-.38-.19-.38l-.05-5.78s0-.25.19-.35.38.06.38.06l2.19 4.64s.12.23.12.64M12.04 9c-.24-.03-.31-.31-.31-.31L9.8 3.87s-.07-.25.09-.4c.15-.15.39-.13.39-.13l4.83 1.4s.23.07.27.29c.04.22-.16.35-.16.35l-2.85 3.46s-.13.16-.33.16" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
