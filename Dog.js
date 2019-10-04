function Dog (){
}

Dog.prototype.jump = function(){
    console.log('Jumping');
}
Dog.prototype.run = function(){
    console.log('Running');
}
module.exports = Dog;