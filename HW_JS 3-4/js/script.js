var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }

    if (params.className){
      element.className = params.className;
    }

    if (params.content){
      element.innerHTML = params.content;
    }

    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 1; i < questionsAmount+1; i++) {

      this.createElement({
        tagName: 'h3',
        content: i+'. Вопрос №' + i,
        parentElement: form
      });

      for (var j = 0; j < answersAmount; j++) {

        var wrap = this.createElement({
          tagName: 'div',
          className: 'checkbox',
          parentElement: form
        })

        var label = this.createElement({
          tagName: 'label',
          parentElement: wrap
        });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox',
          parentElement: label
        });

        var text = this.createElement({
          tagName: 'span',
          content: 'Вариант ответа №' + (j + 1),
        })

        label.appendChild(text)

      }

    };

  }

}


var body = document.querySelector('body');


app.createElement({
  tagName: 'h1',
  content: 'Тест по программированию',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'button',
  inputType: 'submit',
  className: 'btn btn-primary btn-lg',
  content: 'Проверить мои результаты',
  parentElement: form
});
