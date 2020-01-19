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
            families	: ['Montserrat','Concert One']
        },
        fontactive: function(fontFamily, fontDescription) {
            init();
        },
        fontinactive	: function(fontFamily, fontDescription) {
            init();
        }
    });
});

function init() { $1.show().arctext({radius: 700}); };




    var typed = new Typed(".type", {
        strings :[ "Amor de mi vida", "que Dios te bendiga siempre"],
         typeSpeed: 100,
         loop: true
    });


    var typed = new Typed(".type2", {
        strings :[ "Amor de mi vida", "que Dios te bendiga siempre"],
         typeSpeed: 100,
         loop: true
    });

