/* eslint quotes: [2, "backtick", "avoid-escape"] */

const setting = {
  text: ` text-2x1 leading-8 sm:text-3xl`,
  bgMain: `bg-black  bg-opacity-50 `,
  textOv: `overflow-y-auto  max-h-full`,
};

export default {
  cloks: `  text-3xl sm:text-6xl py-2 inline-block rounded-3xl px-8 ${setting.bgMain} text-center `,
  main: ` text-white items-center flex flex-col overflow-auto max-h-fix1
  z-10
  sm:w-4/5
  w-full
 `,

  navbar: {
    box: `flex-10 z-20 grid grid-cols-3 text-center  sm:grid-cols-header fixed top-0 w-full ${setting.bgMain} 
mb-16 place-content-center place-items-center grid-rows-0 sm:grid-rows-1 text-base ms:text-lg text-white`,
  },
  greetting: {
    greet: `flex-0`,
    name: `font-semibold  focus:border-0 ${setting.textOv}  min-w-fun  `,
    box: `flex flex-10  items-center 
          justify-center 
          w-3/4 
          overflow-hidden  
        	rounded-3xl
          px-8 my-6
          ${setting.text} ${setting.bgMain}`,
  },

  todo: {
    box: `flex flex-col
 w-4/5 h-wull 
  py-2 px-8
  rounded-2xl
  ${setting.bgMain} ${setting.text}`,
    quote: `p-1n text-base leading-2 sm:text-xl font-light`,
    todoText: `text-x1 leading-4 sm:text-2xl text-left  min-w-fun max-h-fix1`,
  },

  bg: `h-screen w-full
  fixed 
   transition-all	
  duration-200 bg-cover bg-center`,

  footer: {
    box: `flex fixed bottom-0  z-10 items-end transition text-white w-3/4	 
    leading-8 h-1/6 font-quotes font-extralight text-base leading-8 sm:text-lg 	`,
    content: `${setting.bgMain}
      rounded-2xl px-6 mb-3
      flex w-full  max-h-full relative group
      transition duration-500 `,
    figure: `transform  group  transition duration-500 w-full   
    flex flex-col justify-center items-center
    overflow-y-auto  max-h-full`,
    blockquote: ` transition overflow-auto duration-200 text-justify`,
    figcaption: `transition duration-200 font-quotes-autor 
    self-end   text-sm leading-8 sm:text-base`,
    arrow: `${setting.bgMain} absolute py-1 top-1/2
				cursor-pointer transition-all duration-500 rounded-full group-hover:opacity-100 opacity-80 sm:opacity-0
				h-2/4 w-16 transform 
				-translate-y-1/2 focus:opacity-100`,
  },
  logo: `self-center ml-4 transform hover:opacity-100 w-spinner
  flex items-center h-full
  focus:opacity-100 focus:outline-none duration-200 opacity-50 transition relative`,
};
