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
            'Line of string 1',
            'Line of string 2',
            'Line of string 3',

        ]
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