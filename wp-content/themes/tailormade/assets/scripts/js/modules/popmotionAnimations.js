import { easing, physics, spring, tween, styler, listen, value, transform, pointer, keyframes, stagger } from 'popmotion'
import scroll from 'stylefire/scroll'

const trump1 = document.querySelector('#trump1')
const trump2 = document.querySelector('#trump2')
const trump3 = document.querySelector('#trump3')
const trump1XY = value({ x: 0, y: 0 }, styler(trump1).set)
const trump2XY = value({ x: 0, y: 0 }, styler(trump2).set)
const trump3XY = value({ x: 0, y: 0 }, styler(trump3).set)
const divStyler = document.querySelector('#popMe')

keyframes({
    values: [
      { color: '#9B65DE' },
      { color: '#14D790' },
      { color: '#FF1C68' },
      { color: '#198FE3' },
      { color: '#9B65DE' }
    ],
    duration: 3000,
    easings: easing.easeInOut,
    loop: Infinity
  }).start(styler(divStyler).set)


listen(trump1, 'mousedown touchstart').start((e) => {
    e.preventDefault()
    pointer(trump1XY.get())
        .start(trump1XY)
})
listen(trump2, 'mousedown touchstart').start((e) => {
    e.preventDefault()
    pointer(trump2XY.get())
        .start(trump2XY)
})
listen(trump3, 'mousedown touchstart').start((e) => {
    e.preventDefault()
    pointer(trump3XY.get())
        .start(trump3XY)
})

listen(document, 'mouseup touchend')
  .start(() => {
    trump1XY.stop()
    trump2XY.stop()
    trump3XY.stop()
})


const trumpContainer = document.querySelector('.trumpContainer');

const trumpStylers = Array
  .from(trumpContainer.childNodes)
  .map(styler);

const animations = Array(trumpStylers.length)
        .fill(tween({ from: {rotate: 0}, to: { rotate: -20 }, duration: 500, flip: Infinity }));

 stagger(animations, 0)
        .start((v) => v.forEach((x, i) => {
   trumpStylers[i].set({ 'rotate': x.rotate })
 }));
    