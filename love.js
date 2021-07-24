function LoveCal() {

 const firstINput=document.getElementById("yourName");
 const yourname=firstINput.value;

document.getElementById("person1").innerHTML=yourname;
document.getElementById("yourName").value="";


const partnerINput=document.getElementById("PartnerName");
const partName=partnerINput.value;

document.getElementById("person2").innerHTML=partName;
document.getElementById("PartnerName").value="";


// show love %

let lovepars=Math.random() *100;
lovepars=Math.floor(lovepars) +1 ;

document.getElementById("lovePars").innerHTML=lovepars +"%";




}