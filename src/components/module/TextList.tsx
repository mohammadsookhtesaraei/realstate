import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { type ProfileDataType } from 'src/components/templates/AddProfilePage';

type ListKeys = 'rules' | 'amenities';

interface TextListProps {
  title: string;
  type: ListKeys;
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
}

const TextList = ({
  title,
  profileData,
  setProfileData,
  type,
}: TextListProps) => {
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list: string[] = [...profileData[type]];
    list[index] = value;
    setProfileData((prev) => ({ ...prev, [type]: list }));
  };
  const addHandler = () => {
    setProfileData((prev) => ({ ...prev, [type]: [...prev[type], ''] }));
  };

  const deleteHandler = (index: number) => {
    const list = [...profileData[type]];
    const finalList = list.filter((_, i) => i !== index);
    setProfileData((prev) => ({ ...prev, [type]: finalList }));
  };
  return (
    <div className="mb-10">
      <p className="mb-1.5 text-base">{title}</p>
      {profileData[type].map((i, index) => (
        <div className="my-2.5 flex" key={index}>
          <input
            className="border-blue-main me-2.5 h-[30px] w-[300px] rounded-md border border-dashed text-base text-gray-400 focus:border-solid focus:outline-none"
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            className="m-0 flex items-center gap-2 rounded-md border border-solid border-red-500 bg-white px-1.5 py-1 leading-[10px] text-red-500"
            onClick={() => deleteHandler(index)}
          >
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}

      <button
        className="bg-blue-main mt-5 flex cursor-pointer items-center gap-2 rounded-md border-none px-2 py-1 text-base text-white transition-all delay-75 ease-in hover:bg-blue-950"
        onClick={addHandler}
      >
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default TextList;
