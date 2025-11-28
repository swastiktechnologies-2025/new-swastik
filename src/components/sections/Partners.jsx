// import React from "react"
// import Container from "../layout/Container"

// import logo1 from "../../assets/images/hero/Acer.png"
// import logo2 from "../../assets/images/hero/APC.png"
// import logo3 from "../../assets/images/hero/Autodesk.jpg"
// import logo4 from "../../assets/images/hero/Cambium.png"
// import logo5 from "../../assets/images/hero/Cisco.png"
// import logo6 from "../../assets/images/hero/CommScope.png"
// import logo7 from "../../assets/images/hero/CPPlus.png"
// import logo8 from "../../assets/images/hero/DELTA.png"
// import logo9 from "../../assets/images/hero/DLink.png"
// import logo10 from "../../assets/images/hero/Exide.png"
// import logo11 from "../../assets/images/hero/Hikvision.png"
// import logo12 from "../../assets/images/hero/HP.png"
// import logo13 from "../../assets/images/hero/HPE.png"
// import logo14 from "../../assets/images/hero/Juniper.png"
// import logo15 from "../../assets/images/hero/Lenovo.png"
// import logo16 from "../../assets/images/hero/LG.png"
// import logo17 from "../../assets/images/hero/Microsoft.png"
// import logo18 from "../../assets/images/hero/Netgear.png"
// import logo19 from "../../assets/images/hero/Peoplelink.png"
// import logo20 from "../../assets/images/hero/Polycom.png"
// import logo21 from "../../assets/images/hero/Samsung.png"
// import logo22 from "../../assets/images/hero/Synology.png"

// export default function Partners() {
//   const logos = [
//     logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
//     logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22
//   ]

//   // Duplicate full set for smooth infinite sliding
//   const sliderLogos = [...logos, ...logos]

//   return (
//     <section className="relative bg-linear-to-b from-white via-gray-50 to-white py-16 overflow-hidden">
      
//       {/* CSS FIXED HERE */}
//       <style>{`
//         @keyframes scrollFull {
//           0% { transform: translateX(0); }
//           /* Move by half of the full (duplicated) width for a seamless loop */
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll-full {
//           /* faster and smooth continuous scroll */
//           animation: scrollFull 22s linear infinite;
//           will-change: transform;
//           transform: translateZ(0);
//         }
//         /* Respect users who prefer reduced motion */
//         @media (prefers-reduced-motion: reduce) {
//           .animate-scroll-full { animation: none; }
//         }
//       `}</style>


//       <Container>

//         <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-tight">
//           Our <span className="text-sky-600">Trusted Partners</span>
//         </h2>

//         <div className="relative overflow-hidden w-full">
//           {/* outer track: duplicated logos in a single row */}
//           <div className="flex animate-scroll-full whitespace-nowrap gap-6 md:gap-8 items-center">
//             {sliderLogos.map((logo, i) => {
//               const isDuplicate = i >= logos.length
//               return (
//                 <div
//                   key={i}
//                   aria-hidden={isDuplicate}
//                   className="shrink-0 px-3 py-2 w-28 sm:w-32 md:w-36 lg:w-40 flex items-center justify-center transition-transform duration-300 hover:scale-110"
//                 >
//                   {/* inner container so image can size naturally and stay centered */}
//                   <div className="flex items-center justify-center w-full">
//                     <img
//                       src={logo}
//                       alt={`Partner ${i + 1}`}
//                       className="object-contain w-auto max-h-10 md:max-h-12 drop-shadow-md"
//                     />
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//       </Container>

//   <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-white to-transparent pointer-events-none" />
//   <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-white to-transparent pointer-events-none" />

//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_107%,#cce7ff_0%,#ffffff_90%)] opacity-40"></div>
//     </section>
//   )
// }

import React from "react"
import Container from "../layout/Container"

import logo1 from "../../assets/images/hero/Acer.png"
import logo2 from "../../assets/images/hero/APC.png"
import logo3 from "../../assets/images/hero/Autodesk.jpg"
import logo4 from "../../assets/images/hero/Cambium.png"
import logo5 from "../../assets/images/hero/Cisco.png"
import logo6 from "../../assets/images/hero/CommScope.png"
import logo7 from "../../assets/images/hero/CPPlus.png"
import logo8 from "../../assets/images/hero/DELTA.png"
import logo9 from "../../assets/images/hero/DLink.png"
import logo10 from "../../assets/images/hero/Exide.png"
import logo11 from "../../assets/images/hero/Hikvision.png"
import logo12 from "../../assets/images/hero/HP.png"
import logo13 from "../../assets/images/hero/HPE.png"
import logo14 from "../../assets/images/hero/Juniper.png"
import logo15 from "../../assets/images/hero/Lenovo.png"
import logo16 from "../../assets/images/hero/LG.png"
import logo17 from "../../assets/images/hero/Microsoft.png"
import logo18 from "../../assets/images/hero/Netgear.png"
import logo19 from "../../assets/images/hero/Peoplelink.png"
import logo20 from "../../assets/images/hero/Polycom.png"
import logo21 from "../../assets/images/hero/Samsung.png"
import logo22 from "../../assets/images/hero/Synology.png"

export default function Partners() {
  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
    logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22
  ]

  // split logos into two groups: first 11 and the remaining (12-22)
  const topLogos = logos.slice(0, 11) // logos 1..11
  const bottomLogos = logos.slice(11) // logos 12..22

  // duplicate each group for seamless infinite scrolling
  const sliderTop = [...topLogos, ...topLogos]
  const sliderBottom = [...bottomLogos, ...bottomLogos]

  return (
  <section className="relative bg-linear-to-b from-white via-gray-50 to-white py-16 overflow-hidden">

      <style>{`
        @keyframes scrollFull {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-full {
          animation: scrollFull 22s linear infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        /* reverse animation for visual variety on the second row */
        .animate-scroll-reverse {
          animation: scrollFull 24s linear infinite reverse;
          will-change: transform;
          transform: translateZ(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-full, .animate-scroll-reverse { animation: none; }
        }
      `}</style>

      <Container>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-tight">
          Our <span className="text-sky-600">Trusted Partners</span>
        </h2>

        <div className="relative overflow-hidden w-full space-y-4">
          {/* top row: logos 1..11 */}
          <div className="flex animate-scroll-full whitespace-nowrap gap-6 md:gap-8 items-center">
            {sliderTop.map((logo, i) => {
              const isDuplicate = i >= sliderTop.length / 2
              return (
                <div
                  key={`top-${i}`}
                  aria-hidden={isDuplicate}
                  className="shrink-0 px-3 py-2 w-28 sm:w-32 md:w-36 lg:w-40 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="flex items-center justify-center w-full">
                    <img src={logo} alt={`Partner ${i + 1}`} className="object-contain w-auto max-h-10 md:max-h-12 drop-shadow-md" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* bottom row: logos 12..22 */}
          <div className="flex animate-scroll-reverse whitespace-nowrap gap-6 md:gap-8 items-center">
            {sliderBottom.map((logo, i) => {
              const isDuplicate = i >= sliderBottom.length / 2
              return (
                <div
                  key={`bottom-${i}`}
                  aria-hidden={isDuplicate}
                  className="shrink-0 px-3 py-2 w-28 sm:w-32 md:w-36 lg:w-40 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                >
                  <div className="flex items-center justify-center w-full">
                    <img src={logo} alt={`Partner ${i + 1}`} className="object-contain w-auto max-h-10 md:max-h-12 drop-shadow-md" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>

  <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-white to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-white to-transparent pointer-events-none" />

    </section>
  )
}
