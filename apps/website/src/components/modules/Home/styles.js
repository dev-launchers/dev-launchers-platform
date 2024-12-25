export const styles = {
  section: {
    container:
      'max-w-screen-xl container mx-auto flex flex-col pb-20 gap-6 justify-center items-center',
    withBackground:
      'max-w-screen-xl container mx-auto flex flex-col py-16 gap-10 justify-center items-center bg-cover bg-center bg-no-repeat',
    header: 'flex flex-col items-center justify-center w-full text-center py-6',
    headerHero:
      'flex flex-col items-center justify-center w-full text-center pt-16',
    heading: 'text-6xl font-bold text-center leading-relaxed',
    headingHero: {
      className: 'font-bold text-center align-center border-none border-0 m-0',
      style: { fontSize: '4.5rem' }, // This approximates what a text-7xl would be
    },
    subHeading: 'text-lg text-gray-600 max-w-3xl mx-auto font-normal',
    label:
      'text-lg text-center uppercase text-gray-400 mx-auto font-normal min-w-full',
    grid: 'grid grid-cols-1 w-full md:grid-cols-3 gap-6',
    button:
      'text-base bg-brand-alt-cosmic-200 text-white px-8 py-3 rounded-lg hover:bg-purple-700 capitalize',
    buttonContainer: 'flex justify-center ',
    partnerContainer: 'w-full  mx-auto pt-16 px-4',
    cardsContainer: 'flex flex-wrap justify-center my-4 gap-8',
    partnerLogos:
      'flex flex-col md:flex-row items-center justify-around gap-20 mt-8',
    logoStyle: 'h-16 w-auto flex-shrink-0',
    logoContainer:
      'justify-center p-6 grid grid-cols-1 md:grid-cols-3 gap-16 align-items',
  },
  main: 'min-h-screen bg-black text-white flex flex-col gap-y-16 px-4 md:px-6 py-12',
};
