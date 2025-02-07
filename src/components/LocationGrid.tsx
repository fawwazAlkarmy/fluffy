import LocationCard from "./LocationCard";

export default function LocationGrid() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <LocationCard
          city="Zarqa"
          country="Jordan"
          address="Al karma Street, Zarqa"
          mapUrl="https://www.google.com/maps/place/Fluffy+Burger+%D9%81%D9%84%D8%A7%D9%81%D9%8A+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@32.0970855,36.0873222,16.75z/data=!4m6!3m5!1s0x151b7b1dcb7d5b87:0x17a340cbdf6fe3dd!8m2!3d32.0971895!4d36.0873936!16s%2Fg%2F11kq2cyt61?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
        />
        <LocationCard
          city="Amman"
          country="Jordan"
          address="Islam Abad St. 21, Amman 11953"
          mapUrl="https://www.google.com/maps/place/Fluffy+Burger+%D9%81%D9%84%D8%A7%D9%81%D9%8A+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@31.972251,35.8817288,17z/data=!3m1!4b1!4m6!3m5!1s0x151ca1abaef3ba51:0x7c4286e616d2c077!8m2!3d31.9722465!4d35.8843037!16s%2Fg%2F11y4lwxn2l?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
        />
      </div>
    </div>
  );
}
