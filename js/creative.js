x = 0;
var images = [];

images[0] = "media/porto/porto1.jpg";
images[1] = "media/porto/porto2.jpg";
images[2] = "media/porto/porto3.jpg";
function CB() {
  
  try {
   
    images.forEach(function(img){
      new Image().src = img; 
      // caches images, avoiding white flash between background replacements
    });
  

      setInterval(function(){
        document.getElementById('location').style="background-image:url(" + images[x] + ");";
        x++;
        if(x >= images.length){
          x = 0;
        }  
      }, 5000)
  } catch(err) {
      alert(err.message);
  }
}

CB();



//caroussel
$('#recipeCarousel').carousel({
  interval: 2000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<3;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
