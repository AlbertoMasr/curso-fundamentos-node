function asincrona(callback) {
    setTimeout(function() {
        try {
            // let a = 3 + z;
            let a = 3 + 3;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}

asincrona(function(err, dato) {
    if(err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }

    console.log('Todo ha ido bien, mi data es', dato);
});
