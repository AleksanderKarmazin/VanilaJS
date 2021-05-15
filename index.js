const model = [
    {
        type: 'title',
        value: 'Hellow world from JS!'
    },
    {
        type: 'text',
        value: 'Text! '
    },
    {
        type: 'columns',
        value:[
            'Lorem ipsum dolor sit \
            amet consectetur adipisicing elit. Culpa eum quia at \
             optio, pariatur autem sapiente assumenda nobis esse  \
            possimus voluptates magni voluptatem excepturi odio  \
            ab beatae soluta, vero amet!  ',
            'Lorem ipsum dolor sit \
            amet consectetur adipisicing elit. Culpa eum quia at \
             optio, pariatur autem sapiente assumenda nobis esse  \
            possimus voluptates magni voluptatem excepturi odio  \
            ab beatae soluta, vero amet! ',
            'Lorem ipsum dolor sit \
            amet consectetur adipisicing elit. Culpa eum quia at \
             optio, pariatur autem sapiente assumenda nobis esse  \
            possimus voluptates magni voluptatem excepturi odio  \
            ab beatae soluta, vero amet! ',
        ]
    },
    {
        type: 'img',
        value: './assets/icon.png'
    }
]
   
// Те переменнные которые являютя DOM  - элементами я почеяю как начинающиеся со знака доллора 
const $site = document.querySelector('#site')


model.forEach( block =>{
    let html = ''
    
    if (block.type === 'title') {
        html = title(block)
        
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    }
     else if (block.type === 'img') {
        html = img(block)
    }


    $site.insertAdjacentHTML('beforeend', html)
}) 

// Только те функции, которые имеют ключевое слово function могут быть вызваны до того моента когда они были опеределены 
function title(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
    </div>
    `
}

function text(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <p>${block.value}</p>
    </div>
    </div>
    `
}

function columns(block) {
    let html = ''
    block.value.forEach( item =>{
        html +=  `
        <div class="col-sm">
        ${item}
        </div>
        `
    })
    
    return `
    <div class="row">
        ${html}
    </div>
    `
}

function img(block) {
    return `
    <div class="row">
       <img src="${block.value}" />
    </div>
    `
}
