document.write('serviceWorker' in navigator)

if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/static/service-worker.js')
        .then(function (reg) {
            // console.log("Service worker registered.")
            // confirm('SERVICE WORKER REGISTERE!')
            document.write('YAY!')
        }).catch(function (err) {
            document.write('NOOOOOOOOOO!', err)
        })
}

// document.write('SCEMO!')
// alert('CIAO!')

// var parsedUrl = new URL(window.location.toString());
// console.log('Title shared: ' + parsedUrl.searchParams.get('name'));
// console.log('Text shared: ' + parsedUrl.searchParams.get('description'));
// console.log('URL shared: ' + parsedUrl.searchParams.get('link'));