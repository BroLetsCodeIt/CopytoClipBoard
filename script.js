
jQuery.noConflict();
jQuery(document).ready(($)=>{

    // creating the two functions to add and remove the  copied wala part
    function add(){
       
            $('.copied').show();         
   
    }
    
    function removing(){
        setTimeout(()=>{
            $('.copied').hide();
        },2000)
    }
   
    //calling the function

    $('.btn').click(()=>{
      const str = $('.text').val();
      console.log(str);
      console.log(navigator);
      if(navigator.clipboard){
        navigator.clipboard.writeText(str).then(() =>{
            add();
            removing();
        })
      }
      else{
        alert('wrong')
      }
    

     
    
    })
})

