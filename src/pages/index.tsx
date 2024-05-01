import { Carousel } from "@/components/Carousel";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Image01 from "../../public/assets/image01.jpg";
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

          <button
            className='bg-green-500 text-white uppercase font-bold rounded-md p-4 text-xl mt-4 transition duration-500 hover:opacity-70 '
            type='button'>
            quero ser um anjo do lorenzo
          </button>
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
      <div className='bg-teal-300 flex items-center justify-center'>
        <h1 className='w-full text-center text-blue-600 font-semibold text-5xl'>
          Veja quem está apoiando a nossa jornada...
        </h1>
      </div>
      <div className='bg-teal-300 mb-[-56px]'>
        <Carousel />
      </div>
      <div>
        <svg
          viewBox='0 0 1428 174'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'>
          <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g
              transform='translate(-2.000000, 44.000000)'
              fill='#FFFFFF'
              fill-rule='nonzero'>
              <path
                d='M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496'
                opacity='0.100000001'></path>
              <path
                d='M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z'
                opacity='0.100000001'></path>
              <path
                d='M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z'
                id='Path-4'
                opacity='0.200000003'></path>
            </g>
            <g
              transform='translate(-4.000000, 76.000000)'
              fill='#fef08a'
              fill-rule='nonzero'>
              <path d='M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z'></path>
            </g>
          </g>
        </svg>
      </div>
      <div className='bg-yellow-200 h-full flex flex-col items-center justify-center'>
        <Image
          className=' bg-yellow-200 h-72 w-96 flex-[1_1_42] rounded-[30%_70%_80%_30%_/_30%_30%_90%_70%]'
          alt=''
          src={Image01}
        />
        <h1 className='text-blue-600 text-5xl font-bold text-center mt-10'>
          Conheça a História do pequeno Lorenzo...
        </h1>
        <p className='p-2 my-2 text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim
          erat, lacinia et ullamcorper eget, fermentum in ante. Ut accumsan ex
          at molestie pretium. Nam in varius augue. Nulla elementum fermentum ex
          ut dignissim. Maecenas accumsan rutrum pretium. Vivamus at orci orci.
          Fusce elit odio, vestibulum in eleifend nec, condimentum sit amet
          urna. Nullam a nunc ornare nulla dapibus convallis. Nulla facilisi.
          Duis porttitor blandit ante, vitae imperdiet est feugiat ut. Donec
          porta mauris commodo, convallis felis at, dignissim odio. Integer
          placerat, est vitae gravida porta, lorem felis iaculis libero, nec
          consequat felis erat id dui. Aliquam placerat magna erat, id pretium
          dui fringilla at. Donec viverra ut erat sed ultrices. Duis scelerisque
          purus est, vel porta velit venenatis ut. Praesent in ante nec sem
          varius ullamcorper. Proin sollicitudin semper rhoncus. Morbi cursus
          turpis erat, ut molestie massa bibendum eu. Vestibulum erat lacus,
          tempus eu metus a, bibendum tincidunt eros. In leo magna, pulvinar
          vitae dui gravida, mollis ultricies sem. Cras quis sodales nisl. Nunc
          non felis in enim tincidunt aliquam. Donec ut ipsum gravida, rhoncus
          dolor quis, eleifend lorem. Sed purus nibh, rutrum at ex nec, porta
          ultricies orci. Duis condimentum nibh nec augue facilisis vehicula.
          Maecenas aliquam a nisi eget mattis. Quisque suscipit dolor quam.
          Nulla facilisi. Sed bibendum elit quis ornare consectetur.
        </p>
      </div>
    </div>
  );
}

