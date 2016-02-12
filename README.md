# ld-table
[angular-smart-table](https://github.com/lorenzofox3/Smart-Table.git) wrapper

## Basic usage

**Still working, could have some typos**

In html:

```html
<ld-table data="tableData" />
```
or

```html
<div ld-table="" data="tableData"></div>
```

In js:

```js
$scope.tableData = {
    actionsColumn: {
        buttons: [{
            label: 'Edit', type: 'primary', icon: 'edit',
            onClick: function (row) {
                $scope.message = 'Edit: ' + JSON.stringify(row)
            }
        }, {
            label: 'Delete', icon: 'trash', onClick: function (row) {
                $scope.message = 'Delete: ' + JSON.stringify(row)
            }
        }]
    },
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

## Directive data

### actionsColumn

Type: `Object`

If exists, define the last column options

#### actionsColumn.title

Type: `String`

Default: 'Actions'

Last column caption

#### actionsColumn.buttons

Type: `Array`

Action buttons per item (row)

##### actionsColumn.buttons.label

Type: `String`

Label of the button

##### actionsColumn.buttons.type

Type: `String`

Default: 'default'

Values: 'default', 'primary', 'success', 'info', 'warning', 'danger'

Bootstrap class to apply to the button (btn-{{type}})

##### actionsColumn.buttons.icon

Type: `String`

Font Awesome icon (fa-{{icon}})

##### actionsColumn.buttons.onClick

Type: `Function`

Function to execute when the button is clicked. It's called with the row object being clicked

### attrs

Type: `Object`

#### attrs.itemsByPage

Type: `Number`

Default: `10`

Number of rows by page
