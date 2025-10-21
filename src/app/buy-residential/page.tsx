import BuyResidentialPage from '@/templates/BuyResidentialPage';

export interface FilterDataType {
  _id: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  realState: string;
  price: number;
  constructionDate: string;
  category: 'villa' | 'apartment' | 'store' | 'office';
  amenities: string[];
  rules: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface SearchParams {
  categories?: 'villa' | 'apartment' | 'store' | 'office';
}

const BuyResidential = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { categories } = searchParams;

  const res = await fetch('http://localhost:3000/api/profile', {
    cache: 'no-store',
  });

  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است.</h3>;

  let finalData: FilterDataType[] = data.data;

  if (categories) {
    finalData = finalData.filter((item) => item.category === categories);
  }

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResidential;
