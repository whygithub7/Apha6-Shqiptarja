$(document).ready(function(){$('.menu-btn').click(function(){$('#mega-menu').slideToggle(200);});$.fn.toggleText=function(t1,t2){if(this.attr('data-state')=='close'){this.attr('data-state','open');this.html(t1);$("#player video").get(0).pause();jwplayer('player').stop();}else{this.attr('data-state','close');this.html(t2);$("#player video").get(0).play();jwplayer('player').play();}
return this;};$('.drop_down img').click(function(){$('#menu').slideToggle();});$('.mob_cup_menu > img').click(function(){$('.world_cup_menu > ul').slideToggle();});$('.world_cup_menu ul li:nth-of-type(4)').click(function(){$('.world_cup_menu_child').slideToggle();});$('.tabs button').click(function(){var tab_class=$(this).attr('data-tab');$('.tabs button').removeClass('active');$('.tab-content').removeClass('active');$(this).addClass('active');$("."+tab_class).addClass('active');});$('.tabs-2 button').click(function(){var tab_class=$(this).attr('data-tab');$('.tabs-2 button').removeClass('current');$('.tab-content').removeClass('current');$(this).addClass('current');$("."+tab_class).addClass('current');});if($(window).outerWidth()<=768){$('.menu-main li h2').click(function(){if($(this).hasClass('current')){$(this).removeClass('current');$(this).children().css({'transform':'scaleY(1)','transition':'all .2s'});}else{$(this).addClass('current');$(this).children().css({'transform':'scaleY(-1)','transition':'all .2s'});}
$(this).parent().siblings().find('h2').removeClass('current');$(this).siblings('.sub-menu').slideToggle(200);$(this).parent().siblings().find('.sub-menu').hide(200);$(this).parent().siblings().find('i').css({'transform':'scaleY(1)','transition':'all .2s'});});}
var searchInput=$('#search input[type="search"]');var submitInput=$('#search input[type="submit"]');$('.search-btn').click(function(){if(searchInput.css('width')=='0px'){searchInput.focus();if($(window).outerWidth()<=768){searchInput.css('width','200px');}else{searchInput.css('width','220px');}}else{if(searchInput.val()!=""){submitInput.trigger("click");}else{searchInput.css('width','0px');}}});$(".go-top").click(function(){var content=$("#wrapper");$('html, body').animate({scrollTop:$(content).offset().top},300);});$(window).scroll(function(){if($(window).scrollTop()>=2000){$('.go-top').css({'bottom':'20px','transition':'all .5s'});}else{$('.go-top').css({'bottom':'-70px','transition':'all .5s'});}});});


// все встроенные
 
    $(document).ready(function() {
        var swiper3 = new Swiper('.first_slide', {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            //spaceBetween: 100,
            speed: 500,
            slidesPerView: 5,
            spaceBetween: 20,
            // pagination: {
            // el: '.swiper-pagination',
            // clickable: true,
            // },
            preventClicks: false,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                }
            },
            navigation: {
                nextEl: '.next2',
                prevEl: '.prev2',
            }
        });
    });
 


// таймер  и лайки 
 
       (function() {
           let time = 3620;
        let intr;
    
        function start_timer() {
          intr = setInterval(tick, 1000);
        }
    
        function tick() {
          time = time - 1;
          let hours = Math.floor(time / (60 * 60));
          let mins = Math.floor(time / 60 - hours * 60);
          let secs = time - hours * 60 * 60 - mins * 60;
          if (hours == 0 && mins == 0 && secs == 0) {
            clearInterval(intr);
          }
          hours = hours >= 10 ? hours : "0" + hours;
          mins = mins >= 10 ? mins : "0" + mins;
          secs = secs >= 10 ? secs : "0" + secs;
          document.getElementById("hr").innerHTML = hours;
          document.getElementById("min").innerHTML = mins;
          document.getElementById("sec").innerHTML = secs;
        }
    
        start_timer();
    })(); 
    
    
    // увеличение лайков
 
       // Получите все кнопки лайков 
       const likeButtons = document.querySelectorAll('.comments-like__icon'); 
       // Добавьте обработчик события клика на каждую кнопку 
       likeButtons.forEach((button) => { 
       // Добавьте обработчик события клика на текущую кнопку 
       button.addEventListener('click', (event) => { 
       // Найдите родительский элемент комментария (article) для текущей кнопки 
       const commentElement = event.target.closest('article'); 
       // Найдите счетчик лайков внутри родительского комментария 
       const likeCount = commentElement.querySelector('.comments-like__count'); 
       // Проверьте, поставлен ли лайк на этот комментарий 
       const isLiked = commentElement.getAttribute('data-liked') === 'true'; if (!isLiked) { 
       // Увеличьте счетчик на 1 
       let currentLikeCount = parseInt(likeCount.textContent); currentLikeCount++; 
       // Обновите текст счетчика лайков 
       likeCount.textContent = currentLikeCount;  
       // Установите флаг, что лайк был поставлен для этого комментария 
       commentElement.setAttribute('data-liked', 'true'); } }); }); 
 


// Новые коменты 
 
 function addComment() { 
   // Получение значений из формы 
   const userName = document.querySelector('.userName').value; 
   const userSurname = document.querySelector('.userSurname').value; 
   const userComment = document.querySelector('.userComment').value; 
   const avatarInput = document.querySelector('.avatar-input'); 
   const photoInput = document.querySelector('.photo-input'); 
   // Загрузка изображений в память браузера 
   const avatarFile = avatarInput.files[0]; 
   const photoFile = photoInput.files[0]; 
   // Проверка наличия выбранных файлов 
   if (avatarFile && photoFile) { 
     const avatarReader = new FileReader(); 
     const photoReader = new FileReader(); 
     avatarReader.onload = function () { photoReader.onload = function () { 
       // Создание элемента комментария 
       const commentElement = document.createElement('div'); 
       commentElement.classList.add('comment-bubble'); 
       commentElement.innerHTML = ` <!-- HTML-разметка комментария --> <article class="comments-message comments-message_grey"> <div class="comments-user"> <div class="comments-avatar comments-avatar_grey"> <img src="${avatarReader.result}" style="border-radius: 24px;" loading="lazy"> </div> </div> <div class="comments-field comments-field_grey js-bubble"> <header class="comments-flex"> <div class="comments-flex__name">${userName} ${userSurname}</div> </header> <div class="comments-field__txt"> <p>${userComment}</p> <img src="${photoReader.result}" loading="lazy"> </div> <footer class="comments-flex comments-flex_footer"> <div class="comments-like js-like-btn"> <svg width="13" height="13" viewBox="0 0 13 13" xmlns="https://www.w3.org/2000/svg" class="comments-like__icon"> <path d="M1.576 4.875H0V13h1.576c.435 0 .788-.364.788-.813v-6.5c0-.448-.353-.812-.788-.812zM12.606 6.5l-.788 5.688c-.086.532-.354.812-.788.812H6.303c-.788 0-1.576-.813-2.364-.813H3.15V6.5c.032-.506.336-.95.787-1.154C5.373 4.7 6.3 3.24 6.302 1.626V.812c0-.45.353-.813.788-.813h.79c.434 0 .787.364.787.813v4.875h3.15c.214-.015.423.066.574.222.152.155.23.37.216.59z" fill="#4B87B8" fill-rule="evenodd"></path> </svg> <span class="comments-like__count">0</span> </div> </footer> </div> </article> `; 
       // Добавление комментария к родительскому элементу 
       const chatContainer = document.querySelector('.comments-chat-container'); 
       chatContainer.appendChild(commentElement); 
       // Очистка полей формы (если необходимо) 
       document.querySelector('.userName').value = ''; 
       document.querySelector('.userSurname').value = ''; 
       document.querySelector('.userComment').value = ''; 
       avatarInput.value = ''; photoInput.value = ''; }; 
       photoReader.readAsDataURL(photoFile); }; 
       // Преобразование изображений в Data URL 
       avatarReader.readAsDataURL(avatarFile); 
       changer()
     } 
 }

     function changer() {
     	let mycoms=document.querySelector("#mycoms");
     	mycoms.innerHTML="<h2> Faleminderit. Komenti juaj është shtuar deri në fund. Pas moderimit, komenti do të rritet më lart.</h2>"
     } 


     document.addEventListener('change', function(event) {
        if (event.target.matches('.custom__field')) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
              event.target.parentElement.querySelector('.custom__image').style.backgroundImage = `url(${e.target.result})`;
            }
            reader.readAsDataURL(file);
          }
        }
      });

      (function() {
 
        $(document).ready(function() {
            $('.reply').click(function() {
                $('.reply_form').remove();
                var comment_id = $(this).attr('data-id');
                var type = $(this).attr('data-type');
                var post_sondazh_id = $(this).attr('data-post-sondazh');
                var str = '';
                str += '<form action="#" class="reply_form">';
                str += '<input type="text" class="reply_emri" name="name" placeholder="Emri(*)">';
                str += '<input type="text" class="reply_emaili" name="email" placeholder="Email">';
                str += '<textarea name="message" class="reply_komenti" placeholder="Komenti(*)"></textarea>';
                str += '<input type="hidden" class="comment_id" value="' + comment_id + '">';
                str += '<input type="hidden" class="type_id" value="' + type + '">';
                str += '<input type="hidden" class="post_sondazh_id" value="' + post_sondazh_id + '">';
                str += '<input type="button" class="shto_reply" value="Përgjigju">';
                str += '</form>';
                str += '<script>';
                str += '$(".shto_reply").click(function(){';
                str += 'var emri = $(".reply_emri").val();';
                str += 'var email = $(".reply_emaili").val();';
                str += 'var komenti = $(".reply_komenti").val();';
                str += 'var post_id = $(".post_sondazh_id").val();';
                str += 'var komenti_id = $(".comment_id").val();';
                str += 'var type_id = $(".type_id").val();';
                str += 'if(emri.length >= 3 && komenti.length >=2){';
                str += 'add_comment(emri, komenti, komenti_id, post_id, email, type_id);';
                str += '$(".reply_form").remove();';
                str += '}else{';
                str += '$(this).parent().find(".reply_emri").css("border","1px solid #f00");';
                str += '$(this).parent().find(".reply_komenti").css("border","1px solid #f00");';
                str += '}';
                str += '});';
                str += '<' + '/script>';
                $(this).parent().after(str);
            });
    
    
    
            $(".sondazh_komento").click(function() {
                $(".sondazh_comment").toggle();
            });
            
            $(".lajm_komento").click(function() {
                $(".lajm_comment").toggle();
            });
    
        });
        
      })();   


    //   раскрывающийся список
      function toggleList(listId, buttonId) {
        var list = document.getElementById(listId);
        var button = document.getElementById(buttonId);
    
        if (list.classList.contains('closed')) {
          list.classList.remove('closed');
          list.classList.add('open');
          button.classList.remove('arrow-right');
          button.classList.add('arrow-down');
        } else {
          list.classList.remove('open');
          list.classList.add('closed');
          button.classList.remove('arrow-down');
          button.classList.add('arrow-right');
        }
      }

      (function() {
       
      })();

// слайдер 2
      (function() {
        $(document).ready(function(){
            var secondSlider = new Swiper('.second-swiper', {
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
              pagination: {
                el: '.second-swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.second-swiper-button-next',
                prevEl: '.second-swiper-button-prev',
              },
              scrollbar: {
                el: '.second-swiper-scrollbar',
              },
              // Включение lazy load
              lazy: {
                loadPrevNext: true, // Загружает предыдущий и следующий слайды
                loadPrevNextAmount: 1, // Количество слайдов для предварительной загрузки
                loadOnTransitionStart: true // Начать загрузку перед переходом
              }
            });
          });
      })();


// кнопка торопись

 
    setTimeout(function () {
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
        function updateCount() {
            const min = 250; // Минимальное значение
            const max = 500; // Максимальное значение
            const countElement = document.getElementById("count");
            const randomValue = generateRandomNumber(min, max);
            countElement.textContent = randomValue;
        }
    
        // Вызываем функцию для обновления числа при загрузке страницы и, например, каждые 5 секунд
        updateCount();
        setInterval(updateCount, 12000); // Обновление каждые 12 секунд (или другой интервал)
    }, 5000); // Задержка в 5 секунд перед выполнением кода
  
  


    setTimeout(function () {
        const progressBar = document.getElementById("progress");

        function increaseProgress() {
            const currentWidth = parseFloat(progressBar.style.width) || 40; // Начинаем с 40%
            const targetWidth = currentWidth + 3; // Увеличиваем на 3%

            if (targetWidth <= 100) {
                progressBar.style.width = `${targetWidth}%`;
            } else {
                clearInterval(interval); // Останавливаем анимацию, когда достигнут 100%
            }
        }

        const interval = setInterval(increaseProgress, 15000); // Вызываем функцию каждые 15 секунд
    }, 5000); // Задержка в 5 секунд перед выполнением кода



let marvel="marvel";

console.log("scr2");













    
      
