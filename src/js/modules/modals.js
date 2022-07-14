const modals = () => {

  // МОДУЛЬ ДЛЯ РАБОТЫ С МОДАЛЬНЫМИ ОКНАМИ

  function bindModal(triggerSelector, modalSelector, closeSelector) {

    /* *
    *
    * triggerSelector -> селектор который открывает модальное окно
    * modalSelector   -> селектор модального окна которое мы будем открывать
    * closeSelector   -> селектор который закрывает модальное окно
    *
    * */

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open'); // класс из bootstrap
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove('modal-open'); // класс из bootstrap
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open');
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function() {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalByTime('.popup', 60000);

};

export default modals;