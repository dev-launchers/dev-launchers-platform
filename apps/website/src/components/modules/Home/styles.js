export const styles = {
  main: 'relative min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 pt-20 md:px-6 py-12',
  section: {
    button:
      'bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-300 hover:text-black hover:font-semibold hover:bg-purple-400 hover:border-purple-300',
    buttonContainer: 'flex justify-center py-6',
    cardsContainer:
      'flex flex-wrap justify-items-center justify-center my-4 pt-16 gap-8',
    communityCard:
      'col-span-1 relative rounded-xl p-[2px] bg-gradient-to-r from-blue-300 to-purple-300',
    communityCardContainer:
      'grid grid-cols-1  md:grid-cols-3 gap-6 pt-16  max-w-5xl mx-auto',
    communityCardDescription: 'text-gray-500 text-base font-normal',
    communityMetrics:
      'h-full w-full bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center',
    communityNumber:
      'text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent',
    container:
      'container max-w-6xl flex flex-col pb-20 justify-center items-center px-4 pt-20 md:px-6 py-12',
    grid: 'grid grid-cols-1 w-full md:grid-cols-3 gap-6',
    header:
      'flex flex-col items-center justify-center w-full text-center  max-w-screen-xl ',
    headerHero:
      'flex flex-col items-center justify-center w-full max-w-6xl text-center pt-6 pb-4',
    heading: 'text-6xl font-bold text-center leading-relaxed pb-4',
    headingHero: {
      className:
        'font-bold max-w-5xl text-center align-center border-none border-0 m-0 pt-0 pb-4',
      style: { fontSize: '4.25rem' },
    },
    label:
      'text-lg text-center uppercase text-gray-400 mx-auto font-normal min-w-full',
    logoContainer:
      'justify-center pb-10 p-2 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 align-items',
    logoStyle: 'h-16 w-auto flex-shrink-0',
    partnerContainer: 'w-full max-w-7xl mx-auto pt-20 px-4',
    partnerLogos:
      'flex flex-col md:flex-row items-center justify-between gap-20 mt-8',
    stackLogo:
      'flex items-center justify-center  gap-4 p-4 rounded-lg  transition-colors',
    subHeading:
      'text-xl pb-2 text-center text-gray-500 max-w-3xl mx-auto font-normal',
  },
};
