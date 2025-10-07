import { type ProfileDataType } from 'src/components/templates/AddProfilePage';

interface TextInputProps {
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
}

const RadioList = ({ profileData, setProfileData }: TextInputProps) => {
  const { category } = profileData;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-10">
      <p className="text-md mb-1.5">دسته بندی</p>
      <div className="flex">
        <div className="bg-dashboard text-blue-main me-8 flex w-[70px] cursor-pointer items-center justify-evenly rounded-md p-1">
          <label htmlFor="villa">ویلا</label>

          <input
            type="radio"
            id="villa"
            name="category"
            value="villa"
            checked={category === 'villa'}
            onChange={changeHandler}
          />
        </div>

        <div className="bg-dashboard text-blue-main me-8 flex w-[70px] cursor-pointer items-center gap-1 rounded-md p-1">
          <label htmlFor="apartment">اپارتمان</label>
          <input
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            checked={category === 'apartment'}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-dashboard text-blue-main me-8 flex w-[70px] cursor-pointer items-center gap-1 rounded-md p-1">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            id="store"
            name="category"
            value="store"
            checked={category === 'store'}
            onChange={changeHandler}
          />
        </div>
        <div className="bg-dashboard text-blue-main me-8 flex w-[70px] cursor-pointer items-center gap-1 rounded-md p-1">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            id="office"
            name="category"
            value="office"
            checked={category === 'office'}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;
