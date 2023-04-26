if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./service-worker.js')
        .then(function (reg) {
            console.log("Service worker registered.")
        }).catch(function (err) {
            console.log("Service worker not registered. This happened:", err)
        })
}


self.addEventListener('fetch', function (event) { })

document.write('SCEMO!')
alert('CIAO!')
