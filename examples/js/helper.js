function create_index(array){
    newArray = [];
    while (array.length > 0) {
        n = array.length;
        k = Math.floor(Math.random() * n);
      
        newArray.push(array[k]);
        array.splice(k, 1);
    }
    return newArray
}

function shuffle_file(filename){
    newfile = [];
    var rand_array = [0, 1];
    for(let i=0;i<filename.length;i++){
        rand_array = create_index(rand_array)
        newfile[i] = [filename[i][rand_array[0]],filename[i][rand_array[1]]]
    }
    return newfile
}