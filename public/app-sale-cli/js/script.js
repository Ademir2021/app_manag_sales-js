const url = "http://localhost:3000/products"
const urlSales = "http://localhost:3000/sales"
const getItem = document.getElementById("submit_item")
const getAmount = document.getElementById("submit_amount")
const option = document.getElementById("options")
const total = document.getElementById("total");
const userLogin = document.getElementById("user")
let id = 1
const itens = [{ disc_sale: 2.00, fk_name_pers: 0, user: "", filial: 0, user_id: 0 }]
let editId = null
insertItem() /**Importante !! já inicia invocando esta função */

async function auth() {
    const user = await JSON.parse(localStorage.getItem('u'))
    if (user == null) {
        window.location.replace("/login");
    }
    else if (user != null) {
        userLogin.innerHTML = `<b>Usuário</b>: ${user[0].username}`
        itens[0].user = user[0].username
        itens[0].user_id = user[0].id
        itens[0].filial = 1
        itens[0].fk_name_pers = 1
    }
} auth()

async function insertItem() {
    try {

        await fetch(url)
            .then(data => {
                return data.json();
            })
            .then(products => { /**console.log(products) */
                products.map((val) => {
                    option.innerHTML += ` 
<option value = "${val.descric_product}"></option>`
                })
                const setItem = getItem.value
                const setAmount = getAmount.value
                for (let i = 0; products.length > i; i++)
                    if (setItem == products[i].descric_product /**item */
                        || setItem == products[i].id_product /**id */
                        || setItem == products[i].bar_code) { /**init insert Item */
                        const item = {}
                        item.id_product = products[i].id_product
                        item.descric = products[i].descric_product
                        item.amount_product = setAmount
                        item.val_product = parseFloat(products[i].val_max_product).toFixed(2)
                        item.tItem = parseFloat(item.amount_product * item.val_product).toFixed(2)
                        verifItem(item)
                    }
            })
    } catch (error) {
        alert("API de itens não localizada !!")
        console.log(error, "Error Occurred !!")
    }
}

function verifItem(item) {
    for (let i = 1; itens.length > i; i++)
        if (item.id_product === itens[i].id_product) {
            return alert('Item já foi lançado')
        }
    item.id = id++
    return save(item)
}

function save(item) {
    sumItens()
    if (valFields(item)) {
        if (editId == null) {
            itens.push(item)
            listItens()
            sumItens()
            cancelItens()
        } else {
            edit(editId, item)
            listItens()
            sumItens()
            cancelItens()
        }
    }
}

function edit(id, item) {
    for (let i = 1; i < itens.length; i++) {
        if (itens[i].id == id) {
            itens[i].id_product = item.id_product
            itens[i].descric = item.descric
            itens[i].amount_product = item.amount_product
            itens[i].val_product = item.val_product
            itens[i].tItem = item.tItem
        }
    }
}

function listItens() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''
    for (let i = 1; i < itens.length; i++) {
        let tr = tbody.insertRow()
        let td_id = tr.insertCell()
        let td_item = tr.insertCell()
        let td_descric = tr.insertCell()
        let td_amount = tr.insertCell()
        let td_valor = tr.insertCell()
        let td_tItem = tr.insertCell()
        let td_acoes = tr.insertCell()
        td_id.innerText = itens[i].id
        td_item.innerText = itens[i].id_product
        td_descric.innerText = itens[i].descric
        td_amount.innerText = itens[i].amount_product
        td_valor.innerText = itens[i].val_product
        td_tItem.innerText = itens[i].tItem
        td_id.classList.add("center")
        td_item.classList.add("center")
        td_amount.classList.add("center")
        let imgEdit = document.createElement('img')
        imgEdit.src = 'img/edit.svg'
        imgEdit.setAttribute("onclick", "prepareEdition(" + JSON.stringify(itens[i]) + ")")
        let imgDelete = document.createElement('img')
        imgDelete.src = 'img/delete.svg'
        imgDelete.setAttribute("onclick", "delItem(" + itens[i].id + ")")
        td_acoes.appendChild(imgEdit)
        td_acoes.appendChild(imgDelete)
    }
}

function cancelItens() {
    document.getElementById("submit_item").value = ""
    document.getElementById("submit_amount").value = ""
    document.getElementById('btn1').innerText = "Salvar"
    editId = null
}

function delItem(id) {
    if (confirm("Deseja remover o produto do ID: " + id)) {
        let tbody = document.getElementById("tbody")
        for (let i = 1; itens.length > i; i++) {
            if (itens[i].id == id) {
                itens.splice(i, 1)
                tbody.deleteRow(i)
                sumItens()
                listItens()
                //cancelItens()
            }
        }
    }
}

function valFields(item) {
    let msg = ''
    if (item.descric == '') { msg += 'Pesquise um Item !!\n' }
    if (item.amount_product < 1) { msg += 'Informe a Quant !!\n' }
    if (msg != '') {
        alert(msg)
        return false
    }
    return true
}

function prepareEdition(dados) {
    if (confirm("deseja realmente atualizar o item: " + dados.id)) {
        editId = dados.id
        document.getElementById("submit_item").value = dados.id_product
        document.getElementById("submit_amount").value = dados.amount_product
        document.getElementById('btn1').innerText = 'Atualizar'
    }
}

function sumItens() {
    let sum = 0
    for (var i = 1; i < itens.length; i++) {
        sum += (itens[i].amount_product * itens[i].val_product)
    }
    total.innerHTML = `Total Produto(s): R$ ${parseFloat(sum).toFixed(3)}`
    return sum
} /**Não invocar a função sumItens() para não aparecer Total == 0 */


function payment(sum) {
    let payment = 1000
    let tProducts = 0
    tProducts = sumItens(sum)
    if (tProducts == 0) {
        alert("Nenhum item(s) no momento")
    } else {
        if (payment == tProducts || payment == 1000) {
            alert("Pagto efet. com sucesso: " + payment)
            alert("venda está sendo enviada ...")
            registerSale()
            alert("Venda enviada com Sucesso !!")
            // localStorage.removeItem('u');
            // window.location.reload();

        } else {
            let aPagar = tProducts - payment
            alert("O valor não bate com o Total dos Produtos !" +
                "\nEfetue o pagamento de: " + aPagar)
        }
    }
}

async function registerSale(e) {
    event.preventDefault(e)
    await axios.post(urlSales, itens)
        .then(response => {
            alert(JSON.stringify("Venda Nº:" + response.data + " efetuada com Sucesso"))
            const num_sale = response.data
            window.location.replace(`http://localhost:3000/note/${num_sale}`)
        })
        .catch(error => console.log(error))
}
