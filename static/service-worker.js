self.addEventListener('install', (event) => {
    console.log('👷', 'install', event);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('👷', 'activate', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('👷', 'fetch', event);
});



self.addEventListener('fetch', event => {

    const url = new URL(event.request.url);

    if (event.request.method === 'POST' && url.pathname === '/post-shared-content') {
        event.respondWith((async () => {
            const data = await event.request.formData();

            const filename = data.get('title');
            const file = data.get('photos');

            const reader = new FileReader();
            reader.onload = function (e) {
                // const textContent = e.target.result;
                // Do something with the textContent here.

                document.write(filename)

            };
            // reader.readAsText(file);
            return Response.redirect('/snippet-stored-success', 303);
        })());
    }
});
