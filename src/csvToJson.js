import $ from "jquery";
// var data = $.ajax({
//     url: 'data:text/txt;base64,eCx5CjUsNQoyLDcKNiwxCjcsMwo4LDIKOSw2CjEwLDExCjExLDE0CjEyLDE3CjEzLDEzCjE0LDE1Cg==',
//     dataType: 'json',
//     async: false
// }).responseText;
import csv from './final1graficos';

console.log(csv);



function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);
  }
  
  //return result; //JavaScript object
  console.log(result);
  return(result); //JSON
}




export const dataJson = csvJSON(csv);
// console.log(dataString);
// const dataJson = stringToJson(data);



// export const dataJson = csvJSON(data);


