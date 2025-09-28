

const Footer = () => {
  return (
 <footer className="font-extralight flex justify-between p-5 mt-20 mb-5 rounded-lg bg-blue-main text-white">
      <div className="w-[70%] text-justify ml-7">
        <h3 className="font-semibold text-2xl mb-2.5">سامانه خرید و اجاره ملک</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul className="list-disc">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer