import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

  /**
  *
  * МОДУЛЬ ДЛЯ СОБИРА ДАННЫХ ОТ ПОЛЬЗОВАТЕЛЯ ПРИ ЕГО ВЗАИМОДЕЙСТВИИ С САЙТОМ
  * (данные собираются для передачи с форму)
  *
  * windowForm     -> форма окна
  * windowWidth    -> ширина окна
  * windowHeight   -> высота окна
  * windowType     -> тип окна
  * windowType     -> профиль окна
  *
  * */

  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems (event, elem, prop) {

    /**
    *
    * event   -> тип события
    * elem    -> элемент(узел) к которому применяется события
    * prop    -> названия свойства как текст поторое запишится как ключ в обьект state(произвольно по смыслу)
    *
    */

    elem.forEach((item, i) => {
      item.addEventListener(event, () => {

        switch(item.nodeName) {
          case 'SPAN' :

            state[prop] = i;

            break;

          case 'INPUT' :

            if (item.getAttribute('type') === 'checkbox') {

              i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";

              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });

            } else {

              state[prop] = item.value;

            }
            break;


          case 'SELECT' :

            state[prop] = item.value;

            break;
        }

        console.log(state);

      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;