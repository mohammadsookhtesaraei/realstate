import { FaCity } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';

import { CategoriesType } from '@/constants/string';
import { categories, cities, services } from '@/constants/string';
import CategoryCard from '@/module/CategoryCard';

const HomePage = () => {
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
      <div className="my-[50px] flex flex-wrap justify-center px-0 sm:justify-between">
        {Object.keys(categories).map((item) => (
          <CategoryCard
            key={item}
            title={categories[item as keyof CategoriesType]}
            name={item}
          />
        ))}
      </div>

      <div className="my-[100px] px-0">
        <h3 className="text-blue-main text-center text-[2rem] font-semibold">
          شهرهای پر بازدید
        </h3>
        <ul className="my-[50px] flex flex-wrap justify-center sm:justify-between">
          {cities.map((item) => (
            <li
              className="bg-banner my-2.5 flex w-[250px] items-center justify-center rounded-lg p-2.5 px-0 text-[1.2rem]"
              key={item}
            >
              <FaCity />
              <span className="ms-[15px] h-[30px] font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
