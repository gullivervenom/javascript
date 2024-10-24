/*
    전역 스코프와 지역 스코프
*/

var x =  'global x';
var y =  'global y';

function outer() {

    var z = 'outer local z';
    console.log(x); 
    console.log(y); 
    console.log(z); 

    function inner() {
        var x = 'inner local x';
        console.log(x); 
        console.log(y); 
        console.log(z); 
    }
    inner();

}

// console.log(z); // 지역 변수이기 때문에 전역에서는 사용 불가능 {}내부에서만 사용 가능
outer();