function createSparksAndEmbers() {
      const fireContainer = document.getElementById('fireBackground');
      if (!fireContainer) return;
      fireContainer.innerHTML = '';
      
      // Создаем искры (больше, легче, ярче)
      for (let i = 0; i < 200; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        const size = Math.random() * 6 + 2;
        spark.style.width = size + 'px';
        spark.style.height = size * 0.7 + 'px';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.top = (Math.random() * 80 + 20) + '%';
        spark.style.animationDelay = Math.random() * 5 + 's';
        spark.style.animationDuration = Math.random() * 4 + 2 + 's';
        spark.style.opacity = Math.random() * 0.8 + 0.3;
        spark.style.transform = `rotate(${Math.random() * 90}deg)`;
        fireContainer.appendChild(spark);
      }
      
      // Создаем угольки (тяжелее, темнее, пульсируют)
      for (let i = 0; i < 80; i++) {
        const ember = document.createElement('div');
        ember.className = 'ember';
        const size = Math.random() * 12 + 5;
        ember.style.width = size + 'px';
        ember.style.height = size * 0.8 + 'px';
        ember.style.left = Math.random() * 100 + '%';
        ember.style.top = (Math.random() * 70 + 30) + '%';
        ember.style.animationDelay = Math.random() * 3 + 's';
        ember.style.animationDuration = Math.random() * 5 + 3 + 's';
        ember.style.opacity = Math.random() * 0.7 + 0.3;
        fireContainer.appendChild(ember);
      }
    }

    const defaults = {
      name: "Андрианов Эдуард Михайлович",
      photo: "avatar.jpg"
    };

    function setContent() {
      document.getElementById('name').textContent = defaults.name;
      document.getElementById('photo').src = defaults.photo;
    }

    function setupVideo() {
      const video = document.getElementById('videoPlayer');
      if (video) {
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.play().catch(e => console.log('Video autoplay failed'));
      }
    }

    function typeWriter() {
      const textElement = document.getElementById('typing-text');
      if (!textElement) return;
      
      // Текст биографии с упоминанием профессии печника
      const fullText = `Андрианов Эдуард Михайлович родился в деревне Обросово в самый разгар осени — 7 ноября 1932 года.\n\n Его родителями были Михаил и Илария. Детство его кончилось рано: когда грянула Великая Отечественная война и всех мужчин забрали на фронт, ему было всего девять. С этого возраста и до самой пенсии он познал, что такое крестьянский труд.

Несмотря на голод и лишения, он никогда не унывал. Будучи мальчишкой, он уже подрабатывал — подшивал валенки односельчанам, чтобы хоть как-то помочь семье. Повзрослев, он выучился на плотника в городе Сокол, а затем перебрался на работу в Вологду. Там он встретил свою любовь — Тамару Павловну Баранову, на которой женился. В семье родилась дочь Ирина.

Эдуард Михайлович был настоящим мастером на все руки. Он в совершенстве владел профессиями плотника, каменщика, кровельщика, но особенно славился в округе как искусный печник — его печи грели не один дом.

Его отличительная черта — это то, что он никогда не кричал и не поднимал голос на других, и это дано не каждому. Это говорит о его устойчивом и сильном характере. При этом он никогда не позволял обижать себя и умело давал отпор, когда это было необходимо.К сожалению, его жизнь трагически оборвалась 4 ноября 2003 года, не дожив всего три дня до своего 71-летия — он замерз..`;
      
      let i = 0;
      textElement.innerHTML = '';
      
      function type() {
        if (i < fullText.length) {
          textElement.innerHTML += fullText.charAt(i);
          i++;
          setTimeout(type, 20);
        } else {
          const cursor = document.createElement('span');
          cursor.className = 'typing-cursor';
          textElement.appendChild(cursor);
        }
      }
      type();
    }

    function updateDaysCounter() {
      const daysElement = document.getElementById('daysCount');
      if (!daysElement) return;
      const deathDate = new Date(2004, 0, 1); // Январь 2004 (уточните дату)
      const today = new Date();
      const diffDays = Math.ceil(Math.abs(today - deathDate) / (1000 * 60 * 60 * 24));
      daysElement.textContent = diffDays.toLocaleString();
    }

    function playBiographyAudio() {
      const audio = document.getElementById('bioAudio');
      if (audio) {
        audio.currentTime = 0;
        audio.loop = true;
        audio.play().catch(e => console.log('Audio play failed'));
      }
    }

    // Функция для запуска всех видео в хронологии
    function playTimelineVideos() {
      const videos = document.querySelectorAll('.timeline-video');
      videos.forEach(video => {
        video.play().catch(e => console.log('Video play failed:', e));
      });
    }

    // Функция для скролла к хронологии
    function scrollToTimeline() {
      const timelineSection = document.getElementById('timeline');
      if (timelineSection) {
        timelineSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }

    // Управление звуком
    function initSoundControl() {
      const soundControl = document.getElementById('soundControl');
      const soundIcon = document.getElementById('soundIcon');
      const soundText = document.getElementById('soundText');
      const audio = document.getElementById('bioAudio');
      
      let isMuted = false;
      
      soundControl.addEventListener('click', function() {
        if (isMuted) {
          // Включаем звук
          audio.muted = false;
          soundIcon.textContent = '🔊';
          soundText.textContent = 'Выключить звук';
          soundControl.classList.remove('muted');
        } else {
          // Выключаем звук
          audio.muted = true;
          soundIcon.textContent = '🔇';
          soundText.textContent = 'Включить звук';
          soundControl.classList.add('muted');
        }
        isMuted = !isMuted;
      });
    }

    function initCandleFeature() {
      const btn = document.getElementById('candleButton');
      const effect = document.getElementById('candleEffect');
      const overlay = document.getElementById('whiteOverlay');
      const counter = document.getElementById('counterText');
      const headerTop = document.getElementById('headerTop');
      const mainHeader = document.getElementById('mainHeader');
      const daysCounter = document.getElementById('daysCounter');
      const video = document.getElementById('videoSection');
      const hidden = document.getElementById('hiddenContent');
      const fireBackground = document.getElementById('fireBackground');
      const soundControl = document.getElementById('soundControl');
      
      let count = localStorage.getItem('candleCount') ? parseInt(localStorage.getItem('candleCount')) : 0;
      counter.textContent = count;
      
      btn.addEventListener('click', function() {
        count++;
        counter.textContent = count;
        localStorage.setItem('candleCount', count);
        
        effect.classList.add('active');
        
        headerTop.classList.add('hidden');
        mainHeader.classList.add('hidden');
        daysCounter.classList.add('hidden');
        video.classList.add('hidden');
        
        setTimeout(() => {
          overlay.classList.add('active');
          fireBackground.classList.add('fade-out');
        }, 3000);
        
        setTimeout(() => {
          overlay.classList.remove('active');
          effect.classList.remove('active');
          hidden.classList.add('visible');
          
          // Показываем кнопку управления звуком
          soundControl.style.display = 'flex';
          
          typeWriter();
          playBiographyAudio();
          initSoundControl();
          
          // Запускаем видео в хронологии
          setTimeout(() => {
            playTimelineVideos();
          }, 1000);
          
          // Скроллим к хронологии через небольшую задержку
          setTimeout(() => {
            scrollToTimeline();
          }, 1500);
          
        }, 8000);
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      setContent();
      createSparksAndEmbers();
      updateDaysCounter();
      setupVideo();
      initCandleFeature();
      setInterval(updateDaysCounter, 86400000);
      
      // Периодически обновляем искры и угольки для разнообразия
      setInterval(() => {
        if (!document.getElementById('fireBackground').classList.contains('fade-out')) {
          createSparksAndEmbers();
        }
      }, 30000);
    });

    window.addEventListener('resize', function() {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(createSparksAndEmbers, 200);
    });
    
    // Защита от клика правой кнопкой мыши
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      alert('❌ Копирование материалов сайта запрещено');
    });
    
    // Защита от клавиш копирования (Ctrl+C, Ctrl+U и т.д.)
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && (e.key === 'u' || e.key === 'c' || e.key === 's' || e.key === 'a')) {
        e.preventDefault();
        alert('❌ Этот сайт защищен от копирования');
      }
      if (e.key === 'F12') {
        e.preventDefault();
        alert('❌ Инструменты разработчика отключены');
      }
    });
    
    // Дополнительная защита от открытия DevTools
    setInterval(function() {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = '<h1>❌ Доступ запрещен</h1><p>Закройте инструменты разработчика</p>';
      }
    }, 1000);
