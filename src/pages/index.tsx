import { Montserrat } from "next/font/google";
import Image from "next/image";
import LorenzoLogo from "../../public/assets/logo-enrico.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className='w-screen bg-yellow-100'>
        <div className='bg-green-600 text-2xl text-white font-bold uppercase'>
          <div className='relative flex overflow-x-hidden'>
            <div className='py-12 animate-marquee whitespace-nowrap'>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
            </div>

            <div className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
              <span>precisamos da sua ajuda - </span>
            </div>
          </div>
        </div>

        <div
          className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}>
          <Image src={LorenzoLogo} alt='' className='w-36 h-36' />

          <h1 className='uppercase text-6xl text-center font-extrabold text-blue-700'>
            salve o lorenzo
          </h1>

          <h2 className='uppercase text-lg text-center font-bold'>
            conheça a história do nosso pequeno lorenzo
          </h2>

          <div>
            <iframe
              className='w-96 h-52'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              title='#SALVEOENRICO'
              width='640'
              height='360'
              src='https://www.youtube.com/embed/5EIKul51VQo?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsalveoenrico.com.br&amp;widgetid=1'
              id='widget2'></iframe>
          </div>
        </div>
      </div>

      <div>
        <svg
          className='wave-top bg-teal-300'
          viewBox='0 0 1439 147'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g transform='translate(-1.000000, -14.000000)' fill-rule='nonzero'>
              <g className='wave' fill='#fef9c3'>
                <path d='M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z'></path>
              </g>
              <g transform='translate(1.000000, 15.000000)' fill='#FFFFFF'>
                <g transform='translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) '>
                  <path
                    d='M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496'
                    opacity='0.100000001'></path>
                  <path
                    d='M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z'
                    opacity='0.100000001'></path>
                  <path
                    d='M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z'
                    opacity='0.200000003'></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

