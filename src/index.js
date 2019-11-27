import './index.css';


  import numeral from "numeral";

const courseValue = numeral(1000).format("$0.00.00");
console.log(`i am paying ${courseValue}`);
