import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

import { LanguageContext } from "../components/contextprovider/Language";
const About = () => {
  const { contextData } = useContext(LanguageContext);

  //console.log("your language is" + contextData.Language);
  return (
    <div className="lg:mt-3   mt-3  ">
      <section className=" flex gap-3 flex-col lg:flex-row w-full">
        <div className="py-3 w-full bg-white lg:w-[70%] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-green-900 sm:text-4xl lg:text-center">
                {/* {contextData.Language == "English" ? "TDF assocition" : "ማሕበር ህንፀት ዘመናዊ ማእኸል ዕዳጋ(ሞል) ኣሉላ"} */}
                ህንፀት ኩለ መዳይ ማእኸል ዕዳጋ ኣሉላ
              </p>
              <p className="mt-1  text-lg  text-black  ">
                ፈላማይ ኣፍሪካዊ
                <i className="text-green-400 font-bold"> ጀነራል ራእሲ ኣሉላ ኣባ ነጋ </i>
                ኣብ ከባቢ ተምቤን መነወ ተባሂሉ ኣብ ዝፅዋዕ ቦታ ተወሊዱ ዝዓበየ ካብ{" "}
                <i className="text-blue-700">1827-1897 </i>
                ዓ/ም/ፈ ዝነበረ ስሙይ ኣዋጋኣይን ተዋግኣይን ጀነራል እዩ። <br />
                <i className="text-green-400 font-bold"> ራእሲ ኣሉላ ኣባ ነጋ</i> ቅድሚ
                ዓወት ኲናት ዓድዋ ኣብ ኩፊት፣ ደጉዓሊ፣ሰሓጢት፣ ጉንደትን ጉራዕን ኣንፃር ባዕዳውያን ወረርቲ ገጢሙ
                ብዓወት ዝዛዘመ ስሙይ ጀነራል እዩ ነይሩ።ራስ ኣሉላ ኣብ ነጋ ፈታዊ ዓዱ፣ ቆራፅ፣ ጅግና፣ በሊሕን
                መስተውዓልን ብዝኾነ ጥቕሚ ይኹን ምፍርራሕ ዓዱ ኣሕሊፉ ዘይህብ ኣብ ታሪኽ ትግራኛ ተዛረብቲ ህዝብን፣
                ህዝብታት ኢትዮጵያን ናይ ባዕሉ ዓብዪ ታሪኻዊ ዓሻራ ዘዕረፈን ኢትዮጵያ ብባዕዳዊ ወረርቲ ከይተደፈረት
                ምስ ክብራ ክትቕፅል ዝገበረ ጅግና እዩ ነይሩ። <br />
                <br />
                በዚ ስሙይ ፈላማይ ኣፍሪካዊ ጀነራል ዝተሰየመት ማሕበርና ማሕበር{" "}
                <i className="text-blue-700"> ህንፀት ዘመናዊ ማእኸል ዕዳጋ(ሞል)</i> ኣሉላ ኣብ{" "}
                <i className="text-red-500">ጀኖሳይዳዊ ኲናት ትግራይ </i>ታሪኻዊ ኣበርክቶ ብዝፈፀሙ
                ጀጋኑ ተጋደልቲ፣ ጀጋኑ ሓርበኛታትን ስድራ ስውኣትን ዝተመስረተት ማሕበር ኾይና፣ዘመናዊ ማእኸል ዕዳጋ
                ሃኒፃ ኣብ ኢኮኖምያዊ ረብሓ ኣባላታን ትግራይ ናይ ባዕላ ኣወንታዊ ተራ ንኽትፃወት ትንቀሳቐስ ዘላ
                ማሕበር እያ።
                <br />
                <br />
                <div>
                  <i className="text-blue-700 text-2xl block text-center">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                    <FontAwesomeIcon icon={faUsers} /> ኣባላት እዛ ማሕባር <br />
                  </i>
                  <br />
                  <div className="mx-auto " style={{ width: "40%" }}>
                    <FontAwesomeIcon icon={faUser} /> ሕዚ ኣብ ሰራዊት ዘለዉ <br />
                    <FontAwesomeIcon icon={faUser} /> ብኽበሪ ዝተሰናበቱ
                    <br />
                    <FontAwesomeIcon icon={faUser} /> ስድራ ስውኣት
                    <br />
                  </div>
                </div>
                <br />
                እዞም ትግራይ ንኸይትውረር{" "}
                <i className="text-red-700">
                  ክቡር መስዋእቲ ዝኸፈሉ፣ ናይ ኣካል መጉዳእቲ ዝበፅሖም ሓርበኛታት፣{" "}
                </i>
                ሕዚ እውን ምእንተ ትግራይ ኣብ ፈቐዶ በረኻ ዘለዉ ጀጋኑን ስድራ ጀጋኑን ብ ኢኮኖሚ ዓርሶም ክኽእሉ፣
                ቁጠባዊ ዓቕሞም ከዕብዩን ስድርኦም ክልውጡን ከመሓደሩን ኣብ ጎኖም ኾይንና ኣጆኹም ክንብሎምን መንግስቲ
                ይኹን ኩሉ ክፋል ሕብረተሰብ ናይ ባዕሉ ተራ ክፃወት ኣለዎ።
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:mt-4 w-full lg:w-[30%]   ">
          <div className=" w-full  ">
            <img src="./allula.PNG" alt="" />
          </div>
          <div className="w-full ">
            <img src="./cert.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
