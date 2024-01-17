const num = '1';

function veryComplexFunc() {
  if (num === 1) {
    // 1
    console.log('num === 1');
    if (num === 2) {
      // 2
      console.log('num === 2');
      if (num === 3) {
        // 3
        console.log('num === 3');
        if (num === 4) {
          // 4
          console.log('num === 4');
          if (num === 5) {
            // 5
            console.log('num === 5');
            if (num === 6) {
              // 6
              console.log('num === 6');
              if (num === 7) {
                // 7
                console.log('num === 7');
                if (num === 8) {
                  // 8
                  console.log('num === 8');
                }
              }
            }
          }
        }
      }
    }
  }
}
veryComplexFunc();
function lessComplexFunc() {
  switch (
    num // 1
  ) {
    case '1':
      console.log('num === 1');
      break;
    case '2':
      console.log('num === 2');
      break;
    case '3':
      console.log('num === 3');
      break;
    case '4':
      console.log('num === 4');
      break;
    case '5':
      console.log('num === 5');
      break;
    case '6':
      console.log('num === 6');
      break;
    case '7':
      console.log('num === 7');
      break;
    case '8':
      console.log('num === 8');
      break;

    default:
      break;
  }
}

// sonarjs/no-identical-expressions
if (1 == 1) {
  console.log('attempt 1');
}

if (1 == 1) {
  console.log('attempt 2');
}

// no-small-switch
switch (variable) {
  case 0:
    doSomething();
    break;
  default:
    doSomethingElse();
    break;
}

// no-collapsible-if => https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md
if (x != undefined) {
  if (y === 2) {
    // ...
  }
}

// more rules can be found at https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules
