# ld-table
[angular-smart-table](https://github.com/lorenzofox3/Smart-Table.git) wrapper

## Basic usage

In html:

```html
<ld-table data="tableData" on-edit-btn-clicked="editElement" />
```
or

```html
<div ld-table="" data="tableData" on-edit-btn-clicked="editElement"></div>
```

In js:

```js
$scope.tableData = {
    attrs: {
        itemsByPage: 1
    },
    cols: [
        { title: 'Field 1', field: 'field1', type: 'number', format: '2' },
        { title: 'Field 2', field: 'field2', type: 'date', format: 'MM/dd/yyyy' }
    ],
    rowlist: [{
        field1: 8,
        field2: new Date(),
    }]
};

$scope.editElement = function (row) { });
```

## Options

### data

Type: `Object`

Table data

#### data.attrs

Type: `Object`

##### data.attrs.itemsByPage

Type: `Number`

Default: `10`

Number of rows by page
