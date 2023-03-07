const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const imgMenu = document.querySelector('.menu');
const navCart = document.querySelector('.product-detail');
const imgCart = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleMenu);
imgMenu.addEventListener('click', toggleMobileMenu);
imgCart.addEventListener('click', toggleDetails);

function toggleMenu(){
    const isMenuCartOpen = !navCart.classList.contains('inactive');
    if(isMenuCartOpen){
        navCart.classList.toggle('inactive');
        desktopMenu.classList.toggle('inactive');    
    }else{
        desktopMenu.classList.toggle('inactive');
    }
}
function toggleMobileMenu(){
    const isOpenNavCart = !navCart.classList.contains('inactive');
    if(isOpenNavCart){
        navCart.classList.toggle('inactive');
        menuMobile.classList.toggle('inactive');
    }else{
        menuMobile.classList.toggle('inactive');
    }
}
function toggleDetails(){
    const isOpenMenuMobile = !menuMobile.classList.contains('inactive');
    const isOpenMenu = !desktopMenu.classList.contains('inactive');
    if(isOpenMenuMobile){
        menuMobile.classList.toggle('inactive');
        navCart.classList.toggle('inactive');
    }else if(isOpenMenu){
        desktopMenu.classList.toggle('inactive');
        navCart.classList.toggle('inactive');
    }else{
        navCart.classList.toggle('inactive');
    }
}

const productList = [];
productList.push({
    nombre: 'bike', 
    precio: 200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'celular', 
    precio: 5000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Libro', 
    precio: 50,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Auto', 
    precio: 20000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (const product of productList) {
    //creacion del div contenedor de nuestros productos
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    //creacion de la imagen
    const img = document.createElement('img');
    img.setAttribute('src', product.imagen);
    //creacion de nuestro contendor de nuestra info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    //creamos el div donde ira el precio del producto
    const divInfoProduct = document.createElement('div');
    //creamos los 2 parrafos
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;
    const productName = document.createElement('p');
    productName.innerText = product.nombre;
    divInfoProduct.appendChild(productPrice);
    divInfoProduct.appendChild(productName);
    //creamos la figura
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    //ya que tenemos todos los componentes con los atributos que deseamos
    //mostrar en pantalla ahora vamos a meter cada componente en orden
    //como deben de ir maquetados
    //metemos dentro de la figure, nuestra img del carrito
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(divInfoProduct);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
/*
tienes que ir maquetando el html con JS para poder ir ingresandolos
con appendChild, y agregando las clases de cada uno de los componentes
*/
//NOTA: forma sencilla de hacerlo: https://static.platzi.com/media/user_upload/for%20products-05054164-5c8f-438f-a29d-97dd75a6eacd.jpg