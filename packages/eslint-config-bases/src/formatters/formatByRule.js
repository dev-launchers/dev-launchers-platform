// const fs = require('fs');

function containRules(result, targetRuleId) {
  if (!result || !targetRuleId) {
    return false;
  }

  return result.messages.some((cur) => {
    // console.log(`cur?.ruleId = ${cur?.ruleId}`);
    if (cur?.ruleId?.includes(targetRuleId)) {
      return true;
    }
  });
}

module.exports = function (results, context) {
  const filteredRule = process.env.filterByRule;
  let md = `| File | Line | Column | Rule | Message |\n| --- | --- | --- | --- | --- |\n`;

  results.forEach((cur) => {
    if (containRules(cur, filteredRule)) {
      cur.filePath =
        process.cwd().split('/').splice(-2, 2).join('/') +
        cur.filePath.split(process.cwd().split('/').splice(-2, 2).join('/'))[1];
      md += `| ${cur.filePath} | ${cur.messages[0].line} | ${cur.messages[0].column} | ${cur.messages[0].ruleId} | ${cur.messages[0].message} |\n`;
    }
  });

  // fs.writeFileSync('eslint-error-files.md', md);
  // return 'Done Write';

  return md;
};
