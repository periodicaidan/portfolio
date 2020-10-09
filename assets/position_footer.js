function positionFooter(_e) {
    let footer = $('footer').first();
    let bodyHeight = document.body.scrollHeight;

    footer.css('position', 'absolute');
    footer.css('left', '0');
    footer.css('width', '100%');

    footer.css('bottom', Math.min(window.innerHeight - bodyHeight, 0).toString());
}

window.onresize = window.onload = positionFooter;