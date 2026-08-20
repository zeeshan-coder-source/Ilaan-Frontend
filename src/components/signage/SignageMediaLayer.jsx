import React from "react";

// Display screens image import
import screensImg from "../../assets/LINK/five.png";

// Card background images
import mediaBg from "../../assets/LINK/Card_01.png";
import signageBg from "../../assets/LINK/Card_02.png";
import studioBg from "../../assets/LINK/Card_03.png";

// Small icons for cards
import iconS1 from "../../assets/LINK/F-2.png";
import iconS2 from "../../assets/LINK/F-1.png";
import iconS3 from "../../assets/LINK/F.png";

// Heading component
import HeadersH1 from "../HeadingH1";

export default function MoreThanHardware() {
  const steps = [
    "Pricing is updated in your system",
    "Changes are sent to all labels",
    "Shelves update instantly",
  ];

  return (
    <section
      data-header-theme="light"
      className="w-full bg-[#F3F3E7] text-[#0C0C0E] font-['Poppins',sans-serif] py-16 lg:py-24 px-6 sm:px-10 lg:px-14 min-h-[1146px] flex flex-col justify-center"
    >
      <div className="w-full">

        {/* TOP SECTION: Text Info + Display Screens Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-16 lg:mb-24">

          {/* Left Column: Heading & Workflow */}
          <div className="lg:col-span-5 text-left">
            <div className="mb-6">
              <HeadersH1
                leading="0.8em"
                letterSpacing="-0.06em"
                parts={[
                  { text: 'More Than ', color: '#0C0C0E' },
                  { text: 'Just Hardware', color: '#0C0C0E' }
                ]}
              />
            </div>

            <p className="text-[16px] sm:text-[18px] font-medium text-gray-700 mb-8">
              Ilaan provides more than screens.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-black mb-6">
              Simple, Connected Workflow
            </h3>

            {/* Numbered Workflow Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#D4FB00] text-black font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {index + 1}
                  </div>
                  <span className="text-[15px] sm:text-[16px] font-medium text-gray-800">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[15px] font-medium text-gray-600">
              No manual intervention required.
            </p>
          </div>

          {/* Right Column: Display Screens Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[1146px] aspect-[1146/600] flex items-center justify-center">
              <img
                src={screensImg}
                alt="Ilaan Digital Display Screens"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: 3 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: ILAAN Media */}
          <div
            className="bg-[#000000] text-white rounded-[28px] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl w-full max-w-[504px] mx-auto min-h-[526px] border border-black"
            style={{ backgroundImage: `url(${mediaBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div>
              <div className="w-[142px] h-[99px] mb-6">
                <img src={iconS1} alt="Media Icon" className="w-full h-full object-contain" />
              </div>

              <h4 className="text-[32px] font-bold mb-3">ILAAN Media</h4>
              <p className="text-white text-[20px] leading-[132%] tracking-[0%] font-normal mb-8">
                Plan and run campaigns across connected screens.
              </p>

              <ul className="space-y-4 text-[16px] leading-[132%] tracking-[0%] text-white font-normal">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Launch campaigns without owning infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Access a growing network of locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Extend digital reach into physical spaces</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Digital Signage */}
          <div
            className="bg-[#000000] text-white rounded-[28px] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl w-full max-w-[504px] mx-auto min-h-[526px] border border-black"
            style={{ backgroundImage: `url(${signageBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div>
              <div className="w-[142px] h-[99px] mb-6">
                <img src={iconS2} alt="Signage Icon" className="w-full h-full object-contain" />
              </div>

              <h4 className="text-[32px] font-bold mb-3">Digital Signage</h4>
              <p className="text-white text-[20px] leading-[132%] tracking-[0%] font-normal mb-8">
                The infrastructure behind the network.
              </p>

              <ul className="space-y-4 text-[16px] leading-[132%] tracking-[0%] text-white font-normal">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>High-visibility screens in retail environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Positioned in high-footfall locations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: ILAAN Studio */}
          <div
            className="bg-[#000000] text-white rounded-[28px] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl w-full max-w-[504px] mx-auto min-h-[526px] border border-black"
            style={{ backgroundImage: `url(${studioBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div>
              <div className="w-[142px] h-[99px] mb-6">
                <img src={iconS3} alt="Studio Icon" className="w-full h-full object-contain" />
              </div>

              <h4 className="text-[32px] font-bold mb-3">ILAAN Studio</h4>
              <p className="text-white text-[20px] leading-[132%] tracking-[0%] font-normal mb-8">
                The control layer behind delivery.
              </p>

              <ul className="space-y-4 text-[16px] leading-[132%] tracking-[0%] text-white font-normal">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Centralised content management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  <span>Ensure consistency</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <div className="w-[24px] h-[24px] rounded-full border-[1.5px] border-[#FFFF00] flex items-center justify-center shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-[#FFFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}