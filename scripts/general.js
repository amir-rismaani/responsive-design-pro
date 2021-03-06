const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(){
    this.classList.toggle('hamburger--open');
    this.parentNode.querySelector(".menu").classList.toggle('menu--open');
});


const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');

let tabInterval = null;
initTabInterval();

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        clearInterval(tabInterval);
        const targetTabPane = document.querySelector(`#${tab.dataset.targetId}`)
        
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        tabPanes.forEach(tabPane => {
            tabPane.classList.remove('in');
        });
        targetTabPane.classList.add('in');
        initTabInterval();
    })
});


const accordionTitles = document.querySelectorAll('.accordion__title');
accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', function(ev) {
        const accordion = this.parentNode;
        accordion.classList.toggle('accordion--expanded');
    });
});

function initTabInterval(){
    tabInterval = setInterval(() => {
        let activeTab = document.querySelector('.tab.active');
        let nextTab = activeTab.nextElementSibling;
        if(!nextTab)
            nextTab = activeTab.parentNode.firstElementChild;
        nextTab.click();
    }, 5000);
};

AOS.init();
