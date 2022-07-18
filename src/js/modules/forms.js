
import checkNumInputs from './checkNumInputs';

const forms = (state) => {

  /**
  *
  * МОДУЛЬ ДЛЯ РАБОТЫ С ФОРМАМИ
  *
  * form          -> все формы на сайте
  * phoneInputs   -> input с телефоном
  *
  */

  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    // асинхронный запрос к серверу

    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();

  };

  const clearInputs = () => {
    // сбрасываем данные формы

    inputs.forEach(item => {
      item.value = '';
    });

  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      // надстройка для формы калькулятора
      if (item.getAttribute('data-calc') === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(res => {

          console.log(res);
          statusMessage.textContent = message.success;

        })
        .catch(() => {

          statusMessage.textContent = message.failure

        })
        .finally(() => {

          clearInputs();

          setTimeout(() => {
            statusMessage.remove();

            // надстройка для формы калькулятора
            if (item.getAttribute('data-calc') === "end" ) {

              // закрыть модальное окно
              item.closest('.popup_calc_end').style.display = "none"
              document.body.style.overflow = "";

              // очистить объект modalState
              Object.keys(state).forEach(prop => {
                delete state[prop]
              })

            }

          }, 5000);

        });
    });
  });
};

export default forms;