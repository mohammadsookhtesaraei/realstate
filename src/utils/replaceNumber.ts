// تبدیل اعداد انگلیسی به فارسی
const e2p = (s: string | number): string =>
  s.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d, 10)]);

// تبدیل اعداد فارسی به انگلیسی
const p2e = (s: string | number): string =>
  s.toString().replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());

// جدا سازی هزارگان و تبدیل به اعداد فارسی
const sp = (number: string | number): string => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

  if (!seperatedNumber) return '';

  const joinedNumber = seperatedNumber.join(',');
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
