"use client";

import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface LocationCardProps {
  city: string;
  country: string;
  address: string;
  mapUrl: string;
}

export default function LocationCard({
  city,
  country,
  address,
  mapUrl,
}: LocationCardProps) {
  const t = useTranslations("Locations");
  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer">
      <Card className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-black/90 z-10 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{t(city)}</h2>
          <p className="text-orange-400 mb-4">{address}</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26521.25429364371!2d-86.81581548742674!3d33.51162705733733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891b9d2e3d82d9%3A0x7eb6fdd4d1a7f039!2sBirmingham%2C%20AL%2C%20USA!5e0!3m2!1sen!2s!4v1707324612099!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px]"
        ></iframe>
      </Card>
    </a>
  );
}
