
$(function() {

   var html = $('#profile').html();

   var data = {
        profile_title: 'Кириченко Ростислав Дмитриевич',
        profile_image_url: 'img/Rostyslav.jpg',
        profile_content: 'Студент курса GoIT',
        study_title: 'Хочу учить фронтенд потому что:',
        study_reasons: ['Заборы строить не интересно',
                        'Платят норм',
                        'Приходится работать по ночам'],
        phone_title: 'Мой контактный телефон:',
        phone_number: '0953220127',
        vk_title: 'Мой профиль Вконтакте:',
        vk_url: 'https://vk.com/',
        vk_link: 'vk.com',
        feedback_title: 'Мой фидбек:',
        feedback_content: 'Если нужно, могу построить вам забор'
    };

   var content = tmpl(html,data);

   $('body').append(content);

});
