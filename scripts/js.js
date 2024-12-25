
let productFetch = {
  "procudt1" : {
      "product__name" : "Кремовый замок",
      "product__img" : "img/product/img.png",
      "product__text" : "Нежный крем любого цвета на выбор, вафельная основа",
      "product__price" : "150 ₽/шт. "
  },
  "procudt2" : {
      "product__name" : "Малиновый рай",
      "product__img" : "img/product/img-1.png",
      "product__text" : "Воздушный крем, темная основа и ягода малины",
      "product__price" : "150 ₽/шт. "
  },
  "procudt3" : {
      "product__name" : "Фейерверк",
      "product__img" : "img/product/img-2.png",
      "product__text" : "Разноцветные крем, с бисквитной основой",
      "product__price" : "150 ₽/шт. "
  },
  "procudt4" : {
      "product__name" : "Шоколадный мир",
      "product__img" : "img/product/img-3.png",
      "product__text" : "Ореховая стружка, нежный крем и шоколадная основа",
      "product__price" : "150 ₽/шт. "
  },
  "procudt5" : {
      "product__name" : "Слезы дракона",
      "product__img" : "img/product/img-4.png",
      "product__text" : "Нежный крем любого цвета на выбор, вафельная основа",
      "product__price" : "150 ₽/шт. "
  },
  "procudt6" : {
      "product__name" : "Летняя фантазия",
      "product__img" : "img/product/img-5.png",
      "product__text" : "Украшения в форме сердец, для любимого человека",
      "product__price" : "150 ₽/шт. "
  },
  "procudt7" : {
      "product__name" : "Мыс безумия",
      "product__img" : "img/product/img-6.png",
      "product__text" : "Разноцветная основа, стружка и нежный крем",
      "product__price" : "150 ₽/шт. "
  },
  "procudt8" : {
      "product__name" : "Облачная сказка",
      "product__img" : "img/product/img-7.png",
      "product__text" : "Светлая основа, нежный крем со стружкой сверху",
      "product__price" : "150 ₽/шт. "
  },
  "procudt9" : {
      "product__name" : "Темный рыцарь",
      "product__img" : "img/product/img-8.png",
      "product__text" : "Тёмная основа, нежный крем и вкусные шарики",
      "product__price" : "150 ₽/шт. "
  }
} //'../product.json' ;
let productList = []

async function getJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Выявлена ошибка при выполнении сетевого запроса :(");
    }
    
    return await response.json();
    
  }
  for (let product in productFetch){
    productList.unshift(productFetch[product])
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
  // getJSON(productFetch).then(res =>  {
  //   for (let product in res){
  //       productList.unshift(res[product])
  //   }
  //   productList.forEach(product => {
  //       const productList = document.querySelector('.product__list');
  //       productList.insertAdjacentHTML('afterbegin', `<li class="product__item">
  //       <img
  //         src=${product.product__img}
  //         alt=${product.product__name}
  //         class="product__image"
  //       />
  //       <div class="product__text">
  //         <h3>${product.product__name}</h3>
  //         <p>${product.product__text}</p>
  //         <span class="price">${product.product__price}</span>
  //       </div>
  //       <a href="#" class="button product__button">Заказать</a>
  //     </li>`)
  //   })
  // })


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