import appConfig from "../../configs";

export const ReturnPolicyPage = () => {
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

        <h5 className="mb-5 text-lg font-bold text-neutral-900">
          Chính sách đổi / trả hàng
        </h5>

        <div className="mb-4 font-bold">1. Quy Định Đổi Hàng.</div>
        <p className="mb-4">Phạm vi và đối tượng áp dụng:</p>
        <p className="mb-4">
          - Các khách hàng mua hàng online hoặc mua hàng tại cửa hàng tại các
          showroom CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET trên toàn quốc.
        </p>
        <p className="mb-4">Chính sách áp dụng:</p>
        <p className="mb-4">
          - Sản phẩm nguyên giá & giảm giá dưới 50% được đổi sang sản phẩm khác.
          Tổng giá trị các mặt hàng muốn đổi phải có giá trị tương đương hoặc
          lớn hơn với mặt hàng trả lại. CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET không
          hoàn lại tiền thừa trong trường hợp sản phẩm mới có giá trị thấp hơn
          sản phẩm đã mua.
        </p>
        <p className="mb-4">
          - Sản phẩm giảm giá từ 50% trở lên được đổi màu/size (nếu còn hàng)
          hoặc theo quy chế từng chương trình (nếu có) - Không hỗ trợ đổi sang
          sản phẩm khác.
        </p>
        <p className="mb-4">
          - Sản phẩm không áp dụng đổi bao gồm: đồ lót, sản phẩm được tặng kèm
          trong các chương trình.
        </p>
        <p className="mb-4">- Không giới hạn số lần đổi</p>
        <p className="mb-4">
          - Sản phẩm đổi sẽ tính theo chương trình tại thời điểm khách hàng đã
          mua hàng.
        </p>
        <p className="mb-4">
          - Trường hợp khách hàng muốn trả hàng vì bất cứ lý do gì sẽ được xét
          duyệt theo từng trường hợp cụ thể từ P.CLDV hoặc GĐKD.
        </p>
        <p className="mb-4">Điều kiện đổi sản phẩm:</p>
        <p className="mb-4">
          - Đổi hàng trong vòng 07 ngày kể từ ngày khách hàng nhận được sản phẩm
        </p>
        <p className="mb-4">
          - Sản phẩm còn trong tình trạng ban đầu khi nhận hàng, còn nguyên tem
          và nhãn mác.
        </p>
        <p className="mb-4">
          - Sản phẩm chưa qua giặt ủi hoặc bẩn, bị hư hỏng, chưa bị mùi lạ (nước
          hoa, cơ thể…), chưa qua sử dụng
        </p>

        <div className="mb-4 font-bold">2. Quy Định Trả Hàng.</div>
        <p className="mb-4">Chính sách áp dụng:</p>
        <p className="mb-4">
          - Khách hàng được trả sản phẩm trong trường hợp có lỗi phát sinh từ
          nhà sản xuất và không có nhu cầu đổi sang sản phẩm khác.
        </p>
        <p className="mb-4">
          - Các trường hợp lỗi do nhà sản xuất gồm: phai màu, lỗi chất liệu,…
        </p>
        <p className="mb-4">
          - Hoàn tiền lại sản phẩm gặp lỗi qua tài khoản ngân hàng.
        </p>
        <p className="mb-4">
          - CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET chịu 100% chi phí vận chuyển trả
          lại hàng.
        </p>
        <p className="mb-4">
          Một hoặc một vài sản phẩm trong đơn hàng không thể giao cho khách,
          hoàn tiền 1 lại sản phẩm không giao được (áp dụng mua hàng online với
          thanh toán trả trước).
        </p>
        <p className="mb-4">
          - CÔNG TY CỔ PHẦN THƯỜNG TÍN MARKET xác minh lỗi trong 1-3 ngày và có
          phản hồi lại khách hàng thời gian xử lý tiếp theo với từng trường hợp
          cụ thể.
        </p>
        <p className="mb-4">Điều kiện trả sản phẩm</p>
        <p className="mb-4">
          Trả sản phẩm trong vòng 10 ngày kể từ ngày nhận sản phẩm.
        </p>
        <p className="mb-4">Chính sách hoàn tiền.</p>
        <p className="mb-4">
          - Đối với trường hợp thanh toán trước, khách hàng sẽ được hoàn tiền
          khi hàng nhận bị lỗi do sản xuất và khách hàng trả hàng không có nhu
          cầu đổi sang sản phẩm khác.
        </p>
        <p className="mb-4">
          - Thời gian hoàn tiền: từ 01 đến 03 ngày kể từ khi CÔNG TY CỔ PHẦN
          THƯỜNG TÍN MARKET nhận được hàng trả từ khách hàng. Tiền được hoàn vào
          tài khoản cá nhân của khách hàng cung cấp.
        </p>

        <p className="mb-10"></p>
      </div>
    </div>
  );
};
