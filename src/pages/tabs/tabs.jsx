import { useEffect, useRef, useState } from "react";
import appConfig from "../../configs";
import { Rating } from "../../components/rating/rating";

export const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex space-x-3 border-t">
          <button
            ref={(el) => (tabsRef.current[0] = el)}
            className={`pt-2 pb-3 uppercase tab-button text-sm font-bold ${
              activeTabIndex === 0
                ? "text-[rgba(17,17,17,.85)]"
                : "text-[rgba(102,102,102,.85)]"
            }`}
            onClick={() => setActiveTabIndex(0)}
          >
            Mô tả
          </button>
          <button
            ref={(el) => (tabsRef.current[1] = el)}
            className={`pt-2 pb-3 uppercase tab-button text-sm font-bold ${
              activeTabIndex === 1
                ? "text-[rgba(17,17,17,.85)]"
                : "text-[rgba(102,102,102,.85)]"
            }`}
            onClick={() => setActiveTabIndex(1)}
          >
            Đánh giá
          </button>
        </div>
        <span
          className="absolute top-0 block h-[2px] bg-[#007cba] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        {activeTabIndex === 0 && (
          <div>
            <p>Sản phẩm 100% chính hãng</p>
            <p>Đổi trả miễn phí trong 3 ngày </p>
            <p>Mua hàng trả góp lãi xuất ưu đãi </p>
            <p>Bảo hành tận nơi sử dụng trong nội thành </p>
            <p>Giá cạnh tranh nhất thị trường </p>
            <p>Vệ sinh cài Win Trọn đời </p>
            <p>Free ship toàn miền bắc </p>

            <div className="py-8">
              <div className="uppercase mb-4 font-bold text-gray-500">
                Liên hệ
              </div>
              <h4 className="font-bold uppercase mb-2">
                {appConfig.company.name}
              </h4>

              <div className="text-neutral-500">
                <div>Dịa chỉ: {appConfig.company.address}</div>
                <div>Điện thoại: {appConfig.company.phoneNumber}</div>
                <div>Mã số doanh nghiệp: {appConfig.company.businessCode}</div>
                <div>Website: {appConfig.company.website}</div>
                <div>Email: {appConfig.company.email}</div>
              </div>
            </div>
          </div>
        )}
        {activeTabIndex === 1 && (
          <div>
            <div className="font-bold text-lg mb-4">Đánh giá</div>
            <p className="text-neutral-500">Chưa có đánh giá nào.</p>

            <div className="mt-4">
              <form className="border-2 border-[#007cba] p-5">
                <div className="font-bold text-md mb-2">
                  Hãy là người đầu tiên nhận xét{" "}
                </div>

                <div className="mb-3">
                  <label className="font-semibold text-sm">
                    Đánh giá của bạn *
                  </label>
                  <div>
                    <Rating />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="font-semibold text-sm">
                    Nhận xét của bạn *
                  </label>

                  <textarea
                    className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 mb-3">
                  <div className="w-full lg:w-1/2">
                    <label className="font-semibold text-sm">Tên *</label>

                    <input
                      type="text"
                      className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <label className="font-semibold text-sm">Email *</label>

                    <input
                      type="text"
                      className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="checkbox" id="save-info" />
                  <label
                    className="font-semibold text-sm ml-3"
                    htmlFor="save-info"
                  >
                    Lưu tên của tôi, email, và trang web trong trình duyệt này
                    cho lần bình luận kế tiếp của tôi.
                  </label>
                </div>

                <div>
                  <button className="uppercase text-white bg-[#007cba] font-bold px-4 py-2">
                    Gửi đi
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
