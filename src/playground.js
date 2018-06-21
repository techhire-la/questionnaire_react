// function checkZip (zip, hash) {
//     //if the 1st zip element on the contact
//
//     var filterCatalogue = []
//     var clonedHash = hash.slice(0);
//
//     if(typeof(hash.zip[0] === 'number') ) {
//         var zipsArray = hash.zip
//         var regexZip = '^' + zip + '\ ';
//
//         for(var y = 0 ; y < zipsArray.length ; y++){
//             if(zipsArray[y].match(regexZip)) {
//                 filterCatalogue.push(clonedHash[x]);
//                 clonedHash.splice(x,1);
//                 console.log("popped " + clonedHash[x]);
//             }
//         }
//     }
// }

//// This is the one I am fixing ///////////
function checkZip (zip, hash) {
    //if the 1st zip element on the contact

    var filterCatalogue = []
    var clonedHash = hash.slice(0);

    if(typeof(hash.zip[0] === 'number') ) {
        var zipsArray = hash.zip
        // var regexZip = '^' + zip + '\ ';

        for(var y = 0 ; y < zipsArray.length ; y++){
            // if(zipsArray[y].match(regexZip)) {
            var zipMatch = zipsArray[y].match(zip)
            if(zipMatch != null) {
                filterCatalogue.push(clonedHash[x]);
                clonedHash.splice(x,1);
                console.log("popped " + clonedHash[x]);
            }
        }
    }
}


function checkZip (zip, arr) {

    var filterCatalogue = [];
    var array = arr.slice(0);

    if(typeof(array[0] === 'number') ) {

        for(var y = 0 ; y < array.length ; y++){
            var stringElement = String(array[y]);
            var zipMatch = stringElement.match(zip);

            if(zipMatch != null) {
                filterCatalogue.push(array[y]);
                array.splice(y,1);
            }
        }
    }

    return filterCatalogue

}



// function checkZip (zip, arr) {
//     //if the 1st zip element on the contact
//
//     var filterCatalogue = [];
//     var array = arr.slice(0);
//     // console.log("cloned array: " + array);
//     // var clonedHash = hash.slice(0);
//
//     if(typeof(array[0] === 'number') ) {
//         // console.log("inside if array is a number")
//         // console.log("typeof(array[0] === 'number'): " + typeof(array[0] === 'number'))
//         // var zipsArray = hash.zip
//         var zipString = String(zip);
//         console.log("typeof(zipString): " + typeof(zipString))
//         // var regexZip = '^' + zipString + '\ ';
//         var regexZip = '^'+ zipString + '\ ';
//         console.log("regexZip: " + regexZip);
//
//         for(var y = 0 ; y < array.length ; y++){
//             var stringElement = String(array[y]);
//
//             // console.log("stringElement: " + stringElement);
//             // console.log("typeof(stringElement): " + typeof(stringElement));
//
//             // var zipMatch = stringElement.match(regexZip);
//             var zipMatch = stringElement.match(zip);
//
//             // console.log("zipMatch: " + zipMatch);
//
//             if(zipMatch != null) {
//                 filterCatalogue.push(array[y]);
//                 // console.log("filterCatalogue: " + filterCatalogue);
//                 array.splice(y,1);
//                 // console.log("popped " + array[y]);
//             }
//         }
//     }
//     return filterCatalogue
// }


function checkZip (zip, arr) {

    var filterCatalogue = [];
    var array = arr.slice(0);

    if(typeof(array[0] === 'number') ) {

        for(var y = 0 ; y < array.length ; y++){
            var stringElement = String(array[y]);

            var zipMatch = stringElement.match(zip);

            if(zipMatch != null) {
                filterCatalogue.push(array[y]);
                array.splice(y,1);
            }
        }
    }

    return filterCatalogue

}