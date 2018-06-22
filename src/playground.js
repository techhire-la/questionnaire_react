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


inTheRightZip = (zipList, zipState) => {


    console.log("inTheRightZip")
    ///////////// HANDLE ZIPS //////////////////////
    console.log("typeof(zipList[0] === 'number') RESULT:  " + typeof(zipList[0]))
    if(typeof(zipList[0] === 'number') ) {

        var zipsArray = zipList

        for(var y = 0 ; y < zipsArray.length ; y++){

            var stringyZip = String(zipsArray[y]);
            var zipMatch = stringyZip.match(zipState);

            return zipMatch
        }

    }

    console.log("typeof(zipList[0] === 'string') RESULT:  " + typeof(zipList[0]))
    if(typeof(zipList[x].zip[0] === 'string') ){
        return 'string'

    }


}


// function loop (arr, h) {
handleFormData = (array) => {

    var filterCatalogue = [];
    var clonedHash = catalogueData.contacts.slice(0);
    // console.log("clonedHash at the top: " + clonedHash);

    //sort through truthy array
    var arr = array;
    console.log("arr: " + arr);

    for( var i = 0 ; i <= arr.length ; i++ ) {

        //sort through contacts
        for( var x = 0 ; x < clonedHash.length ; x++) {

            if(clonedHash[x].hasOwnProperty(arr[i]) === true ){

                var zipCheck = this.inTheRightZip(clonedHash[x].zip, this.state.zip);

                console.log("After zip check")

                if( zipCheck === 'string') {

                    console.log( "zipCheck === 'string': " + zipCheck );

                    filterCatalogue.push(clonedHash[x]);
                    clonedHash.splice(x, 1);
                    console.log("popped " + clonedHash[x]);
                }

                if(zipCheck != null) {

                    console.log("zipCheck != null: " + zipCheck);

                    filterCatalogue.push(clonedHash[x]);
                    clonedHash.splice(x, 1);
                    console.log("popped " + clonedHash[x]);
                }


            }
        }
    }
    console.log("filterCatalogue.length: " + filterCatalogue.length);
    console.log("filterCatalogue: " + filterCatalogue);
    return filterCatalogue
};





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