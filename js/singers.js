import { UI } from './ui.js'

export class Singers {
    constructor() {
        $('#singers').click(function (e) {
            if (e.target.nodeName == "H3") {
                $('#singers p').not(($(e.target).next())).slideUp(500);
                $(e.target).next().slideToggle(500, function () {

                });
            }
        });
    }
}