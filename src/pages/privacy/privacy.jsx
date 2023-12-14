import appConfig from "../../configs";

export const PrivacyPage = () => {
  return (
    <div className="py-8">
      <div className="px-2 lg:container text-neutral-500">
        <h4 className="font-bold text-lg text-neutral-900 uppercase mb-2">
          {appConfig.company.name}
        </h4>

        <div className="mb-8">
          <div>Địa chỉ: {appConfig.company.address}</div>
          <div>Điện thoại: {appConfig.company.phoneNumber}</div>
          <div>Mã số doanh nghiệp: {appConfig.company.businessCode}</div>
          <div>Website: {appConfig.company.website}</div>
          <div>Email: {appConfig.company.email}</div>
        </div>

        <p className="mb-5">
          Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu
          thập và sử dụng thông tin cá nhân của mình thông qua việc sử dụng
          trang web, bao gồm mọi thông tin có thể cung cấp thông qua trang web
          khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ
          chúng tôi, hoặc khi Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm
          thông tin dịch vụ từ chúng tôi.
        </p>

        <h5 className="mb-5 font-bold text-lg text-neutral-900">
          Chính sách bảo mật thông tin
        </h5>

        <div className="mb-4 font-bold">1. Mục đích sử dụng thông tin</div>
        <p className="mb-4">- Thiết lập thẻ thành viên</p>
        <p className="mb-4">
          - Nếu khách hàng đăng kí nhận email thông báo,{" "}
          <span className="font-bold uppercase">
            Công ty cổ phần Thường Tín Market
          </span>{" "}
          sẽ gửi thông tin liên quan đến sản phẩm, chương trình khuyến mãi và
          các sự kiện qua email.
        </p>

        <div className="mb-4 font-bold">2. Phạm vi sử dụng thông tin</div>
        <p className="mb-4">
          -{" "}
          <span className="font-bold uppercase">
            Công ty cổ phần Thường Tín Market
          </span>{" "}
          không cung cấp hay chia sẻ thông tin cá nhân của khách hàng cho một
          bên thứ ba nào khác
        </p>
        <p className="mb-4">
          - Thông tin cá nhân khách hàng sẽ chỉ được sử dụng trong nội bộ với
          mục đích như trên
        </p>
      </div>
    </div>
  );
};
