

async function registerSale(e) {
     event.preventDefault(e)
    await axios.post(urlSales, itens)
        .then(response => {
            alert(JSON.stringify("Venda Nº:" + response.data + " efetuada com Sucesso"))
            const num_sale =  response.data
            window.location.replace(`http://localhost:3000/note/${num_sale}`)
        })
        .catch(error => console.log(error))
}