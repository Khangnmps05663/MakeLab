function Cat(name){
    this.name = name;
}
Cat.prototype.eat = function(){
    this.name = 'zxcvxz';
}
module.exports = Cat;