export function getStaticProps(id) {
   const fileInput = require(`../../examples/json${id}.input.json`);
   const fileOutput =  require(`../../examples/json${id}.output.json`);
   return {
       fileInput: JSON.stringify(fileInput),
       fileOutput: JSON.stringify(fileOutput),
   }
}
