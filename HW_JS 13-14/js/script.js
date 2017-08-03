'use strict';

$(function() {

  var html = $('#testing').html();

  var data = {
    headerTitle: 'Тест по программированию',
    questions: [
      {
        title: 'Вопроc №1',
        options: ['Ответ№1', 'Ответ№2', 'Правильный ответ№3'],
        trueValue: [2]
      },
      {
        title: 'Вопроc №2',
        options: ['Правильный ответ№1', 'Ответ№2', 'Ответ№3'],
        trueValue: [0]
      },
      // {
      //   title: 'Вопроc №3',
      //   options: ['Ответ№1', 'Правильный ответ№2', 'Ответ№3'],
      //    trueValue: [1]
      // },
      {
        title: 'Вопроc №3',
        options: ['Правильный ответ№1', 'Правильный ответ№2', 'Ответ№3', 'Ответ№4'],
        trueValue: [0, 1]
      },
      {
        title: 'Вопроc №4',
        options: ['Ответ№1', 'Ответ№2', 'Правильный ответ№3', 'Правильный ответ№4'],
        trueValue: [2, 3]
      }],
        submit: 'Проверить мои результаты'
    };

  var content = tmpl(html,data);

  $('body').append(content);
  
  
  localStorage.setItem('testing', JSON.stringify(data));
  var test = localStorage.getItem('testing');

  test = JSON.parse(test);

  console.log(test)


$('#submit').on('click', function () {
  var test = document.getElementsByClassName('test__item')
  var answ = JSON.parse(localStorage.getItem('testing'))
  var modal = document.querySelector('#modal-body')
  var html = ''

  var errPusher = function(block) {
    html += "<div><p>Block of questions #"+parseInt(i+1)+" has errors. Please, check answers. =(</p></div>"
    test[i].classList.add('errored')
  }

  var answCheker = function(trueAnsw, value) {
    for (var i = 0; i < trueAnsw.length; i++) {
      if(trueAnsw[i] == value) return true
    }
    return false
  }

  var setResult = function(block, result, error) {
    test[i].classList.add(result)
    if(error) errPusher(block)
  }


  for (var i = 0; i < test.length; i++) {
    var rightAnswers = answ.questions[i].trueValue
    var rightAnswersLength = rightAnswers.length
    var chekboxes = test[i].getElementsByTagName('input')
    var errCounter = 0
    var unchecked = 0

    for (var k = 0; k < chekboxes.length; k++) {
      var checkbox = chekboxes[k]
      if(checkbox.checked == true) {
        if(answCheker(rightAnswers, k)) {
          if(rightAnswersLength == 1) {
            setResult(i, 'successed')
            break;
          }
         } else {
          if(rightAnswersLength > 1) {
            errCounter++
          } else {
           setResult(i, 'errored', 1)
           break;
          }
        }
        } else {
          unchecked++
        }

        if(unchecked == chekboxes.length) {
          setResult(i, 'errored', 1)
          break;
        }
      }
      if(errCounter) {
         setResult(i, 'errored', 1) 
        }
  }

  if(!html) {
    html = "<div><p>Success! All your answers are correct!</p></div>"
  }

  html += '<button onClick="reloadPage()">Close me!</button>'

  modal.innerHTML = html
  var form = document.querySelector('.test')
  // form.style.opacity = "0.3"
  modal.style.display = "block"
})

});

function reloadPage() {
  document.location.href = document.location.href
}

function createRightAnswers(test) {
    var answersObject = {};
    test.questions.forEach(function(question, index) {
      answersObject["question"+index] = question.trueValue;
    });
    return answersObject;
  }



