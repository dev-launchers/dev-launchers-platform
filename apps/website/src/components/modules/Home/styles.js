export const styles = {
  main: 'relative min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 pt-20 md:px-6 py-12',
  section: {
    button:
      'bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:border-purple-300 hover:border-4',
    buttonContainer: 'flex justify-center py-6',
    cardsContainer: 'flex flex-wrap justify-center my-4 pt-16 gap-8',
    communityCard:
      'relative rounded-xl p-[2px] bg-gradient-to-r from-blue-300 to-purple-300',
    communityCardContainer:
      'flex flex-col md:flex-row gap-6 pt-16 max-w-5xl mx-auto',
    communityCardDescription: 'text-gray-500 text-base font-normal',
    communityMetrics:
      'h-full w-full bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center',
    communityNumber:
      'text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent',
    container:
      'container max-w-full flex flex-col pb-20 justify-center items-center px-4 pt-20 md:px-6 py-12',
    grid: 'grid grid-cols-1 w-full md:grid-cols-3 gap-6',
    header:
      'flex flex-col items-center justify-center w-full text-center  max-w-screen-xl ',
    headerHero:
      'flex flex-col items-center justify-center w-full text-center pt-16 pb-4',
    heading: 'text-6xl font-bold text-center leading-relaxed',
    headingHero: {
      className:
        'font-bold text-center align-center border-none border-0 m-0 pt-8',
      style: { fontSize: '4.5rem' },
    },
    label:
      'text-lg text-center uppercase text-gray-400 mx-auto font-normal min-w-full',
    logoContainer:
      'justify-center p-2 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 align-items',
    logoStyle: 'h-16 w-auto flex-shrink-0',
    partnerContainer: 'w-full mx-auto pt-20 px-4',
    partnerLogos:
      'flex flex-col md:flex-row items-center justify-around gap-20 mt-8',
    stackLogo:
      'flex items-center  p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors',
    subHeading:
      'text-lg text-center text-gray-600 max-w-3xl mx-auto font-normal',
    withBackground01:
      "px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/grad-01.png')] bg-cover bg-bottom bg-no-repeat ",
    withBackground02:
      "px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/grad-01.png')] bg-cover bg-bottom bg-no-repeat ",
    withBackground03:
      "px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/background-shape.png')] bg-cover bg-bottom bg-no-repeat ",
  },
};