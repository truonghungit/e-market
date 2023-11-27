import appConfig from "../../configs";

export const TermsPage = () => {
  return (
    <div className="py-8">
      <div className="container text-neutral-500">
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

        <h5 className="mb-5 text-lg font-bold text-neutral-900">
          Điều khoản dịch vụ
        </h5>

        <div className="mb-4 font-bold">1. Giới thiệu</div>
        <p className="mb-4">
          Chào mừng quý khách hàng đến với website chúng tôi.
        </p>
        <p className="mb-4">
          Khi quý khách hàng truy cập vào trang website của chúng tôi có nghĩa
          là quý khách đồng ý với các điều khoản này. Trang web có quyền thay
          đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản mua
          bán hàng hóa này, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay
          khi được đăng trên trang web mà không cần thông báo trước. Và khi quý
          khách tiếp tục sử dụng trang web, sau khi các thay đổi về Điều khoản
          này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi
          đó.
        </p>
        <p className="mb-4">
          Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật những thay
          đổi của chúng tôi.
        </p>

        <div className="mb-4 font-bold">2. Hướng dẫn sử dụng website</div>
        <p className="mb-4">
          Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi, hoặc
          truy cập dưới sự giám sát của cha mẹ hay người giám hộ hợp pháp. Khách
          hàng đảm bảo có đầy đủ hành vi dân sự để thực hiện các giao dịch mua
          bán hàng hóa theo quy định hiện hành của pháp luật Việt Nam.
        </p>
        <p className="mb-4">
          Trong suốt quá trình đăng ký, quý khách đồng ý nhận email quảng cáo từ
          website. Nếu không muốn tiếp tục nhận mail, quý khách có thể từ chối
          bằng cách nhấp vào đường link ở dưới cùng trong mọi email quảng cáo.
        </p>

        <div className="mb-4 font-bold">3. Thanh toán an toàn và tiện lợi</div>
        <p className="mb-4">
          Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa
          chọn áp dụng phương thức phù hợp:
        </p>
        <p>
          Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người
          bán)
        </p>
        <p>Cách 2: Thanh toán sau (COD - giao hàng và thu tiền tận nơi)</p>
        <p>Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản</p>

        <p className="mb-10"></p>
      </div>
    </div>
  );
};
