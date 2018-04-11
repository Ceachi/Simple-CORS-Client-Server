function addProduct(productName, price) {
  var url = 'http://localhost:3001/addProduct';
  var reqContent = {
    productName: productName.value,
    price: price.value
  };
  $.post(url, reqContent)
   .done(resp => {
      callServer();
      console.log(resp)
  })
   .fail(err => console.error(err))
   .always(() => console.log('End'));
}
