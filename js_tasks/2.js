`
2.
Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице 
https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/
`

function getAttributes() {
    const processNodeList = (nodeList) => Array.from(nodeList).map(el => el.firstChild.textContent.trim())
    const keys = processNodeList(document
        .querySelectorAll('.tab-pane-product-parameters-list .parameter-name'))
    const values = processNodeList(document
        .querySelectorAll('.tab-pane-product-parameters-list .parameter-value'))
    // unfortunately js hasn't got zip in standard lib, but lodash has...
    const entries = keys.map((key, index) => [key, values[index]]);
    return Object.fromEntries(entries)
}
