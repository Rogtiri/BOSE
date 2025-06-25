//Создаем переменную для хранения блока recommended__products
const recommendend = document.querySelector('.recommended__products');
const wideanim_block = document.querySelectorAll('.photo-wide');
const squareanim_block = document.querySelectorAll('.photo-square');
const howtobuy_block = document.querySelectorAll('.howtobuy');
// Создаем событие появления на экране
// Добавляем елемент в переменную для наблюдения когда елемент появляется в зоне видимости екрана
// entries - обратная связь, масив которы описывает каждый елемент за которым мы наблюдаем
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry конкретный елемент за которым наблюдаем
    // Если елемент сейчас виден
    if(entry.isIntersecting){
      // Добавляем класс show для воспроизвеления анимации
      entry.target.classList.add('show');
    }
  });
}, {
  // Если елемент видно на 10%
  threshold: 0.1, 
});
const wideanim = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry конкретный елемент за которым наблюдаем
    // Если елемент сейчас виден
    if(entry.isIntersecting){
      // Добавляем класс show для воспроизвеления анимации
      entry.target.classList.add('wide');
    }
  });
}, {
  // Если елемент видно на 10%
  threshold: 0.1, 
});
const squareanim = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry конкретный елемент за которым наблюдаем
    // Если елемент сейчас виден
    if(entry.isIntersecting){
      // Добавляем класс show для воспроизвеления анимации
      entry.target.classList.add('square');
    }
  });
}, {
  // Если елемент видно на 10%
  threshold: 0.1, 
});
const howtobuyanim = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry конкретный елемент за которым наблюдаем
    // Если елемент сейчас виден
    if(entry.isIntersecting){
      // Добавляем класс show для воспроизвеления анимации
      entry.target.classList.add('animhowtobuy');
    }
  });
}, {
  // Если елемент видно на 10%
  threshold: 0.1, 
});
observer.observe(recommendend);
wideanim_block.forEach(photowide => wideanim.observe(photowide));
squareanim_block.forEach(photosquare => squareanim.observe(photosquare));
howtobuy_block.forEach(howtobuy => howtobuyanim.observe(howtobuy));


