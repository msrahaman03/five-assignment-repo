const cardbtns= document.getElementsByClassName('card-btn')




for(let cardButn of cardbtns){
           
cardButn.addEventListener( 'click',function(){
          const heartIdSpanTag =document.getElementById('heart-id')
          const heartIdStr =heartIdSpanTag.innerText
         
          let heartId = parseInt(heartIdStr)
         heartId++

         heartIdSpanTag.innerText = heartId ;

})

}


const calls = document.getElementsByClassName('call-btn') 

          for(let call of calls ){
                     call.addEventListener('click',function(){
                    alert(
                         
                    )
                    }

                    )
          }













