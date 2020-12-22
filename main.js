const productName = document.querySelector('#name');
const productAmount = document.querySelector('#amount');
const productType = document.querySelector('#type');
const productContainers = document.querySelectorAll('.added-products div');
const submitBtn = document.querySelector('.submitBtn')


const products = [];


const addProduct = () => {
    const newProduct = {
        name: productName.value,
        quantity: productAmount.value,
        type: productType.value,
        id: productType.value
    }

    const pElement = document.createElement('p');
    pElement.classList.add('product');
    pElement.textContent = `${newProduct.name} x ${newProduct.type !== 'meat'? newProduct.quantity: newProduct.quantity + ' kg'}`;
    pElement.setAttribute('id',`${newProduct.id}`);
    products.push(pElement);
    const type = newProduct.type;


    productContainers.forEach(productContainer => {
        if(productContainer.classList.contains(`${type}`)){
            products.forEach(product => {
                if(product.id === `${type}`){
                    productContainer.appendChild(product);
                }
            })
        }
    })
}

submitBtn.addEventListener('click', addProduct);
