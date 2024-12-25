
let productFetch =  '../../product.json' ;
let productList = []

async function getJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Выявлена ошибка при выполнении сетевого запроса :(");
    }
    
    return await response.json();
    
  }
  getJSON(productFetch).then(res =>  {
    for (let product in res){
        productList.unshift(res[product])
    }
    productList.forEach(product => {
        const productList = document.querySelector('.product__list');
        productList.insertAdjacentHTML('afterbegin', `<li class="product__item">
        <img
          src=${product.product__img}
          alt=${product.product__name}
          class="product__image"
        />
        <div class="product__text">
          <h3>${product.product__name}</h3>
          <p>${product.product__text}</p>
          <span class="price">${product.product__price}</span>
        </div>
        <a href="#" class="button product__button">Заказать</a>
      </li>`)
    })
  })


  function validatePhoneNumber() {
    const phoneNumber = document.querySelector('#tel').value;
    const pattern = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
    if (pattern.test(phoneNumber)) {
      alert('Вы правильно ввели номер')
    }else {
      alert("Вы не правильно ввели номер")
    }
    const isValid = pattern.test(phoneNumber);
    document.querySelector('#tel').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';
    return isValid;
  }
  document.querySelector('.footer__button').addEventListener('click' , () => validatePhoneNumber() )