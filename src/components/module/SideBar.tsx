import Link from 'next/link';
import { HiFilter } from 'react-icons/hi';

import { categories } from '@/constants/string';
import { CategoriesType } from '@/constants/string';

const SideBar = () => {
  return (
    <div className="flex flex-col">
      <p className="flex text-[1.2rem] font-normal">
        <HiFilter className="text-blue-main me-[5px] text-[1.3rem]" />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={i}
          href={{ pathname: '/buy-residential', query: { categories: i } }}
        >
          {categories[i as keyof CategoriesType]}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
