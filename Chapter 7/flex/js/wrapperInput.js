(function () {
    const oBox = document.querySelector('.box');
    const wrapperForm = document.querySelector('fieldset');

    wrapperForm.addEventListener('change', function (e) {
        const value = e.target.value;
        const property = e.target.id;

        oBox.style[property] = value;

        // flex-flow 的值取决于 flex-direction flex-wrap
        const flow = document.querySelector('#flex-flow');
        const flowValues = flow.value.split(' ');
        if (e.target.id === 'flex-direction') {
            flowValues.splice(0, 1, e.target.value);
            flow.value = flowValues.join(' ');
        } else if (e.target.id === 'flex-wrap') {
            flowValues.splice(1, 1, e.target.value);
            flow.value = flowValues.join(' ');
        }
    });
}());