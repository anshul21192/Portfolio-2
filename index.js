let section2=document.getElementsByClassName('section2');

let section1=document.getElementsByClassName('section1');

let menuopen=document.getElementsByClassName('menuopen');


let menubtn=document.getElementsByClassName('menubtn');

let cir=document.getElementsByClassName('cir');

let bar=document.getElementsByClassName('bar');

let box2=document.getElementsByClassName('box2');

let menu=document.getElementById('menu');

menuopen[0].onclick=function(){

    if(body[0].classList=='Classic'){
        section2[0].style.border='.5em solid white';
    }
    

    if(section2[0].style.width!='20em'){
        section2[0].style.width='20em';
        section2[0].style.clipPath='  polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)';
        bar[0].classList.add('cross');

    }
    else{
        section2[0].style.width='2em';
        section2[0].style.clipPath='polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        bar[0].classList.remove('cross');
        section2[0].style.border='none';
    }

}


// .x..................MORE FUNCTION STRATS FROM HERE..................x......x

let project=document.getElementsByClassName('project');

let about=document.getElementsByClassName('about');

let theme=document.getElementsByClassName('theme');

about[0].onclick=function(){

    let aboutoption=document.getElementsByClassName('aboutoption');

    if(about[0].style.height!='28em'){
        about[0].style.height='28em';
        about[0].style.width='18em';
        aboutoption[0].style.marginTop='1em';
        aboutoption[0].style.padding='20px';

      
        project[0].style.display='none';

        theme[0].style.display='none';
      
        underline[0].style.width='100px'
    }
    else{
        about[0].style.height='7em';
        about[0].style.width='16em';
        aboutoption[0].style.marginTop='3.1em';
        aboutoption[0].style.padding='0px';


        project[0].style.display='block';

        theme[0].style.display='block';
    
        underline[0].style.width='0px'
        
    }

}

project[0].onclick=function(){

    if(project[0].style.height!='24em'){
        project[0].style.height='24em';
        project[0].style.width='18em';
        // if(    body[0].classList=='Normal'){

        // project[0].style.backgroundColor='rgb(0 0 0 / 91%)';
        // project[0].style.color='white';
        // }

        about[0].style.display='none';

        theme[0].style.display='none';

        underline[1].style.width='100px'
    }
    else{
        project[0].style.height='7em';
        project[0].style.width='16em';
        // if(    body[0].classList=='Normal'){

        // project[0].style.backgroundColor='rgb(0 0 0 / 16%)';
        // project[0].style.color='black';
        // }

        about[0].style.display='block';

        theme[0].style.display='block';

        underline[1].style.width='0px'

    }

}

let underline=document.getElementsByClassName('underline');

theme[0].onclick=function(){

    if(theme[0].style.height!='24em'){
        theme[0].style.height='24em';
        theme[0].style.width='18em';
        // if(    body[0].classList=='Normal'){

        // theme[0].style.backgroundColor='rgb(0 0 0 / 91%)';
        // theme[0].style.color='white';
        // }

        about[0].style.display='none';

        project[0].style.display='none';

        underline[2].style.width='100px'
    }
    else{
        theme[0].style.height='7em';
        theme[0].style.width='15em';
        // if(  body[0].classList=='Normal'){

        // theme[0].style.backgroundColor='rgb(0 0 0 / 16%)';
        // theme[0].style.color='black';
        // }

        about[0].style.display='block';

        project[0].style.display='block';

        underline[2].style.width='0px'
        
    }

}
// ..............CSS CHANGING CODE...................................

let body=document.getElementsByTagName('body');

// ID ELEMENTS

let container=document.getElementById('container');

let nav=document.getElementById('logo');

// CLASS ELEMENT

let btn1=document.getElementsByClassName('btn1');

let btn2=document.getElementsByClassName('btn2');

let btn3=document.getElementsByClassName('btn3');

let btn=document.getElementsByClassName('btn');

let option=document.getElementsByClassName('option');

let aboutoption=document.getElementsByClassName('aboutoption');

let btntheme=document.getElementsByClassName('btntheme');

// TAGS ELEMENT

let img=document.getElementsByTagName('img');

// FUNTIONING STARTS FROM HERE


// ON CLICK EVENTS

// ...BTN1[0]........

btn1[0].onclick=function(){
    
    if(body[0].classList=='Classic'){

        body[0].classList.remove('Classic');

        btn[0].classList.remove('btnchange3');

        for(i=0;i<3;i++){

            aboutoption[0].style.color='white';
    
            option[i].classList.remove('optionchange3');
    
            btntheme[i].style.backgroundColor='#6495edba';

            
        btntheme[i].style.background='none #6495edba';
         }

         
         btn[0].classList.remove('btnchange3');

         section2[0].style.border='none';

         btntheme[2].classList.remove('active');
    
    }

    if(body[0].classList=='Elegant'){

        body[0].classList.remove('Elegant');

        btn[0].classList.remove('btnchange2');

        btntheme[1].style.background='none white';

        for(i=0;i<3;i++){

    
            option[i].classList.remove('optionchange2');
    
            btntheme[i].style.backgroundColor='#6495edba';
         }

         btntheme[1].classList.remove('active');

        }

        body[0].classList.add('Normal');

        img[0].setAttribute('src','./undraw_wordpress_utxt.svg');

        body[0].style.backgroundImage='linear-gradient(to right,#ffd89b,#19547b)';

        underline[0].style.borderBottom ='4px solid white';
        underline[1].style.borderBottom ='4px solid white';
        underline[2].style.borderBottom ='4px solid white';
        aboutoption[0].style.color='yellow';
        btntheme[0].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
        btntheme[0].classList.add('active');

}

// ...BTN2[0]........


btn2[0].onclick=function(){

    if(body[0].classList=='Normal'){

    body[0].classList.remove('Normal');

    btntheme[0].style.background='none white';

    btntheme[0].classList.remove('active');

    }

    if(body[0].classList=='Classic'){

        body[0].classList.remove('Classic');

        btn[0].classList.remove('btnchange3');

        for(i=0;i<3;i++){

            aboutoption[0].style.color='white';
    
            option[i].classList.remove('optionchange3');
    
            btntheme[i].style.backgroundColor='white';

            
        btntheme[i].style.background='none white';
         }

         
         btn[0].classList.remove('btnchange3');

         section2[0].style.border='none';

         btntheme[2].classList.remove('active');
    

    }

  

     body[0].classList.add('Elegant');

     body[0].style.backgroundImage='linear-gradient(to right, rgb(25 178 197 / 51%), rgb(93 80 201 / 52%))';

    //  ..ADDING CLASSES............

     btn[0].classList.add('btnchange2');

  


     for(i=0;i<3;i++){

        aboutoption[0].style.color='white';

        option[i].classList.add('optionchange2');

        btntheme[i].style.backgroundColor='deepskyblue';
     }

     btntheme[1].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';

     btntheme[1].classList.add('active');

    //  ......DIRECT CHANGES.......

     img[0].setAttribute('src','./undraw_web_development_w2vv.svg');

     underline[0].style.border ='none';
     underline[1].style.border ='none';
     underline[2].style.border ='none';

    
}

// ...BTN3[0]........

btn3[0].onclick=function(){

   
    if(body[0].classList=='Normal'){

        body[0].classList.remove('Normal');
    
        btntheme[0].classList.remove('active');
    
        }
    

    if(body[0].classList=='Elegant'){

        body[0].classList.remove('Elegant');

        btn[0].classList.remove('btnchange2');

        for(i=0;i<3;i++){

    
            option[i].classList.remove('optionchange2');
    
            btntheme[i].style.backgroundColor='white';
         }

         btntheme[1].classList.remove('active');

        }


    body[0].classList.add('Classic');

    body[0].style.backgroundImage='linear-gradient(to left,#614385,#516395)';

    //  ..ADDING CLASSES............

    btn[0].classList.add('btnchange3');

    


    for(i=0;i<3;i++){

        aboutoption[0].style.color='white';

        option[i].classList.add('optionchange3');

        btntheme[i].style.background='linear-gradient(to right,#43cea2,#185a9d)';
     }

     btntheme[2].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';

     btntheme[2].classList.add('active');


  //  ......DIRECT CHANGES.......

    img[0].setAttribute('src','./undraw_Freelancer_re_irh4.svg');
    
    section2[0].style.border='.5em solid white';

    underline[0].style.border ='none';
    underline[1].style.border ='none';
    underline[2].style.border ='none';

}

// ON MOUSEOVER/ EVENT


// ......BTN2[0] MOUSE OVER CODE.........

btn2[0].onmouseover=function(){

    if(body[0].classList=='Normal'){

    
        btntheme[0].style.background='none white';
    
        btntheme[0].classList.remove('active');
    
        }


        if(body[0].classList=='Classic'){

    
            btn[0].classList.remove('btnchange3');
    
            for(i=0;i<3;i++){
    
                aboutoption[0].style.color='white';
        
                option[i].classList.remove('optionchange3');
        
                btntheme[i].style.backgroundColor='white';
    
                
            btntheme[i].style.background='none white';
             }
    
             
             btn[0].classList.remove('btnchange3');
    
             section2[0].style.border='none';
    
             btntheme[2].classList.remove('active');
        
    
        }




        body[0].style.backgroundImage='linear-gradient(to right, rgb(25 178 197 / 51%), rgb(93 80 201 / 52%))';
   
       //  ..ADDING CLASSES............
   
        btn[0].classList.add('btnchange2');
   
     
   
   
        for(i=0;i<3;i++){
   
           aboutoption[0].style.color='white';
   
           option[i].classList.add('optionchange2');
   
           btntheme[i].style.backgroundColor='deepskyblue';
        }
   
        btntheme[1].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
   
        btntheme[1].classList.add('active');
   
       //  ......DIRECT CHANGES.......
   
        img[0].setAttribute('src','./undraw_web_development_w2vv.svg');
   
        underline[0].style.border ='none';
        underline[1].style.border ='none';
        underline[2].style.border ='none';
   

}


btn2[0].onmouseout=function(){

    if(body[0].classList=='Normal'){

        body[0].classList.add('Normal');

        img[0].setAttribute('src','./undraw_wordpress_utxt.svg');

        body[0].style.backgroundImage='linear-gradient(to right,#ffd89b,#19547b)';

        underline[0].style.borderBottom ='4px solid white';
        underline[1].style.borderBottom ='4px solid white';
        underline[2].style.borderBottom ='4px solid white';
        aboutoption[0].style.color='yellow';
        btntheme[0].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
        btntheme[0].classList.add('active');


        // ......ELEGANT REMOVE.....

        body[0].classList.remove('Elegant');

        btn[0].classList.remove('btnchange2');

        btntheme[1].style.background='none white';

        for(i=0;i<3;i++){

    
            option[i].classList.remove('optionchange2');
    
            btntheme[i].style.backgroundColor='#6495edba';
         }

         btntheme[1].classList.remove('active');

    
        }


        if(body[0].classList=='Classic'){

      

            body[0].style.backgroundImage='linear-gradient(to left,#614385,#516395)';
        
            //  ..ADDING CLASSES............
        
            btn[0].classList.add('btnchange3');
        
            
        
        
            for(i=0;i<3;i++){
        
                aboutoption[0].style.color='white';
        
                option[i].classList.add('optionchange3');
        
                btntheme[i].style.background='linear-gradient(to right,#43cea2,#185a9d)';
             }
        
             btntheme[2].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
        
             btntheme[2].classList.add('active');
        
        
          //  ......DIRECT CHANGES.......
        
            img[0].setAttribute('src','./undraw_Freelancer_re_irh4.svg');
            
            section2[0].style.border='.5em solid white';
        
            underline[0].style.border ='none';
            underline[1].style.border ='none';
            underline[2].style.border ='none';

        }

        


}



// ......BTN3[0] ON HOVER CODE.........


btn3[0].onmouseover=function(){

    if(body[0].classList=='Normal'){

    
        btntheme[0].style.background='none white';
    
        btntheme[0].classList.remove('active');
    
        }




        body[0].style.backgroundImage='linear-gradient(to left,#614385,#516395)';

        //  ..ADDING CLASSES............
    
        btn[0].classList.add('btnchange3');
    
        
    
    
        for(i=0;i<3;i++){
    
            aboutoption[0].style.color='white';
    
            option[i].classList.add('optionchange3');
    
            btntheme[i].style.background='linear-gradient(to right,#43cea2,#185a9d)';
         }
    
         btntheme[2].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
    
         btntheme[2].classList.add('active');
    
    
      //  ......DIRECT CHANGES.......
    
        img[0].setAttribute('src','./undraw_Freelancer_re_irh4.svg');
        
        section2[0].style.border='.5em solid white';
    
        underline[0].style.border ='none';
        underline[1].style.border ='none';
        underline[2].style.border ='none';
    

}

btn3[0].onmouseout=function(){
           

    if(body[0].classList=='Normal'){


                   // .......REMOVING CLASSIC.....

                   btn[0].classList.remove('btnchange3');

                   for(i=0;i<3;i++){
           
                       aboutoption[0].style.color='white';
               
                       option[i].classList.remove('optionchange3');
               
                       btntheme[i].style.backgroundColor='#6495edba';
           
                       
                   btntheme[i].style.background='none #6495edba';
                    }
           
                    
                    btn[0].classList.remove('btnchange3');
           
                    section2[0].style.border='none';
           
                    btntheme[2].classList.remove('active');
       


         //  .....FOR NORMAL.....
        img[0].setAttribute('src','./undraw_wordpress_utxt.svg');

        body[0].style.backgroundImage='linear-gradient(to right,#ffd89b,#19547b)';

        underline[0].style.borderBottom ='4px solid white';
        underline[1].style.borderBottom ='4px solid white';
        underline[2].style.borderBottom ='4px solid white';
        aboutoption[0].style.color='yellow';
        btntheme[0].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
        btntheme[0].classList.add('active');

    
        }

        // ......FOR ELEGANT.....

        if(body[0].classList=='Elegant'){

                       // .......REMOVING CLASSIC.....

                       btn[0].classList.remove('btnchange3');

                       for(i=0;i<3;i++){
               
                           aboutoption[0].style.color='white';
                   
                           option[i].classList.remove('optionchange3');
                   
                           btntheme[i].style.backgroundColor='#6495edba';
               
                           
                       btntheme[i].style.background='none #6495edba';
                        }
               
                        
                        btn[0].classList.remove('btnchange3');
               
                        section2[0].style.border='none';
               
                        btntheme[2].classList.remove('active');
           

                        // .....ELEGANT.....

            body[0].style.backgroundImage='linear-gradient(to right, rgb(25 178 197 / 51%), rgb(93 80 201 / 52%))';

            //  ..ADDING CLASSES............
        
             btn[0].classList.add('btnchange2');
        
          
        
        
             for(i=0;i<3;i++){
        
                aboutoption[0].style.color='white';
        
                option[i].classList.add('optionchange2');
        
                btntheme[i].style.backgroundColor='deepskyblue';
             }
        
             btntheme[1].style.background='linear-gradient(to left, #ddd6f3,#faaca8)';
        
             btntheme[1].classList.add('active');
        
            //  ......DIRECT CHANGES.......
        
             img[0].setAttribute('src','./undraw_web_development_w2vv.svg');
        
             underline[0].style.border ='none';
             underline[1].style.border ='none';
             underline[2].style.border ='none';

        }

}

