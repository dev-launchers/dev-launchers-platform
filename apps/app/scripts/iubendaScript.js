const iubendaScript = `
var _iub = _iub || [];
_iub.csConfiguration = {
  lang: 'en',
  siteId: 2928269, 
  cookiePolicyId: 92551427, 
  enableCcpa: true,
  ccpaApplies: true,
  enableGdpr: true,
  gdprAppliesGlobally: false,
  gdprApplies: true,
  perPurposeConsent: true,
  timeoutLoadConfiguration: 30000,
  consentOnScroll: false, //avoid consent to be given when the user scrolls the page
  banner:{ acceptButtonCaptionColor:"#FFFFFF",acceptButtonColor:"#3A7CA5",acceptButtonDisplay:true,backgroundColor:"#FFFFFF",brandBackgroundColor:"#FFFFFF",brandTextColor:"#000000",closeButtonDisplay:false,customizeButtonCaptionColor:"#4D4D4D",customizeButtonColor:"#DADADA",customizeButtonDisplay:true,explicitWithdrawal:true,listPurposes:true,position:"float-bottom-left",rejectButtonCaptionColor:"#000000",rejectButtonColor:"#eee",rejectButtonDisplay:true,textColor:"#000000", logo:"data:image/png;base64,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"},
  callback: {
    onPreferenceExpressedOrNotNeeded: function (preference) {
      dataLayer.push({
        iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut(),
      });

      if (!preference) {
        dataLayer.push({
          event: 'iubenda_preference_not_needed',
        });
      } else {
        if (preference.consent === true) {
          dataLayer.push({
            event: 'iubenda_consent_given',
          });
        } else if (preference.consent === false) {
          dataLayer.push({
            event: 'iubenda_consent_rejected',
          });
        } else if (preference.purposes) {
          for (var purposeId in preference.purposes) {
            if (preference.purposes[purposeId]) {
              dataLayer.push({
                event: 'iubenda_consent_given_purpose_' + purposeId,
              });
            }
          }
        }
      }
    },
  },
}
`;
export default iubendaScript;
