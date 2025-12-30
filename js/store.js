async function createStore() {
  await fetch(API_URL + "/store/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({
      name: storeName.value,
      serverIP: serverIP.value
    })
  });
  alert("Store created!");
}

async function addProduct() {
  await fetch(API_URL + "/product/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify({
      name: productName.value,
      command: command.value,
      price: price.value
    })
  });
  alert("Product added!");
}
