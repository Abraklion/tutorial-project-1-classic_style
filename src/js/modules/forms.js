const forms = () => {

  /* *
  *
  * МОДУЛЬ ДЛЯ РАБОТЫ С ФОРМАМИ
  *
  * form          -> все формы на сайте
  * phoneInputs   -> input с телефоном
  *
  * */

  const form = document.querySelectorAll('form'),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');


  phoneInputs.forEach(item => {
    // в input с телефоном можно писать только цифры

    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });

  });

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

  const clearForm = () => {
    // сбрасываем данные формы

    form.forEach(item => {
      item.reset();
    });

  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then(res => {

          console.log(res);
          statusMessage.textContent = message.success;

        })
        .catch(() => {

          statusMessage.textContent = message.failure

        })
        .finally(() => {

          clearForm();

          setTimeout(() => {
            statusMessage.remove();
          }, 5000);

        });
    });
  });
};

export default forms;