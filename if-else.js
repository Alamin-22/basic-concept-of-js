// var age = 18;
// if( age >= 18){
//     console.log('You are adult')
// } 
// else(console.log('Tmi ekhn o baccha'))


var temperature = 25;
var weather = true;
var isRain = true;
if( temperature >=30 && weather == false ){
    console.log("We have better stay at home rather than go outside.")
}
else if( temperature ==25 && weather ==  false && isRain == false){
    console.log('Baire tapmatra to valoi ache kintu brsiti hoites jaua jabe na')
}
else if(temperature ==25 && weather == true && isRain == false){
    console.log('chol kheilla asi baire thike')
}
else if( temperature >= 25 && weather == true && isRain == true){
    console.log( 'ajke khela hobe mama')
}
else(console.log('Chol Gure asi baire thike'))