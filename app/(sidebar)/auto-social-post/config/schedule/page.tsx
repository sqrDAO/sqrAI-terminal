import Image from "next/image";
import Link from "next/link";
import PaginationControls from "../../PaginationControls";

const ScheduleList = () => {
  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-['Chakra Petch'] leading-[37.50px]">
              Auto generate social post <span className="text-[10px] font-chakra text-[#A4FB0E]">(comming soon)</span>
            </div>
          </div>
          <Image
            className="w-[110px] h-[110px]"
            width={110}
            height={110}
            alt=""
            src="/imgs/page-3.svg"
          />
        </div>
        <div className="self-stretch border-b border-[#dcff9f] justify-start items-center gap-4 inline-flex">
          <Link
            href={"/auto-social-post/config/posts-list"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Posts list
            </div>
          </Link>
          <Link
            href={"#"}
            className="px-4 py-3 border-b-2 border-[#a4fb0e] justify-center items-center gap-2.5 flex"
          >
            <div className="text-[#a4fb0e] text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Schedule
            </div>
          </Link>
          <Link
            href={"/auto-social-post/config/setting"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Setting
            </div>
          </Link>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex mx-auto mt-10">
        <div className="self-stretch h-[462px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[462px] py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
            <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 p-4 border border-[#dcff9f] flex-col justify-center items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-[#c5ff53] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">
                  + Add a new time to generate content
                </div>
              </div>
            </div>

            <table className="self-stretch h-[300px] w-[936px] border-collapse">
              <thead>
                <tr className="border-b border-[#444444]">
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Name
                  </th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Content generate time
                  </th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Schedule
                  </th>
                  <th className="px-5 py-2.5 text-right text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {["Morning post", "Morning post", "Morning post"].map(
                  (post, index) => (
                    <tr key={index} className="border-b border-[#444444]">
                      <td className="px-5 py-4 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                        {post}
                      </td>
                      <td className="px-5 py-4 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                        04:55 PM
                      </td>
                      <td className="px-5 py-4 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                        Post at 07:30 PM
                      </td>
                      <td className="px-5 py-4 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight flex justify-end">
                        <div className="w-5 h-5 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5 0.833496L12.5 5.8335L7.5 5.8335L7.5 0.833496L12.5 0.833496ZM10.8333 2.50016L9.16667 2.50016L9.16667 4.16683L10.8333 4.16683L10.8333 2.50016ZM12.5 7.50016L12.5 12.5002L7.5 12.5002L7.5 7.50016L12.5 7.50016ZM10.8333 9.16683L9.16667 9.16683L9.16667 10.8335L10.8333 10.8335L10.8333 9.16683ZM12.5 14.1668L12.5 19.1668L7.5 19.1668L7.5 14.1668L12.5 14.1668ZM10.8333 15.8335L9.16667 15.8335L9.16667 17.5002L10.8333 17.5002L10.8333 15.8335Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <PaginationControls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
