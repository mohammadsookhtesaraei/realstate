import { p2e } from '@/utils/replaceNumber';
import { type ProfileDataType } from 'src/components/templates/AddProfilePage';

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
  const changeHandler = (  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {name,value}=e.target;
  setProfileData((prev)=>({...prev,[name]:p2e(value)}));
  };
  return (
    <div>
      <p>{title}</p>
      {textarea ? (
        <textarea name={name} value={value} onChange={changeHandler} />
      ) : (
        <input
          type={profileData[name] instanceof Date ? 'date' : 'text'}
          name={name}
          value={value}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
