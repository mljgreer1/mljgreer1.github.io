//initialise
var width = 220;
var carouselItems = [];
var imgs = [
    'http://68.media.tumblr.com/tumblr_li260t37yZ1qbd54go1_500.jpg',
    'http://img0.etsystatic.com/000/0/5311264/il_570xN.30072444.jpg',
    'http://s9.favim.com/orig/130909/anime-art-beauty-draw-Favim.com-908644.jpg',
    'http://24.media.tumblr.com/a9f6d30102441042f2e512798e776289/tumblr_miqsg8kEUX1rp4s2uo1_500.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/ac/39/18/ac3918d32ce4d1f7dbd63ff45701fab1.jpg',
    'http://www.josabela.com/artawareness/images/ArtworkGraphic29RedCanna.gif',
    'http://68.media.tumblr.com/68c1d14b0fe941e3c7d1c39a92de9553/tumblr_oaklznPxCh1ub9aago5_250.jpg'
    ];
var text = [
    'Sep 2016',
    'Oct 2017',
    'Nov 2016',
    'Dec 2016',
    'Jan 2017',
    'Feb 2017',
    'Mar 2017'];
    
initialise();
function initialise() {
    var item = createCarouselObj(0, (innerWidth - 1) / 2);
    carouselItems.push(item);
    $('#carousel').append(item.item);
    while(parseInt(carouselItems[carouselItems.length - 1].item.style.left) < innerWidth) {
        appendItem();
        prependItem();
    }
    roundItems();
}

//create linked images and text to be part of carousel
function createCarouselObj(index, left) {
    // index 0-6
    var item = document.createElement('li');
    item.className = 'carousel-item noselect';
    item.style.left = left + 'px';
    item.style.width = width + 'px';
    var link = document.createElement('a');
    link.href = './issue' + (index + 1) + '.html';
    item.appendChild(link);
    var img = document.createElement('img');
    img.src = imgs[index];
    link.appendChild(img);
    var date = document.createElement('p');
    date.textContent = text[index];
    link.appendChild(date);
    return {item: item, index: index};
}

function appendItem() {
    var lastItem = carouselItems[carouselItems.length - 1];
    var newItem = createCarouselObj(
        (lastItem.index + 1) % imgs.length, 
        (parseInt(lastItem.item.style.left) + width));
        
    carouselItems.push(newItem);
    $('#carousel').append(newItem.item); 
}

//stick items at the beginning or the end of the list
function prependItem() {
    var firstItem = carouselItems[0];
    var newItem = createCarouselObj(
        (firstItem.index + imgs.length - 1) % imgs.length,
        (parseInt(firstItem.item.style.left) - width));
        
    carouselItems.unshift(newItem);
    $('#carousel').prepend(newItem.item);
}

function roundItems() {
    var left = parseInt($('.carousel-item')[0].style.left);
    var diff = left - (innerWidth - width)/ 2;
    diff -= Math.round(diff/width)*width;
    $('.carousel-item').animate({left: '-=' + diff + 'px'});
}

var isDown = false;
var isDragged = false;
var prevX;

//gets location of mouse on event of mouse down
$('#carousel').on('mousedown touchstart', function(event) {
    isDown = true;
    isDragged = false;
    if (event.type == 'mousedown') {
        prevX = event.clientX; //desktop
    } else { //mobile
        if (event.changedTouches.length == 1) {
            prevX = event.changedTouches[0].clientX; 
        }
    }
});

$('#carousel').on('dragstart', function(event) { event.preventDefault(); }); //prevent browser default drag

$('html').on('mousemove touchmove', function(event){
    if (isDown == true) {
        isDragged = true;
        var x;
        if (event.type == 'mousemove') {
            x = event.clientX; //desktop
        } else if (event.changedTouches.length == 1) {
            x = event.changedTouches[0].clientX; //mobile
        }

        var items = $('.carousel-item');
        var left;
        for (var i = 0; i < items.length; i++) {
            left = parseInt(items[i].style.left);
            left += (x - prevX);
            items[i].style.left = left + 'px';
        }
        prevX = x;
        if (parseInt(carouselItems[carouselItems.length - 1].item.style.left) < innerWidth) { //if the last carousel item has a left position within the right of the page make a new one
            appendItem();
        } else if (parseInt(carouselItems[0].item.style.left) > -width) { //if the first carousel item is off the left side of the page by less than the width of each item, create a new one here
            prependItem();   
        }
    }
});

$('html').on('mouseup touchend', function(event){
    roundItems();
    isDown = false;
});

