const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector) {

    const trigger = document.querySelectorAll(triggerSelector), // селектор который открывает модальное окно
      modal = document.querySelector(modalSelector), // модальное окно которое мы будем открывать
      close = document.querySelector(closeSelector); // селектор который закрывает модальное окно

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