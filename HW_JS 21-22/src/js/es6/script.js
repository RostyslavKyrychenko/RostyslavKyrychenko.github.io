'use strict';

$(() => {

  let html = $('#testing').html();

  const data = {
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

  let content = tmpl(html,data);

  $('body').append(content);
  
  localStorage.setItem('testing', JSON.stringify(data));
  let test = localStorage.getItem('testing');

  test = JSON.parse(test);

  console.log(test)

$('#submit').on('click', () => {
  let test = document.getElementsByClassName('test__item')
  let answ = JSON.parse(localStorage.getItem('testing'))
  let modal = document.querySelector('#modal-body')
  let html = ''

  let errPusher = block => {
    html += "<div><p>Block of questions #"+parseInt(block+1)+" has errors. Please, check answers. =(</p></div>"
    test[block].classList.add('errored')
  }

  let answCheker = (trueAnsw, value) => {
    for (let block = 0; block < trueAnsw.length; block++) {
      if(trueAnsw[block] == value) return true
    }
    return false
  }

  let setResult = (block, result, error) => {
    test[block].classList.add(result)
    if(error) errPusher(block)
  }


  for (let block  = 0; block  < test.length; block ++) {
    let rightAnswers = answ.questions[block].trueValue
    let rightAnswersLength = rightAnswers.length
    let chekboxes = test[block].getElementsByTagName('input')
    let errCounter = 0
    let unchecked = 0

    for (let k = 0; k < chekboxes.length; k++) {
      let checkbox = chekboxes[k]
      if(checkbox.checked == true) {
        if(answCheker(rightAnswers, k)) {
          if(rightAnswersLength == 1) {
            setResult(block, 'successed')
            break;
          }
         } else {
          if(rightAnswersLength > 1) {
            errCounter++
          } else {
           setResult(block, 'errored', 1)
           break;
          }
        }
        } else {
          unchecked++
        }

        if(unchecked == chekboxes.length) {
          setResult(block, 'errored', 1)
          break;
        }
      }
      if(errCounter) setResult(block, 'errored', 1) 
  }

  if(!html) html = "<div><p>All your answers are correct!</p></div>"

  html += '<button onClick="reloadPage()">Close me!</button>'

  modal.innerHTML = html
  let form = document.querySelector('.test')
  form.style.opacity = "0.3"
  modal.style.display = "block"
})
});

let reloadPage = () => document.location.href = document.location.href

let createRightAnswers = test => {
    let answersObject = {};
    test.questions.forEach((question, index) => {
      answersObject["question"+index] = question.trueValue;
    });
    return answersObject;
  }



