

     function marinaraSauce (cookName){
         var two = /2/g;
         var oneFourth = "1/4"
       console.log(`Hey, ${cookName}! This is my marinara sauce recpie!`);
       console.log(" - Heat a medium-large saucepan over medium heat.")
       console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes".replace(two, 'two'))
       console.log(" - Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.".replace(oneFourth, 'oneFourth').replace(two, 'two'))
       console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes")
       console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.".replace(oneFourth, 'onefourth'))
}

marinaraSauce('Adam')

//.........................................................................................
function giveA (){
    var students = ['Jason', 'Mohamed', 'Bambozel']
        for ( let j = 0 ; j < students.length ; j++){
        console.log(students[j] +" "+ "Grade A")
    }
}
//..........................................................................................
giveA()

function tryYourLuck (chosenNum){
  var random = (Math.floor((Math.random()*6)+1))
  if(chosenNum === random){
    console.log("YOu GOT IT BRO")
}else{
    console.log("TRY AGAIN, HAHAHAHA")
}
}
tryYourLuck(2)