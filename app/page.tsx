import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black flex-col justify-start items-start inline-flex overflow-hidden w-full">
      <div className="self-stretch grow shrink basis-0 px-6 pt-4 flex-col justify-start items-center flex">
        <div className="pt-[170px] flex-col justify-start items-center gap-8 flex relative z-20">
          <div className="flex-col justify-start items-center gap-1.5 flex">
            <div className="text-center text-[#a4fb0e] text-7xl font-medium font-chakra leading-[86.40px]">
              Unleash the Power of AI
            </div>
            <div className="text-center text-white text-xl font-medium font-bricolage leading-[27px]">
              Teach and customize your AI to adapt, learn, and deliver insights
              tailored to your unique needs.
            </div>
          </div>
          <div className="w-[142px] px-3.5 py-2 bg-[#a4fb0e] justify-center items-center inline-flex overflow-hidden">
            <div className="px-1 justify-center items-center gap-2.5 flex">
              <div className="text-center text-black text-lg font-semibold font-chakra leading-relaxed">
                Start now
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 w-full z-10">
          <Image
            src="/imgs/bg-home.svg"
            alt=""
            className="object-cover w-full"
           width={2560}
           height={615}
          />
        </div>
      </div>
    </div>
  );
}
