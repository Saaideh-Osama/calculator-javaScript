
document.getElementById('result').value = "";
function splitByMany( manyArgs, string ) {
    do {
              let arg = manyArgs.pop()
      string = string.replace(arg, manyArgs[0])
    } while (manyArgs.length > 2)
    return string.split(manyArgs[0])
    }
function add1(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='1';
}
function add2(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='2';
}
function add3(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='3';
}
function add4(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='4';
}
function add5(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='5';
}
function add6(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='6';
}
function add7(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='7';
}
function add8(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='8';
}
function add9(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='9';
}
function add0(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='0';
}
function addmul(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='*';
}
function adddiv(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='÷';
}
function addadd(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='+';
}
function addsub(){
    document.getElementById('result').innerHTML = document.getElementById('result').value+='-';
}
function Clear(){
    document.getElementById('result').value ="";
    document.getElementById('result').innerHTML ="";
}
function evale(){
    var expression = document.getElementById('result').value; 
    console.log(expression);
    
    const expar =  splitByMany(['-','=','+','*','÷'],expression)
    
    for(let i = 0 ; i<expar.length; i++)
        console.log("after splittin " +expar[i]);

if(expression.indexOf('÷')!=-1){
    var division =  eval(Number(expar[0])/Number(expar[1]));
    document.getElementById('resultcorner').innerHTML = division ; 
}
else if(expression.indexOf('*')!=-1){
    document.getElementById('resultcorner').innerHTML = expar[0]*expar[1];
}
else if(expression.indexOf('+')!=-1){
    var addition = Number(expar[0])+Number(expar[1]);
    document.getElementById('resultcorner').innerHTML = addition;
}
else if(expression.indexOf('-')!=-1){
    document.getElementById('resultcorner').innerHTML = eval(expar[0]-expar[1]);
   
}
document.getElementById('result').value ="";
document.getElementById('result').innerHTML ="";
}