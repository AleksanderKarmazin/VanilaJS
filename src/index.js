import{ model }from './model'
// import{ title, text, columns, img }from './templates'
import{ templates }from './templates'
import './styles/main.css'
   
// Те переменнные которые являютя DOM  - элементами я почеяю как начинающиеся со знака доллора 
const $site = document.querySelector('#site')
 
model.forEach( block =>{
    // let html = ''
    
    // if (block.type === 'title') {
    //     html = title(block)
        
    // } else if (block.type === 'text') {
    //     html = text(block)
    // } else if (block.type === 'columns') {
    //     html = columns(block)
    // }
    //  else if (block.type === 'img') {
    //     html = img(block)
    // }
    const toHTML = templates[block.type]
    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
    
}) 

