export const styles = {
  main: 'relative min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 pt-20 md:px-6 py-12',
  section: {
    button:
      'bg-purple-900 border-2 border-purple-400 text-base text-white font-normal capitalize py-3 px-6 rounded-xl transition-all duration-200 hover:bg-purple-500 hover:border-purple-300 hover:border-4',
    buttonContainer: 'flex justify-center',
    cardsContainer: 'flex flex-wrap justify-center my-4 gap-8',
    communityCard:
      'flex-1 relative rounded-xl p-[2px] bg-gradient-to-r from-blue-300 to-purple-300',
    communityCardContainer:
      'flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto',
    communityCardDescription: 'text-gray-500 text-base font-normal',
    communityMetrics:
      'h-full w-full bg-black rounded-xl p-6 flex flex-col items-center justify-center text-center',
    communityNumber:
      'text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4',
    container:
      'max-w-screen-xl container mx-auto flex flex-col pb-20 gap-6 justify-center items-center',
    grid: 'grid grid-cols-1 w-full md:grid-cols-3 gap-6',
    header: 'flex flex-col items-center justify-center w-full text-center py-6',
    headerHero:
      'flex flex-col items-center justify-center w-full text-center pt-16',
    heading: 'text-6xl font-bold text-center leading-relaxed',
    headingHero: {
      className: 'font-bold text-center align-center border-none border-0 m-0',
      style: { fontSize: '4.5rem' },
    },
    label:
      'text-lg text-center uppercase text-gray-400 mx-auto font-normal min-w-full',
    logoContainer:
      'justify-center p-2 grid grid-cols-1 md:grid-cols-3 gap-14 align-items',
    logoStyle: 'h-16 w-auto flex-shrink-0',
    partnerContainer: 'w-full mx-auto pt-20 px-4',
    partnerLogos:
      'flex flex-col md:flex-row items-center justify-around gap-20 mt-8',
    stackLogo:
      'flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors',
    subHeading: 'text-lg text-gray-600 max-w-3xl mx-auto font-normal',
    withBackground:
      "mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/background-shape.png')] bg-cover bg-bottom bg-no-repeat ",
    withBackground01:
      "mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/background-shape.png')] bg-cover bg-bottom bg-no-repeat ",
    withBackground02:
      "mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full justify-center text-center bg-[url('/background-shape.png')] bg-cover bg-bottom bg-no-repeat ",
  },
};
