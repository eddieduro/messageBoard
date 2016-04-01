export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('post'),
    this.use('toLeft', {duration: 500, easing: 'ease-in-out'}),
    this.reverse('toRight', {duration: 500, easing: 'ease-in-out'})
  ),
  this.transition(
   this.hasClass('activeForm'),

   // this makes our rule apply when the liquid-if transitions to the
   // true state.
   this.toValue(true),
   this.use('crossFade'),

   // which means we can also apply a reverse rule for transitions to
   // the false state.
   this.reverse('crossFade')
 );
}
