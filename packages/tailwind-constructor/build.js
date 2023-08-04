const StyleDictionaryPackage = require('style-dictionary');
const {createArray} = require('./fns');

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
  name: 'css/variables',
  formatter: function (dictionary, config) {
    return `${this.selector} {\n${dictionary.allProperties.map(prop => `  --${prop.name}: ${prop.value};`).join('\n')}\n}`
  }
});

//creater a new style dictionary transform

StyleDictionaryPackage.registerTransform({
    name: 'sizes/px',
    type: 'value',
   
    matcher: function(prop) {
      console.log(prop);
        // You can be more specific here if you only want 'em' units for font sizes    
        return ["fontSizes", "spacing", "borderRadius", "borderWidth", "sizing", "Highlight", "Shadow", "Universal", "Link Text", "Default", "Mobile"].includes(prop.attributes.category);
    },
    transformer: function(prop) {
        // You can also modify the value here if you want to convert pixels to ems
      

        switch (prop.attributes.category) {
          case 'fontSizes':
          case 'spacing':
          case 'borderRadius':
          case 'borderWidth':
          case 'sizing': 
              return parseFloat(prop.original.value) + 'rem';
          case 'Default':
          case 'Mobile':
          case 'Link Text':  
          case 'Universal':
              const {fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, paragraphSpacing, textCase, textDecoration} = prop.original.value;
              return prop.original.value ? `${fontFamily} ${fontSize}px ${fontWeight} ${lineHeight}px ${letterSpacing} ${paragraphSpacing} ${textCase} ${textDecoration}` : 'none';
          case 'Highlight':
          case 'Shadow':
              const {x, y, blur, spread, color} = prop.original.value;
              return prop.original.value ? `${x}px ${y}px ${blur}px ${spread}px ${color}` : 'none';
          default:
              return prop.original.value;
  }
}});

function getStyleDictionaryConfig(theme) {
  return {
    "source": [
      `tokens/${theme}.json`,
    ],
    "format": {
      createArray
    },
    "platforms": {
      "web": {
        "transforms": ["attribute/cti", "name/cti/kebab", "sizes/px"],
        "buildPath": `output/`,
        "files": [{
          "destination": `${theme}.json`,
          "format": "createArray"
        }, {
          "destination": `${theme}.css`,
          "format": "css/variables",
          "selector": `.${theme}-theme`
          //pass over the theme name to the css/variables formatter
        }]
      }
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

['core', 'dark', 'light'].map(function (theme) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));
//extend the style dictionary config with typography
    StyleDictionary.buildPlatform('web');

    console.log('\nEnd processing');
})

console.log('\n==============================================');
console.log('\nBuild completed!');
