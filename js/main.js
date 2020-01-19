const btnSwitch = document.getElementById("switch");

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active'); 
});

let $1	= $('#1').hide();

      
google.load('webfont','1');

google.setOnLoadCallback(function() {
    WebFont.load({
        google		: {
            families: ['Montserrat','Concert One']
        },
        fontactive: function(fontFamily, fontDescription) {
            init();
        },
        
    });
});

function init() { $1.show().arctext({radius: 700}); };