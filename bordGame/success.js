let i = 0;
import { random }

const success = function(){
    console.log("hello");
    const point = document.getElementById("point");
    i++;
    console.log(i);

    point.innerHTML = i;
}