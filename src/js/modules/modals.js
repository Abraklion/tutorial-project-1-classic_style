const modals = () => {

  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С МОДАЛЬНЫМИ ОКНАМИ
   */

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

    /**
    *
    * triggerSelector     -> селектор который открывает модальное окно
    * modalSelector       -> селектор модального окна которое мы будем открывать
    * closeSelector       -> селектор который закрывает модальное окно
    * closeClickOverlay   -> буливо значения, можно ли скрывать модальне окно по клику подложку
    *
    */

    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');

    const hideAllModals = () => {
      // скрывает все модальные окна

      windows.forEach(item => {
        item.style.display = 'none';
      });

    };

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        hideAllModals();

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        // document.body.classList.add('modal-open'); // класс из bootstrap
      });
    });

    close.addEventListener('click', () => {
      hideAllModals();

      modal.style.display = "none";
      document.body.style.overflow = "";
      // document.body.classList.remove('modal-open'); // класс из bootstrap
    });

    modal.addEventListener('click', (e) => {

      if (e.target === modal && closeClickOverlay) {
        hideAllModals();

        modal.style.display = "none";
        document.body.style.overflow = "";
        // document.body.classList.remove('modal-open'); // класс из bootstrap
      }

    });
  }

  function showModalByTime(selector, time) {

    // показывает интересующию нас модалку через определенное время

    setTimeout(function() {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // showModalByTime('.popup', 60000);

};

export default modals;