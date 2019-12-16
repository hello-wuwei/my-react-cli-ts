const getName = function (this:any, id:number) {
  const opt = this.list.find((item:any) => id === item.id)
  return opt ? opt.name : ''
}

export const enmu_brands = {
  list: [
    { id: 1, name: '宾利' },
    { id: 2, name: '宝马' },
    { id: 3, name: '兰博基尼' },
    { id: 4, name: '法拉利' },
    { id: 5, name: '奔驰' },
    { id: 6, name: '劳斯莱斯' }
  ],
   getName
}