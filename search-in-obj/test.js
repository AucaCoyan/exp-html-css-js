var Obj = {
  id: "177755",
  addresses: [
    {
      address: "Calle secreta 1234, Provincia de Buenos Aires, Argentina",
      domicilio_ired: "Calle secreta 1234",
      resources: [
        {
          "@type": "COBRE",
          max_velocity: "10240",
          technology: "ADSL2+",
        },
        {
          "@type": "FTTH",
          max_velocity: "962560",
        },
      ],
    },
  ],
  coordinates: {
    latitude: "-344.89872068215265",
    longitude: "-600.01494253145354",
  },
};

let search = (needle, haystack, found = []) => {
  Object.keys(haystack).forEach((key) => {
    if (key === needle) {
      found.push(haystack[key]);
      return found;
    }
    if (typeof haystack[key] === "object") {
      search(needle, haystack[key], found);
    }
  });
  return found;
};

var conexiones = search("@type", Obj);
if (conexiones.includes("FTTH")) {
  console.log(true);
} else {
  console.log(false);
}
