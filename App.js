import img from './tt.jpg'
var App={
    template:'<div>' +
    '<img :src="imgSrc">' +
    '</div>',
    data(){
        return{
            imgSrc:img
        }
    }
}
export {App}