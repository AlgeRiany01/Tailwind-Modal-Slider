// -------------------- VARS ---------------------------------------------------

const $ = document.querySelector.bind(document);
const $ALL = document.querySelectorAll.bind(document);


// --------------------END  VARS ---------------------------------------------------






// ----------------------------- SLIDER --------------------------------------------

function Slider(slider) {
    if (!(slider instanceof Element)) return console.error('please pass slider !');

    let prev, current, next;

    let nextBtn = $('.btns .nextBTN')
    let prevBtn = $('.btns .prevBTN')


    function startSlider() {
        current = slider.querySelector('.current') || slider.firstElementChild;
        prev = current.previousElementSibling || slider.lastElementChild;
        next = current.nextElementSibling || slider.firstElementChild;
    }

    function applyClasses() {
        current.classList.add('current')
        prev.classList.add('prev')
        next.classList.add('next')

    }

    function move(e = null, dir) {

        const classesToRemove = ['prev', 'current', 'next'];
        current.classList.remove(...classesToRemove);
        prev.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (dir === 'back') {
            [prev, current, next] = [prev.previousElementSibling || slider.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slider.firstElementChild];
        }
        if (e && e.currentTarget.tagName === 'BUTTON') clearInterval(interval);

        applyClasses()
    }


    startSlider()

    interval = setInterval(move, 2500)
    nextBtn.addEventListener('click', (e) => move(e))
    prevBtn.addEventListener('click', (e) => move(e, 'back'))
}



let slider = Slider($('.slider'))

// ----------------------------- END SLIDER --------------------------------------------







// -------------------------------------------------  MODAL  --------------------------------------------------------------------

$('.openModal').addEventListener('click', toggleModal)
$('.outer').addEventListener('click', clickOuter)
$ALL('.hideModal').forEach((e) => e.addEventListener('click', toggleModal))

function toggleModal() {
    let Modal = $('.Modal');
    Modal.classList.toggle('opacity-0');
    Modal.classList.toggle('pointer-events-none');
}


function clickOuter(e) {
    let isOuter = e.target === e.currentTarget;
    console.log(e.target, e.currentTarget)
    if (isOuter) toggleModal()
}

// -------------------------------------------------EMD  MODAL--------------------------------------------------------------------