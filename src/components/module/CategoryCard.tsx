import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  name: string;
}

const CategoryCard = ({ title, name }: CategoryCardProps) => {
  return (
    <div className="shadow-form my-2.5 overflow-hidden rounded-2xl p-2.5 px-0 transition-all delay-75 ease-in hover:rotate-[-5deg]">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
          className="rounded-[10px]"
        />
        <p className="text-blue-main mt-2.5 mb-[5px] px-0 text-center text-[1.2rem] font-normal">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
