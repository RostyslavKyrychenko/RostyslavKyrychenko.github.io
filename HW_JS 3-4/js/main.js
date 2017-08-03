var h3 = document.createElement('h3');
h3.innerHTML ='Тест по программированию' ;
document.body.appendChild(h3);


var div = document.createElement('div');
document.body.appendChild(div);
var ol = document.createElement('ol');
div.appendChild(ol);


for( var i = 1; i <= 3; i++){
   var ol_li = document.createElement('li');
    ol_li.innerHTML= "Вопрос №"+i;
    ol.appendChild(ol_li);
        var ul =document.createElement('ul');
        ol_li.appendChild(ul);
          for(var a = 1; a <= 3; a++){
              var ul_li = document.createElement('li');
              ul_li.innerHTML ="Вариант ответа № "+ a;
              ul.appendChild(ul_li);
}
        
    
}

var button = document.createElement('input');
button.type ='button';
button.value = 'Проверить мои результаты';
document.body.appendChild(button);

