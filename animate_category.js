//Создаем переменную для хранения блока recommended__products
const category = document.querySelector('.photo-square')
const category_2 = document.querySelector('.photo-wide')
// Создаем событие появления на экране
// Добавляем елемент в переменную для наблюдения когда елемент появляется в зоне видимости екрана
// entries - обратная связь, масив которы описывает каждый елемент за которым мы наблюдаем
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // entry конкретный елемент за которым наблюдаем
    // Если елемент сейчас виден
    if(entry.isIntersecting){
      // Добавляем класс show для воспроизвеления анимации
      entry.target.classList.add('show_category');
    }
  });
}, {
  // Если елемент видно на 10%
  threshold: 0.1, 
});

observer.observe(category);
observer.observe(category_2);