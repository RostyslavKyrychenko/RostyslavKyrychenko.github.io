var Timer = function() {
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.ms = 0;
  
  this.timers = {
    hours: false,
    minutes: false,
    seconds: false,
    ms: false
  }
}

Timer.prototype.startTimer = function() {  
  this.toggleElement('st', 'Pause', 'timer.pauseTimer()')

  this.setInterval('hours', 3600000)
  this.setInterval('minutes', 60000)
  this.setInterval('seconds', 1000)
  this.setInterval('ms', 1)
};

Timer.prototype.stopTimer = function() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.ms = 0;
  
  for(var t in this.timers) {
    document.getElementsByClassName(t)[0].innerHTML = '00'
    clearInterval(this.timers[t])
  };
  this.toggleElement('st', 'Start', 'timer.startTimer()')
};

Timer.prototype.pauseTimer = function() {
  this.toggleElement('st', 'Cont...', 'timer.startTimer()')
   for(var t in this.timers) {
    clearInterval(this.timers[t])
  };
};

Timer.prototype.setInterval = function(elementName, delay) {
  var self = this
  this.timers[elementName] = setInterval(function() {
     var result = ++self[elementName]
     if(elementName == 'ms' && self[elementName] > 1000) {
        self[elementName] = 0
        result = 0
     }
     if(elementName != 'ms' && self[elementName] >= 60){
        self[elementName] = 0
        result = 0
     }
     if(result < 10) {
       result = '0'+self[elementName]
     }
     document.getElementsByClassName(elementName)[0].innerHTML = result
  }, delay)
};

Timer.prototype.toggleElement = function(element, text, fn) {
  var e = document.getElementById(element)
  e.innerHTML = text
  e.setAttribute('onclick', fn)
};

var timer = new Timer();