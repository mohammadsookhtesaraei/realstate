import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePicker from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';
import { ProfileDataType } from 'src/components/templates/AddProfilePage';

interface CustomDatePickerProps {
  profileData: ProfileDataType;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileDataType>>;
}

const CustomDatePicker = ({
  profileData,
  setProfileData,
}: CustomDatePickerProps) => {
  const changeHandler = (event: DateObject | null) => {
    if (!event) return;
    const date = event.toDate();
    setProfileData((prev) => ({ ...prev, constructionDate: date }));
  };
  return (
    <div className="mb-[60px]">
      <p className="mb-1.5 text-base">تاریخ‌ساخت</p>
      <DatePicker
        inputClass="w-[110px] h-[30px] me-2.5 border  focus:outline-none focus:border-solid focus:border-blue-main text-center border-blue-main border-dashed text-base text-gray-400 rounded-md p-2.5 "
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default CustomDatePicker;
