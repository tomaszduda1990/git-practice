const appendPhoto = (url) => {
    const img = new Image();
    img.src = url;
    $('body').append(img);
}
setInterval(() => {
    $.get('https://jsonplaceholder.typicode.com/photos', function(data){
        const rand = Math.floor(Math.random() * 5000);
        appendPhoto(data[rand].url)
    })
}, 10000);