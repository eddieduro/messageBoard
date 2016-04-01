export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('post'),
    this.use('toLeft', {duration: 500, easing: 'ease-in-out'}),
    this.reverse('toRight', {duration: 500, easing: 'ease-in-out'})
  )
}
