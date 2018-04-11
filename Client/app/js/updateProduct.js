function updateProduct(input1, input2, input3) {
    console.log("am intrat in update Product");
  var url = 'http://localhost:3001/updateProduct';
  var reqContent = {
    id: input1.value,
    productName: input2.value,
    price: input3.value
  };
  $.post(url, reqContent)
   .done(resp => {
      callServer();
      console.log(resp)
  })
   .fail(err => console.error(err))
   .always(() => console.log('End'));
}
