
type ServicesType=string[];
type CitiesType=string[];

export interface CategoriesType {
 apartment: string;
  villa: string;
  store: string;
  office: string;
}




const services :ServicesType= ["خرید", "فروش", "رهن", "اجاره"];
const cities:CitiesType = [
  "تهران",
  "سنندج",
  "کرمانشاه",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
  "خرم آباد",
];

const categories:CategoriesType = {
  apartment: "آپارتمان",
  villa: "ویلا",
  store: "مغازه",
  office: "دفتر",
};

export { services, cities, categories };