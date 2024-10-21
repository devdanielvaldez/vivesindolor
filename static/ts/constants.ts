type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

export const SITE_TITLE: string = "Vive Sin Dolor";
export const AUTHOR: string = "Manuel Cabrera";
export const FACEBOOK_PAGE: string =
  "https://www.facebook.com/vivesindolorrd";
export const PHONE1: string = "+18297251818";
export const PHONE2: string = "+18295867677";
export const MAIL: string = "mailto:cabreramcabrera@gmail.com";
export const ADDRESS: string =
  "C/ Salcedo, Esq. San Francisco, San Francisco de Macoris";
export const getWhatsappLink: (mobile: boolean) => string = (mobile) =>
  `https://${
    mobile ? "api" : "web"
  }.whatsapp.com/send?phone=${PHONE2}&text=${encodeURIComponent(
    "Hola. Me gustaría que me contactaran para poder resolver unas dudas."
  )}`;
export const WEB_LINK = "https://vivesindolorclub.com";

// Map
export const BUSINESS_LOCATION: google.maps.LatLngLiteral = {
  lat: -9.07072482316217,
  lng: -78.59092492175259,
};

export const PLACE_ID: string = "ChIJZQ3ieRaBq5ERWG2Zvo3vdX8";

export const PLACE_FIELDS: string[] = [
  "name",
  "rating",
  "user_ratings_total",
  "vicinity",
  "opening_hours",
  "photos",
  "reviews",
  "url",
];

export const LIBRARIES: Libraries = ["places"];
export const MAP_DIRECTIONS: (
  userLocation: google.maps.LatLngLiteral
) => string = (userLocation) =>
  `https://www.google.com/maps/dir/19.295209,-70.2579104/19.295209,-70.2579104`;

export const TOTAL_STARS: number = 5;

// Blog
export const ARTICLES_PER_PAGE: number = 2;
