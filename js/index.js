var maxElements = 25;
var colors = ['#F25F5C', '#FFE066', '#247BAO', '#70C1B3'];
var bg = '#50514F';

var messages = [
    {
        message: '>:3<',
        sender: 'BurnzZ'
    },
    {
        message: 'BAGUL',
        sender: 'adin234'
    },
    {
        message: 'HIPAPA',
        sender: 'jvmsangkal'
    },
    {
        message: 'WTF :O',
        sender: 'FerrielMelarpis'
    }
];

var generateSections = function (message) {
    return message.split('').map(function (character) {
        var sectionEl = document.createElement('section');
        var character = getCharacter(character);

        for (var i = 0; i < maxElements; i++) {
            var el = document.createElement('span');

            if (character[i] === 1) {
                el.style.background = colors[anime.random(0, 3)];
            } else {
                el.style.opacity = 0.0;
            }

            sectionEl.appendChild(el);
        }

        return sectionEl;
    });
};

messages.forEach(function (messageObj) {
    var div = document.createElement('div');
    var charactersDiv = document.createElement('div');

    charactersDiv.className = 'character';
    Array.prototype.forEach.call(
        generateSections(messageObj.message),
        function (section) {
            charactersDiv.appendChild(section);
        }
    );

    var sender = document.createElement('p');
    sender.innerHTML = '- ' + messageObj.sender;

    div.appendChild(charactersDiv);
    div.appendChild(sender);

    document.body.appendChild(div);
});

anime({
    targets: 'span',
    translateX: function() { return anime.random(-6, 6) + 'rem'; },
    translateY: function() { return anime.random(-6, 6) + 'rem'; },
    scale: function() { return anime.random(10, 20) / 10; },
    rotate: function() { return anime.random(-360, 360); },
    delay: function() { return 400 + anime.random(0, 500); },
    duration: function() { return anime.random(1000, 2000); },
    direction: 'alternate',
    loop: true
});


