import { type ProfileDataType } from 'src/components/templates/AddProfilePage';

import { p2e } from '@/utils/replaceNumber';

interface TextInputProps {
  title: string;
  name: keyof ProfileDataType;
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
  textarea?: boolean;
}

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}: TextInputProps) => {
  const value =
    typeof profileData[name] === 'string'
      ? profileData[name]
      : profileData[name] instanceof Date
        ? profileData[name].toISOString().split('T')[0] // تبدیل تاریخ به string (YYYY-MM-DD)
        : ''; // برای آرایه‌ها و بقیه نوع‌ها مقدار خالی بده
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: p2e(value) }));
  };
  return (
    <div>
      <p className="text-md mb-1.5">{title}</p>
      {textarea ? (
        <textarea
          className="border-blue-main mb-10 h-28 w-[300px] rounded-md border border-dashed p-2.5 text-lg text-gray-400 focus:border-solid focus:outline-none"
          name={name}
          value={value}
          onChange={changeHandler}
        />
      ) : (
        <input
          type={profileData[name] instanceof Date ? 'date' : 'text'}
          name={name}
          value={value}
          onChange={changeHandler}
          className="border-blue-main mb-10 h-10 w-[300px] rounded-md border border-dashed p-2.5 text-lg text-gray-400 focus:border-solid focus:outline-none"
        />
      )}
    </div>
  );
};

export default TextInput;
