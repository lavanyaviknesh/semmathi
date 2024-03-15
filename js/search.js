 let availablekeywords = [
    //  'Home',
    //  'About',
    //   'Features',
    //   'Services',
    //   'Gallery',
    //  'contact',
    //  'Download Brochure',
    '<a href="index.html"> Home </a>',
    '<a href="about.html"> About </a>',
    '<a href="feature.html"> Features </a>',
     '<a href="service.html"> Services </a>',
     '<a href="gallery.html"> Gallery </a>',
     '<a href="contact.html"> contact </a>',
     '<a href="brochure.pdf"> Download Brochure </a>',
         ] ;
 const resultsBox = document.querySelector(".result-box");
 const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
     let input = inputBox.value;
     if(input.length){
        result = availablekeywords.filter((keyword)=>{
             return keyword.toLowerCase().includes(input.toLowerCase());
        });
         console.log(result);
   }
       display(result);
         if(!result.length){
         resultsBox.innerHTML = '';
  }
    }
 function display(result){
     const content = result.map((list)=>{
         return "<li onclick=selectInput(this)>"+ list + "</li>";
     });

     resultsBox.innerHTML = "<ul>"+ content.join('') +"</ul>";
 }
    function selectInput(list){
       inputBox.value = list.innerHTML;
       resultsBox.innerHTML ='';

    }
    
   
    