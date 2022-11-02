const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
  preRender: async (page) => {
    await injectAxe(page);
  },
  postRender: async (page) => {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  },
};
