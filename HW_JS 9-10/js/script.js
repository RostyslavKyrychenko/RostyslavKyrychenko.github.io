//---------NAVIGATION ------------------------------

$(function() {
var $dropdown = $('.dropdown');

$dropdown.hover(function() {
  $( this ).fadeOut( 200 );
  $( this ).fadeIn( 300 );
  
  var $submenu = $(this).children().siblings('.submenu');
  var color = Math.floor(Math.random() * (999999 - 100000) + 100000);
    $submenu.slideToggle();
    $submenu.css('background', '#'+color)
    });

})

//SELECT--------------------------------

jQuery(document).ready(function(){
var params = {
        changedEl: ".lineForm select",
        visRows: 5,
        scrollArrows: true
    }
    cuSel(params);
    
    var params = {
        changedEl: "#city",
        scrollArrows: false
    }
    cuSel(params);
    
    
    /*
        динамическое добавление селекта
    */
jQuery("#addSelect").click(
function()
{
    var addedSelect =   '<select id="add-select" name="add-select">'+
                        '<option value="1">доллар США</option>'+
                        '<option value="2">доллар канадский</option>'+
                        '<option value="3">доллар новозеландский</option>'+
                        '<option value="4">фунт стерлинг</option>'+
                        '<option value="5">гривна</option>'+
                        '<option value="6">рубль</option>'+
                        '<option value="7">евро</option>'+
                        '</select>';
    jQuery(this).replaceWith(addedSelect);
    
    var params = {
        changedEl: ".lineForm select",
        visRows: 4
    }
    cuSel(params);
    
});
/*
    показ скрытого селекта
 */
jQuery("#showSel").click(
function()
{
    jQuery(this).prev().fadeIn();
    params = {
    refreshEl: "#city2, #city20, #city30", /* перечисляем через запятую id селектов, которые нужно обновить */
    visRows: 4
    }
    cuSelRefresh(params);
});
/*
    динамическое добавление оптионов
*/
jQuery("#addAnimals").click(
function()
{
    var newAnimals = '<span val="4">Слон</span><span val="5">Жираф африканский</span>';
    
    jQuery("#cusel-scroll-animals").append(newAnimals);
    
    /* обновлеям селект, чтобы перинициализировать сроллинг */
        
    
    var params = {
        refreshEl: "#animals",
        visRows: 4
    }
    cuSelRefresh(params);
    
});
jQuery("#butTest").click(
function()
{
    if(jQuery(this).val()=="Задизайблить селект") 
    {
        jQuery("#cuselFrame-amimals3").addClass("classDisCusel");
        jQuery(this).val("Раздизайблить селект");
    }
    else
    {
        jQuery("#cuselFrame-amimals3").removeClass("classDisCusel");
        jQuery(this).val("Задизайблить селект");
    }
});
  $("#btnSet").click(function(){
    cuselSetValue("#country", $("#txtVal").val());
  })
});

//================ JFORM =================================

jQuery(document).ready(function(){

jQuery(".niceCheck").each(
/* при загрузке страницы меняем обычные на стильные checkbox */
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });


function changeCheck(el)
/* 
    функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
    el - span контейнер для обычного чекбокса
    input - чекбокс
*/
{

    var el = el,
        input = el.find("input").eq(0);
          
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {   
        if(!input.attr("checked")) {
            el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
    
    return true;
}

function changeVisualCheck(input)
{
/*
    меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
    if(!input.attr("checked")) {
        wrapInput.removeClass("niceChecked");
    }
    else
    {
        wrapInput.addClass("niceChecked");
    }
}

function changeCheckStart(el)
/* 
    новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
    новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{

try
{
var el = el,
    checkName = el.attr("name"),
    checkId = el.attr("id"),
    checkChecked = el.attr("checked"),
    checkDisabled = el.attr("disabled"),
    checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
    if(checkChecked) {
        el.after("<span class='niceCheck niceChecked'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
            "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
        el.hide()
    } else {
            el.after("<span class='niceCheck'>"+
            "<input type='checkbox'"+
            "name='"+checkName+"'"+
            "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
            "tabindex='"+checkTab+"' /></span>");
        el.hide()
    }
    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */      
    if(checkDisabled)
    {
        el.next().addClass("niceCheckDisabled");
        el.next().find("input").eq(0).attr("disabled","disabled");
    }
    
    /* цепляем обработчики стилизированным checkbox */      
    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
    if(jQuery.browser.msie)
    {
        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });   
    }
    el.remove();
}
catch(e)
{
    // если ошибка, ничего не делаем
}

    return true;
}


