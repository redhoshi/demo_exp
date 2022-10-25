function read_csv(path){
    var reader = new FileReader();
    // ファイル読み込みに成功したときの処理
    reader.onload = function() {
        var cols = reader.result.split('\n');
        var data = [];
        for (var i = 0; i < cols.length; i++) {
            data[i] = cols[i].split(',');
        }
        var insert = createTable(data);
        result.appendChild(insert);
    }
    reader.readAsText(fileData);
    // ファイル読み込みを実行

    return data
}