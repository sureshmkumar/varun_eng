
const faq=document.querySelectorAll('.faq-item');


faq.forEach(item=>{


  const btn=item.querySelector('button');

  const body=item.querySelector('div');


  btn.onclick=()=>{


    body.style.display=

      body.style.display==='block'

        ?

        'none'

        :

        'block';


  };


});
