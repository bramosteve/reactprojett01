import { useState } from "react";

const countryCodes = [
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" }
];

export default function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  return (
    <div className="flex space-x-4 items-center border rounded-md p-3">
      {/* Sélecteur de pays */}
      <div className="relative">
        <button className="flex items-center space-x-2 p-2 border bg-white rounded-md">
          <span>{selectedCountry.flag}</span>
          <span>{selectedCountry.dial}</span>
        </button>

        {/* Menu déroulant */}
        <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md border">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              className="flex w-full items-center space-x-2 p-2 hover:bg-gray-100"
              onClick={() => setSelectedCountry(country)}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Champ numéro de téléphone */}
      <input
        type="tel"
        placeholder="Enter your number"
        className="w-full p-3 border rounded-md"
      />
    </div>
  );
}
