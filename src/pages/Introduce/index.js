import React from 'react';
import DefaultLayout from '~/components/Layouts/DefaultLayout';

function Introduce() {
  return (
    <DefaultLayout introduce={true}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-12 markdown">
        <h1>Liệu pháp hồi tưởng là gì?</h1>
        <div className="flex justify-center items-center">
          <video width="100%" controls src="/videos/gioi-thieu-lieu-phap-hoi-tuong.mp4"></video>
        </div>
        <p className="text-3xl my-4 text-center font-semibold text-[#16d9cf]">Dự án thư viện liệu pháp hồi tưởng</p>
        <p className="indent-8">
          Theo Tiến sĩ, Bác sĩ Trần Công Thắng, hồi tưởng là quá trình gợi lại những kí ức từ quá khứ thông qua các đồ
          vật, hình ảnh và sự kiện cá nhân. Đây được xem là một phương pháp kích thích hoạt động não bộ, giúp duy trì
          trí nhớ và khuyến khích sự tích cực để phòng ngừa trầm cảm ở người cao tuổi. Đặc điểm của não bộ người cao
          tuổi là khả năng lưu giữ những kí ức xa xưa một cách đáng kinh ngạc, mặc dù họ có thể quên đi những chi tiết
          mới chỉ vừa diễn ra. Phương pháp hồi tưởng giúp tăng cường lòng tự tin, thúc đẩy sự tích cực trong các hoạt
          động cộng đồng, từ đó cải thiện trí nhớ, giảm thiểu hành vi thụ động và làm giảm áp lực cho người chăm sóc.
          Trên trang web thư viện hồi tưởng này, chúng tôi chia sẻ các hình ảnh, vật phẩm thông thường và các sự kiện từ
          thời trẻ, cùng với hướng dẫn để mọi người có thể thực hiện phương pháp hồi tưởng tại nhà hoặc tại các cơ sở
          dành cho người cao tuổi, nhằm giúp tăng cường trí tuệ và sự tích cực cho người thân của mình.
        </p>
        <img className="max-w-[400px] w-full !important" src="/images/common/BS_Tran_Cong_Thang.webp" alt="" />
        <p className="text-center">TS Trần Công Thắng</p>
        <p className="text-center">Trưởng Bộ môn Thần Kinh - Đại học Y Dược TP. Hồ Chí Minh</p>
        <p className="text-center">Trưởng Đơn vị Trí nhớ và Sa sút trí tuệ - Bệnh viện Đại học Y Dược TP.HCM</p>
      </div>
    </DefaultLayout>
  );
}

export default Introduce;
