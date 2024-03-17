for( i =99; i >0; i--){
    var tim = i - 1
    // console.log(`${i} Carton of biscuit on the wall, ${i} carton of bisuits. Take on down and pass it around, ${tim} carton of biscuits on the wall.`);
    display.innerHTML += `${i} Carton of biscuit on the wall, ${i} carton of bisuits. <br>Take on down and pass it around, ${tim} carton of biscuits on the wall. <br><br>`

    if(tim ==0){
        // console.log(`No more carton of biscuits on the wall`);
        display.innerHTML += `No more carton of biscuits on the wall`
    }
}