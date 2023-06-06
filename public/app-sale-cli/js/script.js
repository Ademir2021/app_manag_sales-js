const url = "http://192.168.80.109:3000"
const urlProducts = url + "/products"
const urlSales = url + "/sales"
const urlNote = url + "/note"
const urlPerson = url + "/person/"
const getItem = document.getElementById("submit_item")
const getAmount = document.getElementById("submit_amount")
const searchOption = document.getElementById("options")
const discSaleItens = document.getElementById("input_disc_note")
const totalItens = document.getElementById("total_itens")
const discNote = document.getElementById("disc_note")
const totalNote = document.getElementById("total_note")
const inputPersonLogged = document.getElementById("input_person_logged")
const personLogged = document.getElementById("person-logged")
const userLogin = document.getElementById("user")
const msgsales = document.getElementById("msgs_sale")
const paymentSale = document.getElementById("input_payment_sale")

let id = 1

const itens = [{
    disc_sale: 0,
    fk_name_pers: 0,
    name_pers: "",
    user: "",
    filial: 0,
    user_id: 0
}];

let editId = null

auth();
insertItem();

async function auth() {
    const user = await JSON.parse(localStorage.getItem('u'))
    if (user == null) {
        window.location.replace("/login")
    }
    else if (user != null) {
        itens[0].user = user[0].username
        itens[0].user_id = user[0].id
        await fetch(urlPerson + user[0].id)
            .then(data => { return data.json() })
            .then(persons => {
                for (i = 0; persons.length > i; i++) {
                    if (persons[i].fk_id_user === user[0].id) {
                        userLogin.innerHTML = `Login: ${user[0].username}`;
                        itens[0].filial = persons[i].fk_name_filial;
                        itens[0].fk_name_pers = persons[i].id_person;
                        inputPersonLogged.value = itens[0].fk_name_pers;
                        itens[0].name_pers = persons[i].name_pers;
                        personLogged.innerHTML = `Cliente:${itens[0].name_pers}`;
                    }
                }
            })
    }
}


const currencyMoney = (valor) => {
    if (valor) {
        return valor.toFixed(2)
    }
}

const currencyFormat = (valor) => {
    return valor.toLocaleString('pt-BR',
        { style: 'currency', currency: 'BRL' })
}

async function insertItem() {
    try {
        await fetch(urlProducts)
            .then(data => { return data.json() })
            .then(products => {
                products.map((val) => {
                    searchOption.innerHTML += `<option value = "${val.descric_product}"></option>`
                })
                const setItem = getItem.value
                const setAmount = getAmount.value
                for (let i = 0; products.length > i; i++)
                    if (setItem == products[i].descric_product
                        || setItem == products[i].id_product
                        || setItem == products[i].bar_code) {
                        const item = {}
                        item.id_product = products[i].id_product
                        item.descric = products[i].descric_product
                        item.amount_product = setAmount
                        item.val_product = currencyFormat(products[i].val_max_product)
                        item.tItem = currencyFormat(item.amount_product * item.val_product)
                        verifItem(item)
                    }
            })
    } catch (error) {
        msgsales.innerHTML = ("API de itens não localizada !!")
        console.log(error, "Error Occurred !!")
    }
}

function verifItem(item) {
    for (let i = 1; itens.length > i; i++)
        if (item.id_product === itens[i].id_product && editId == null) {
            return msgsales.innerHTML = ("Item já foi lançado !!")
        }
    item.id = id++
    return save(item)
}

function save(item) {
    sumItens()
    msgsales.innerHTML = ""
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
            }
        }
    }
}

function valFields(item) {
    let msg = ''
    if (item.descric == '') { msg += 'Pesquise um item !!\n' }
    if (item.amount_product < 1) { msg += 'Informe a quantidade !!\n' }
    if (msg != '') {
        msgsales.innerHTML = msg
        return false
    }
    return true
}

function prepareEdition(item) {
    if (confirm("Deseja realmente atualizar o item: " + item.id)) {
        editId = item.id
        document.getElementById("submit_item").value = item.id_product
        document.getElementById("submit_amount").value = item.amount_product
        document.getElementById('btn1').innerText = 'Atualizar'
    }
}

function sumItens() {
    let sum = 0
    for (var i = 1; i < itens.length; i++) {
        sum += (itens[i].amount_product * itens[i].val_product)
    }
    totalItens.innerHTML = `Itens:${currencyFormat(sum)}`
    itens[0].disc_sale = discSaleItens.value
    discNote.innerHTML = `Desconto:${currencyFormat(itens[0].disc_sale)}`
    totalNote.innerHTML = `Total:${currencyFormat(sum - itens[0].disc_sale)}`
    return sum
}

function payment(sum) {
    let payment = paymentSale.value
    let totalNote = 0
    const limitDesc = (itens[0].disc_sale > sumItens(sum) * 0.10)
    totalNote += sumItens(sum)
    totalNote -= itens[0].disc_sale
    if (limitDesc) {
        msgsales.innerHTML = "Desconto não autorizado"
    } else {
        if (totalNote == 0) {
            msgsales.innerHTML = "Nenhum item(s) no momento !!"
        } else {
            if (payment == totalNote) {
                msgsales.innerHTML = `Pagto OK. ${currencyFormat(payment)}`
                alert("A venda será enviada !")
                registerSale()
                paymentSale.value = 0
                discSaleItens.value = 0
            } else {
                msgsales.innerHTML = `Realizar pagto. ${currencyFormat(totalNote)}`
            }
        }
    }
}

async function registerSale() {
    try {
        const response = await fetch(urlSales, {
            method: "POST",
            headers: { "Content-Type": "application/json",},
            body: JSON.stringify(itens),
        });
        const num_sale = await response.json();
        alert(JSON.stringify("Venda Nº:" + num_sale + " efetuada com sucesso !"))
        window.location.replace(`${urlNote}/${num_sale}`)
    } catch (error) {
        console.error("Error:", error)
    }
}
