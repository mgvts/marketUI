`
1.
Написать функцию для получения списка всех артикулов товаров в консоли браузера на странице 
https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog
`

function getArticles() {
    const products = Array.from(document.querySelectorAll('._product'))
    const formatArt = (raw) => raw.padStart(9, '0') // fill leading zeros
        .match(/^(.{3})(.{3})(.{3})$/)     // separates by 3 chars
        .slice(1)                                   // cut beginning here full str contains, other matching
        .join('-')
    return products
        .map(el => formatArt(el.getAttribute('data-product-mini-card')))
}
getArticles()