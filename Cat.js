function Cat(name){
    this.name = name;
}
Cat.prototype.eat = function(){
    this.name = 'zxcvxz';
}
Cat.prototype.run = function(){
    console.log('Run');
}
Cat.prototype.sleep = function(){
    console.log('Sleep');
}
module.exports = Cat;