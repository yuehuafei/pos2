/**
 * Created by xxx on 17-7-12.
 */
var loadAllItems=
[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    }
];
var inputs=inputs = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'];
function findDetail(loadAllItems,inputs){
    var output=[];
    for(var i=0;i<inputs.length;i++){
        for(var j=0;j<loadAllItems.length;j++){
            if(inputs[i]==loadAllItems[j].barcode){
                output.push(loadAllItems[j]);
                break;
            }
        }
    }
    return output;
}
function merge(output) {
    var count=1;
    for(var i=0;i<output.length;i++)
    {
        for(var j=i+1;j<output.length;)
        {
            if(output[i].barcode==output[j].barcode)
            {
                output.splice(j,1);
                count++;
            }
            else j++;
        }
        output[i].count=count;
        count=1;
    }
    return output;
}
function sum(output) {
    var totalMoney=0;
    for(var i=0;i<output.length;i++)
    {
        totalMoney+=(output[i].count*output[i].price);
    }
    return totalMoney;
}
function strConnect(output,totalMoney){
    var strs="***<没钱赚商店>收据***\n";
    for(var i=0;i<output.length;i++){
        strs+="名称："+output[i].name+"，数量："+output[i].count+output[i].unit+"，单价："+output[i].price.toFixed(2)
            +"(元)，小计："+(output[i].price*output[i].count).toFixed(2)+"(元)\n";
    }
    strs+="----------------------\n"+"总计："+totalMoney.toFixed(2)+"(元)\n"+"**********************";
    return strs;
}
function print(strs) {
    console.log(strs);
}
var output =findDetail(loadAllItems,inputs);
var strs=strConnect(output,sum(merge(output)));
print(strs);
