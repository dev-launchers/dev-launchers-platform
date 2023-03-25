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
  banner:{ acceptButtonCaptionColor:"#FFFFFF",acceptButtonColor:"#3A7CA5",acceptButtonDisplay:true,backgroundColor:"#FFFFFF",brandBackgroundColor:"#FFFFFF",brandTextColor:"#000000",closeButtonDisplay:false,customizeButtonCaptionColor:"#4D4D4D",customizeButtonColor:"#DADADA",customizeButtonDisplay:true,explicitWithdrawal:true,listPurposes:true,position:"float-bottom-left",rejectButtonCaptionColor:"#000000",rejectButtonColor:"#eee",rejectButtonDisplay:true,textColor:"#000000",
  "logo":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAjCAYAAADmOUiuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPYSURBVHgBxVi9UttAEF7ZZobhb0TnDDAjunQRHR12ly74CTBlKqBLKtATAF06mzJVxBMgnsAukwplgBmGShl+M4Cdb8WdR1Zk30nI8M1o7rS6n73dve/2ZNAIMT8/X+l2u3ahUPjQ6XRswzAsiE08HuQH5+fnTdUYBuUMVgrFCp5NoczgyQ3DR+E+PDzsX1xc+IltKL0C2ygqeI6fnp7asI5/c3PjT05O1jHhJ/EtNWDRJsZz4opqKygss4vHphEirqhSQROYnp7eRsdNekWwovDM1lAF2WpwWwONLXoDYO5mQdHAhHKHqHr0RtCOwXK5bJVKpRYpdmbO8Iq6La+vrwPE4l9Y9SO9HvzUNLOwsHCSISaZmA+xuLYImw3SoCO0a5do9AgeHx/XY/zmYgPuodwY1hEcaw7dJHHMzc3ZGaxnInYbcSFkOxjLV3VOpSDOzjaKgNKjIoi+B9/3A7j7QNVRW0FM0GLSRnWfMoD5VPTvQWVBfNdzMTbGKgp7ampqE67Zowzg0OD+MfGKopuegsVi0UPBLllj11B24t5gPuUKlxhvVdVBiweDILifmZlZRnUZXPgbA/PpUqf0GMfOtCcmJo7HxsaOWE9VBy0etCzLBFWcoGpyDnd6erqImOQJKpQN7AWtEymNBd+hylbk7OYPFP1O2azIGNdpxESdaEGRxawJzjuG9ZosxwY5kTrj6FtEkrrH7WhEwLyL/ykIMm5g0npUxisBBy7F3Orwjpaup/zhnJ2d7fQpCDrZHZSYQr7FZymqR1LGK8QOX4V8l/KFC+VqXOnFoLhrfElqjRS8dnt7615eXv5ELM7ScyzyWWnDsp8hq+DVohzA3kImXbsH+D20oNil8ryMc1MYb9gogWyLW1hLXCFDy2IBLix5JGUvVK4q5+opKDEgldqHuUO3i6RVfpeuDtCnymlURJaLcn0KYnPwtbGR0FdylouH2d+8urpaEtfMMPaYG+OylHDhpfW4cowwBoVlGpS8GyVnvadn5jdxCvxC7H2LxCPLypB9jcaoJthD6zLm4gjPYsTPdpo8D78xwpWy69FvCVWPqYk3mggHV2cczmZk+AxCQRzaddIED3p3d+fJd84RYf2aUNLi8QRFVLEQRzGcp/hOJbZekhJcYkK2VN+fBFCLE48VkeFUozIo6bECsCqHTWJqjwUckgIGaMOKTOTLuvij0BKuZwWYpB0xsTaiiUb8GzbGbNLG6FNw0Ad2lTgl2hiorRpoGGDFH9TPr0xNDsJDmfzm/vstCVF+lf9cdBc88mtn5Cbo4WGreWn6j1xBcVHf0nFnEv4Bry/59nGD6xAAAAAASUVORK5CYII="},
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
