const fetch = require('node-fetch')
const cheerio = require("cheerio");
let salaries = []

fetch('https://questionnaire-148920.appspot.com/swe/data.html')
.then(response => response.text())
.then(html =>{
  const $ = cheerio.load(html);
 $("#salaries-table > tbody > tr > td.player-salary").each((index, element) => {
   var numberPattern = '[0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?';

const salary = $(element).text().match( numberPattern )
   // console.log($(element).text());
   if(salary !== null){
     // console.log(salary);
     const s = parseInt(salary[0].split(',').join(''))
     salaries.push(s)
     // console.log(salaries);
   }
   // console.log(salaries);
 })
 let sortedArray = salaries.sort((a,b) => b - a)
  // sortedArray.splice()
  let divide
  let topSalaries = sortedArray.slice(0,125)
  let total = topSalaries.reduce((sum,salary) => sum + salary)
  let average = total / topSalaries.length
     for (var i = 0; i < topSalaries.length; i++) {
      // console.log(topSalaries[i]);
      // let divide = topSalaries.length / 5
       if( i < 1){
         let add = topSalaries.reduce((a,b) => a + b) / 100000000
        console.log(pattern(add));
        console.log(add);
       }
       // console.log(divide);

}
 // console.log('this is the average',average);
});
// const request = require("request-promise");

function pattern(n) {
  var output = "*";
  let temp
  let last = []
  let num1 = ''
  let answer = '';
  let i = 1
  for (i; i <= n; i++) {
    temp = output.repeat(i - 1)
    i * 1

  if (i === 1){
    temp += ''
  }
  else {
   temp += i
  }
  if(i==n){
    temp +=''
  }
  else {
    temp +='\n'
  }
temp = num1 + temp
    answer += temp

  }
  return answer
}
// async function main() {
//  const result = await request.get("https://questionnaire-148920.appspot.com/swe/data.html");
//  const $ = cheerio.load(result);
//
//  $("#salaries-table > tbody > tr > td").each((index, element) => {
//    console.log($(element).text());
//  });
// }

// main();

//loop through the first 125 divide by a million
    //print the numbers of stars
//divide each numbers inside by a million for graph
//will give the numbers of starts to print



//create
//cite
//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b
