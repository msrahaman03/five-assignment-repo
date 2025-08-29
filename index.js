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




          

const copys = document.getElementsByClassName('copy-class')

for(let copy of copys){
          copy.addEventListener('click', function(){
                    const copyTag = document.getElementById('copy-id')
                    const copyIdStr =copyTag.innerText

                    let copyId = parseInt(copyIdStr)
                    copyId++

                    copyTag .innerText = copyId;
          })
}










