import React, { useEffect, useState } from "react";
import API from "./Utility/API";

const News = () => {
  const videos = [
    "./videos/news1.mp4",
    "./videos/news2.mp4",
    "./videos/news3.mkv",
    "./videos/news4.mp4",
    "./videos/news5.mp4",
    "./videos/news6.mp4",
  ];

  const [news, setnews] = useState([]);

  //i will display news in this page
  useEffect(() => {
    API.getnews()
      .then((res) => {
        console.log(res);
        setnews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-0 px-2">
        <div className="flex justify-center    mb-0">
          <i className="mt-3">
            ማሕበርና <i className="text-green-600">ህንፀት ኩለመዳይ ዕዳጋ ማእኸል ኣሉላ</i> ሕጋዊ
            ሰውነት ረኺባ ተመስሪታ ኣላ። ማሕበር ብናይ ኣባላታ ሰናይ ድሌት ዝተመስረተት ማሕበር እንትትኸውን ኣባላታ
            ድማ{" "}
            <i className="text-red-500">
              ህልዊ ኣብ ሰራዊት ዘለዉ፣ ብኽብሪ ዝተሰናበቱ ሓርበኛታትን ስድራ ስውኣትን
            </i>{" "}
            ዝሓዘት ማሕበር እያ። ማሕበርና ካብ ብረታዊ ቃልሲ ዘይነኣኣስ ኣብ ኢኮኖምያዊ ምንቅስቓስ እውን ናይ ባዕላ
            ኣወንታዊ ተራ ንኽትፃወት ተመስሪታ ኣብ ዝለዓለ ወነን ምንቅስቓስ ዘላ ማሕበር እያ። !
          </i>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          {videos.map((video, index) => (
            <li
              key={index}
              className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400"
            >
              <a className="relative" href="#">
                <div className="relative w-full aspect-video">
                  <img
                    src="./cert.jpg"
                    alt=""
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                </div>
              </a>
              <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                <h3 className="text-lg font-bold">
                  ማሕበርና ህንፀት ኩለመዳይ ዕዳጋ ማእኸል ኣሉላ ሕጋዊ ሰውነት ረኺባ ተመስሪታ ኣላ
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
