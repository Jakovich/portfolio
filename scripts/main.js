$(document).ready(function(){
  var mainHeader = $('.main-header');
  $(window).scroll(function(){
    //$(this).scrollTop() > $('#intro').innerHeight() - 60 ? mainHeader.addClass('main-header--dark', 'fast') :  mainHeader.removeClass('main-header--dark', 'fast');
    checkHeight();
  });
  checkHeight();
  function checkHeight() {
    $(this).scrollTop() > $('#intro').innerHeight() - 60 ? mainHeader.addClass('main-header--dark', 'fast') :  mainHeader.removeClass('main-header--dark', 'fast');
  }
  $('.navbar-nav a[href^="#"]').click(function () {
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - 80;
       $('html').animate( { scrollTop: destination }, 1100 );
       $('body').animate( { scrollTop: destination }, 1100 );
   });



   //showmore projects
   var template = document.querySelector('#project-template');
   var elementToClone;

   if ('content' in template) {
     elementToClone = template.content.querySelector('.projects__item');
   } else {
     elementToClone = template.querySelector('.projects__item');
   }
   var projectsItems = [];
   console.log(elementToClone)

   $.getJSON( "assets/projects.json")
     .done(function( json ) {
       projectsItems = json;
      })
      .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
   });

   $('[data-value=show-more]').click(function(){
        $(this).fadeOut(0);
        $.each( projectsItems.projects, function( i, item ) {
          var element = elementToClone.cloneNode(true);
          element.querySelector('.project__descr').textContent = item.descr;
          element.querySelector('.projects__name').textContent = item.name;
          element.querySelector('.projects__date').textContent = item.date;
          element.querySelector('img').src = item.img;
          element.querySelector('img').alt = item.placeholder;
          element.querySelector('[data-value="pageLink"]').href = item.pageLink;
          element.querySelector('[data-value="sourceLink"]').href = item.sourceLink;
          $.each( item.technics, function(i, item){
            console.log(item)
            var currentItem = document.createElement('li');
            currentItem.innerHTML = item;
            element.querySelector('ul').appendChild(currentItem);
          })
          if (i % 2 == 0) {
            element.querySelector('.col-md-5').classList.add("col-sm-push-7");
            element.querySelector('.col-md-7').classList.add("col-sm-pull-5");
          }
          if(item.count == 1) {
            element.querySelector('.projects__btn:nth-child(1)').textContent = "Voir la page";
          }
          console.log(element);
          $('.projects .container').append(element);


        })
        //console.log(projectsItems.projects[1].img);


   })

})
