const form = document.forms[0];
const buttonsToBasket = document.getElementsByName("addBasketButton");

buttonsToBasket.forEach(function(entry) {
  entry.addEventListener('click', event =>
  {
    Swal.fire({
      icon: 'success',
      title:'Товар добавлен в корзину'
    });
  }
)});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(form);
});

form.addEventListener("formdata", event => {
  const data = event.formData;

  const entries = [...data.entries()];
  console.log(entries);

  const values = [...data.values()];
  console.log(values);

  let telephone = values[1];
  if (isNaN(telephone))
  {
    Swal.fire({
      icon: 'error',
      title:'Неверный телефон!'
    });
    return;
  }

  if (String(telephone).length != 11)
  {
    Swal.fire({
      icon: 'error',
      title:'Неверный телефон!'
    });
    return;
  }


  let index = values[4];
  if (isNaN(index))
  {
    Swal.fire({
      icon: 'error',
      title:'Неверный индекс!'
    });
    return;
  }

  if (index < 100000 || index > 999999)
  {
    Swal.fire({
      icon: 'error',
      title:'Неверный индекс!'
    });
    return;
  }

  Swal.fire(
    'Заказ оформлен!',
    'Ждите звонка от нашего менеджера',
    'success'
  );
});

function getradiobuttons(){
  alert("selected: " + $('input[name=radio-stacked]:checked').val());
}