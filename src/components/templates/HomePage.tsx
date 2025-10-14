import { FaCity } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';

const HomePage = () => {
  const services = ['اجاره', 'رهن', 'فروش', 'خرید'];
  const cities = [
    'تهران',
    'سنندج',
    'کرمانشاه',
    'اهواز',
    'مشهد',
    'اصفهان',
    'شیراز',
    'خرم‌آباد',
  ];
  return (
    <div>
      <div className="my-[100px] flex items-center justify-center rounded-[10px] p-5 px-0">
        <div className="text-blue-main w-full text-center">
          <h1 className="mb-[30px] text-5xl font-bold">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="flex flex-wrap justify-center">
            {services.map((item) => (
              <li
                className="bg-banner m-2.5 flex w-20 items-center rounded-[5px] px-2.5 py-[5px]"
                key={item}
              >
                <FiCircle />
                <span className="ms-[5px] h-5 font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
