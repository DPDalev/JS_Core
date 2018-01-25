function smallShop([arg1, arg2, arg3]) {

    let product = arg1.toLowerCase();
    let town = arg2.toLowerCase();
    let quantity = Number(arg3);

    if (town === "sofia") {
        if (product === "coffee" ) {
            console.log((0.50 * quantity).toFixed(1));
        //TO DO: finish this ...
    }

    else if (town === "plovdiv") //TO DO: finish this ...
    else if (town === "varna") //TO DO: finish this ...


    
}      
}


smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);