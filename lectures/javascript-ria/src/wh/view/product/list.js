Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'All Products',
    store: 'Products',

    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Price', dataIndex: 'price', flex: 1}
    ]
});