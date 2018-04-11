function deleteProduct(input1) {
    console.log("am intrat in delete Product");
  var url = 'http://localhost:3001/deleteProduct';
  var reqContent = {
    id: input1.value
  };
    console.log("vrem sa stergem" + reqContent.id);
  $.post(url, reqContent)
   .done(resp => {
      callServer();
      console.log(resp)
  })
   .fail(err => console.error(err))
   .always(() => console.log('End'));
}
