import BuyResidentialPage from '@/templates/BuyResidentialPage';

const BuyResidential = async () => {
  const res = await fetch('http://localhost:3000/api/profile', {
    cache: 'no-store',
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است.</h3>;

  return <BuyResidentialPage data={data.data} />;
};

export default BuyResidential;
