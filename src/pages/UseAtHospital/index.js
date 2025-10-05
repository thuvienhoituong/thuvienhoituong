import React from 'react';
import Markdown from 'react-markdown';
import DefaultLayout from '~/components/Layouts/DefaultLayout';

function UseAtHospital() {
  const content = `# Cách sử dụng phương pháp hồi tưởng ở viện dưỡng lão

![alt](/images/common/hoatdong.jpg)

Tập hợp 4 đến 6 người và dự kiến mất khoảng 1 giờ cho hoạt động này. Tùy thuộc vào độ tuổi của các thành viên tham gia, hãy lựa chọn các tin tức và chương trình đã được phát sóng trong thời thơ ấu hoặc tuổi trẻ của họ để xem. Sau đó, trong quá trình xem hoặc sau khi xem xong, hãy thảo luận về các chương trình gợi nhớ hoặc chương trình yêu thích, chia sẻ kỷ niệm và cảm nhận từ thời điểm chương trình được phát sóng. Sau khi kết thúc buổi hồi tưởng, hãy ghi chép lại những kỷ niệm mà mỗi người chia sẻ, điều đó có thể hữu ích trong cuộc trò chuyện hàng ngày.

Chi tiết gồm các bước sau:

### Bước 1: Chuẩn bị
Chọn một không gian thoải mái trong cơ sở để tiến hành hoạt động hồi tưởng.

Đảm bảo rằng tất cả các thiết bị âm thanh và hình ảnh cần thiết đã được chuẩn bị sẵn.

Hướng dẫn tất cả những người tham gia về mục tiêu của hoạt động hồi tưởng và thời gian dự kiến.

Giới thiệu các chương trình hoặc hình ảnh cũ mà nhóm sẽ xem và thảo luận sau đó.

### Bước 2: Hướng dẫn lựa chọn hình ảnh hoặc video để xem

![alt](/images/common/hoatdong2.jpg)

Dựa trên độ tuổi và các yếu tố khác của người tham gia, một chương trình mà đa số người tham gia có thể hứng thú là các chương trình truyền hình kinh điển từ được phát sóng từ thời niên thiếu của họ. Những bộ phim và những chương trình này thường là một phần không thể thiếu trong ký ức của nhiều người, và chúng có thể gợi lại nhiều cảm xúc và kỷ niệm từ thời thời trẻ của họ.

Để gợi lại những kỷ niệm xa xưa, người hỗ trợ có thể sử dụng các câu hỏi như: "Cụ đã xem vở diễn Tô Ánh Nguyệt lần đầu khi nào? Khi ấy cụ bao nhiêu tuổi?" hoặc "Cụ có xem phim Cánh đồng Hoang (1979) không?" Các câu hỏi này sẽ kích thích những ký ức và truyền cảm hứng cho cuộc trò chuyện và hoạt động hồi tưởng.

### Bước 3: Xem và nhớ lại

![alt](/images/common/hoatdong3.jpg)

Phát các video hoặc hình ảnh đã được nhóm chọn trước đó. Trong quá trình này, khuyến khích mọi người tập trung và chú ý đến những chi tiết như trang phục, kiểu tóc của nhân vật, phương tiện di chuyển, kiến trúc, đồ dùng, cũng như cách sống và tình hình xã hội tại thời điểm đó.

Hãy thử đặt ra những câu hỏi sau:

* Trang phục và kiểu tóc của nhân vật thế nào?
* Phương tiện di chuyển, kiến trúc và đồ dùng như thế nào?
* Cách sống và tình hình xã hội tại thời điểm đó có gì đặc biệt?
* Ngôn ngữ, biểu hiện và cách diễn đạt được sử dụng trong hình ảnh?
* Cảm xúc và tâm trạng của các nhân vật như thế nào vào thời điểm đó?
* Bản thân cụ cảm nhận thế nào khi xem hình ảnh đó?

Lưu ý: Đảm bảo rằng thời gian xem không quá lâu, tùy thuộc vào sự tập trung và sức chịu đựng của những người tham gia.

Đồng thời, do mỗi người tham gia có thể chưa xem tất cả các chương trình, vì vậy hãy xem nhiều loại chương trình khác nhau.

### Bước 4: Thảo luận và hồi tưởng

![alt](/images/common/hoatdong4.jpg)

Sau khi mọi người đã xem xong, hãy mở cuộc trò chuyện và khuyến khích mọi người chia sẻ kỷ niệm và cảm nhận của mình về chương trình hoặc hình ảnh đó.

Sử dụng các câu hỏi từ các bước trước đó để khởi động cuộc trò chuyện về trang phục, ngôn ngữ, cảnh sống, và tình hình xã hội trong thời điểm chương trình được phát sóng.

Ghi lại những kỷ niệm và cảm nhận của mỗi người và lưu trữ chúng để sử dụng trong các cuộc trò chuyện hàng ngày.

### Bước 5: Kết thúc

Cảm ơn mọi người đã tham gia và chia sẻ kỷ niệm của mình trong buổi trò chuyện hồi tưởng.

Đánh dấu lại kết quả của cuộc trò chuyện và đảm bảo rằng tất cả thông tin đã được ghi lại một cách đầy đủ và chính xác để lưu trữ và sử dụng trong tương lai.

※Lưu ý: Đảm bảo rằng hoạt động hồi tưởng được tổ chức trong một không gian an toàn và tôn trọng sự riêng tư của mỗi người tham gia.
`;

  return (
    <DefaultLayout useAtHospital={true}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <Markdown
          className="markdown"
          components={{
            a({ children }) {
              return (
                <a target="_blank" href={children} rel="noreferrer">
                  {children}
                </a>
              );
            },
          }}
        >
          {content}
        </Markdown>
        <img
          className="max-w-[400px] w-full m-auto"
          src="/images/common/lu_quang_minh.jpg"
          alt=""
        />
        <div className="text-center my-4">
          <p>Ông Lữ Quang Minh</p>
          <p>Chủ tịch Hội chữ thập đỏ, Thị trấn Cờ Đỏ, Thành phố Cần Thơ</p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default UseAtHospital;
