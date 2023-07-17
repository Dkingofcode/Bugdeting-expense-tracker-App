import _ from 'lodash';


export function getSum(transaction){
  let sum = _(transaction).groupBy('type').map((obj, key) => {
     _.sumBy(obj, 'amount');
     return{
        'type': key,
        'color': obj[0].color,
        'total': _.sumBy(obj, 'amount')
     }
  }).value()
  return sum;
}

export function getLabels(transaction){
   let amountSum = getSum(transaction, 'type');
    let Total = _.sum(getSum(transaction));
   let percent = _(amountSum).map(obj => _.assign(obj,{percent: (100 * obj.total) / Total}))
   .value()

return percent;   
}