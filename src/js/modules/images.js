import {calcScroll} from "./calcScroll";

const images = () => {

  /**
   *
   * МОДУЛЬ ДЛЯ РАБОТЫ С ГАЛЕРЕИЙ
   *
   * imgPopup   -> создаем элемент который будет подложкой модального окна
   * workSection   -> селектор куда мы поместим модальное окно на страницы
   * bigImage   -> создаем элемент изабращение
   *
   */

  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.overflowY = 'auto';
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  bigImage.style.marginBottom = '0';
  bigImage.style.maxHeight = '600px';
  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {

      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);

      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${document.documentElement.offsetWidth > 991 ? calcScroll() : 0}px`;
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';

      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
};

export default images;