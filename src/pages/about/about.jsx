import appConfig from "../../configs";

export const AboutPage = () => {
  return (
    <div className="py-8">
      <div className="container">
        <h4 className="font-bold uppercase mb-2">{appConfig.company.name}</h4>

        <div className="text-neutral-500">
          <div>Địa chỉ: {appConfig.company.address}</div>
          <div>Điện thoại: {appConfig.company.phoneNumber}</div>
          <div>Mã số doanh nghiệp: {appConfig.company.businessCode}</div>
          <div>Website: {appConfig.company.website}</div>
          <div>Email: {appConfig.company.email}</div>
        </div>
      </div>
    </div>
  );
};
