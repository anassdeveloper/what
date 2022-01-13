import { obj as famille } from './modules.js';

let input = document.getElementById('input');
let btn = document.querySelector('.btn');
let review = {}

btn.addEventListener('click', function (){
    switch(input.value.toLowerCase()){
        case 'hanane':
        case 'hanona':
            review = Object.assign({}, famille.sister)
            //sister = Object.assign({}, famille.sister);
            
            appendAllElement(review);
            input.value = '';
            
            break;
        case 'fatima Zahrae':
        case 'fatima':
        case 'fati':
            review = Object.assign({}, famille.wife)        //wifeRv = Object.assign({}, famille.wife)
            //wifeRv = Object.assign({}, famille.wife)
            appendAllElement(review)
            input.value = '';
            break;
        case 'maha':
        case 'miha':
            //mother = Object.assign({}, famille.mother)
            review = Object.assign({}, famille.mother)
            appendAllElement(review)
            input.value = '';
            break;
            case 'mehdi':
            case 'mehdi':
                    //mother = Object.assign({}, famille.mother)
                review = Object.assign({}, famille.bro)
                appendAllElement(review)
                input.value = '';
                break;
            case 'anass':
            case 'anas':
                            //mother = Object.assign({}, famille.mother)
                review = Object.assign({}, famille.ano)
                appendAllElement(review)
                input.value = '';
                break;
            case 'sadia':
            case 'souad':
                                    //mother = Object.assign({}, famille.mother)
                review = Object.assign({}, famille.sadia)
                appendAllElement(review)
                input.value = '';
                break;
        default : 
           document.querySelector('.content').innerHTML = `<p class="not">من فضلك هذا شخص لا يوجد في العائلة 🚷 أو لم تتم إضافته بعد 🕕</p>`


    }
    
})



function appendAllElement(obj){
    document.querySelector('.content').innerHTML = '';
    let html =`<div class="cart">
    <img src=${obj.img} />
    <h3>${obj.name}</h3>
    <p>${obj.age}</p>
    <p>${obj.year}ans</p>
    <p>${obj.phone}</p>
    <p>${obj.job}</p>
    <p>${obj.city}</p>
    </div>
    `;
    document.querySelector('.content').insertAdjacentHTML('beforeend', html)
    
}
