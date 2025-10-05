import React from 'react';
import Markdown from 'react-markdown';
import DefaultLayout from '~/components/Layouts/DefaultLayout';

function UseAtHome() {
  const content = `# Cách sử dụng phương pháp hồi tưởng tại nhà

  Có thể thực hiện cùng với gia đình, vợ/chồng hoặc một mình.

  Cùng xem lại những hình ảnh, hay chương trình đã được phát sóng trong thời thơ ấu hoặc tuổi trẻ. Sau đó, đối với những chương trình đáng nhớ hoặc đã từng yêu thích, cùng nhau trò chuyện về những kỷ niệm và cảm nhận khi chương trình đó được phát sóng. Nếu ông/bà làm điều này một mình, hãy ghi lại những điều đáng nhớ hoặc đã cảm nhận vào một cuốn sổ và sau đó tự tạo cơ hội trò chuyện với ai đó.

  Chi tiết gồm các bước sau:

### Bước 1: Tìm hình ảnh hoặc video để xem

Hãy chọn những hình ảnh hoặc video mà ông/bà hoặc người cùng xem nhớ đến.

Để nhanh chóng tìm lại những ký ức ngày xưa, một trong những phương pháp đó là tìm kiếm những hình ảnh hoặc video thời thơ ấu hoặc vào những năm ông/bà hoặc người mình cùng xem lần đầu tiên xem.
 

### Bước 2: Xem hình ảnh hoặc video

Hãy trò chuyện với nhau về những điều khiến ông/bà gợi nhớ lại, nhận ra và cảm nhận khi xem cẩn thận hình ảnh, các động tác và âm thanh trong chương trình.

Hãy lắng nghe cẩn thận những từ ngữ mà đối phương tự nhiên sử dụng (như "nhớ quá", "tôi cũng đã từng như thế này", v.v.). Hãy lắng nghe để tiếp tục câu chuyện bằng cách lặp lại những gì đối phương nói.

Nếu người tham gia không nói chuyện một cách tự nhiên, hãy thử bắt chuyện bằng cách gợi ý trực tiếp. Ví dụ, người hỗ trợ có thể hỏi: "Ông /bà có từng làm việc đó không?" hoặc "Ông/bà đã nghe thấy âm thanh này, phải không?". Ngoài ra, hãy đặt câu hỏi như "Ông/bà đã xem khi nào, với ai và  ở đâu?" để khơi gợi cuộc trò chuyện.

![alt](https://cdn.thuvienhoituong.com/images/common/UseAtHome_1.jpg)

### Bước 3: Thảo luận dựa trên các câu hỏi sau khi xem

Chọn hình ảnh hoặc hình ảnh mà ông/bà hoặc người cùng xem đã chọn để xem. Trong quá trình này, ông/bà hãy tập trung và chú ý đến những chi tiết như trang phục, kiểu tóc của nhân vật, phương tiện di chuyển, kiến trúc, đồ dùng, cũng như cách sống và tình hình xã hội tại thời điểm đó.

Hãy thử trả lời những câu hỏi sau:

* Trang phục và kiểu tóc của nhân vật thế nào?
* Phương tiện di chuyển, kiến trúc và đồ dùng như thế nào?
* Cách sống và tình hình xã hội tại thời điểm đó có gì đặc biệt?
* Ngôn ngữ, biểu hiện và cách diễn đạt được sử dụng trong hình ảnh?
* Cảm xúc và tâm trạng của các nhân vật như thế nào vào thời điểm đó?
* Bản thân ông/bà cảm nhận thế nào khi xem hình ảnh đó?

※ Để ông/bà có thể chia sẻ những câu chuyện kỷ niệm, hãy thử xem các chương trình khác nhau.

※ Chẳng phải sẽ thú vị hơn nếu như ông/bà viết ra những điều bản thân yêu thích, ghi nhớ, hay những nội dung bản thân chợt nhớ đến. 

![alt](https://cdn.thuvienhoituong.com/images/common/UseAtHome_2.jpg)
`;

  return (
    <DefaultLayout useAtHome={true}>
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
      </div>
    </DefaultLayout>
  );
}

export default UseAtHome;
