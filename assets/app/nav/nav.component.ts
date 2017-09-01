import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png'
    }


    // set a property that holds a random color for our style
    randomcolor = this.getRandomColor();

    // function to get random colors
    public getRandomColor() {

        var mainColors = ["#a98086", "#566f0c", "#a67847", "#616a65", "#99aac6", "#b34a53"];
        var secondaryColor = ["#be9ea3", "#7a9d11", "#bc9164", "#79857e", "#bac5d8", "#c36d75"];
        var randomNumber = Math.floor(Math.random() * 6);

        var color = {
            main: mainColors[randomNumber],
            secondary: secondaryColor[randomNumber]
        };
        console.log("main: " + color.main + ", secondary: " + color.secondary);
        return color;
    }

    //function to set a new random color
    setColor() {
        this.randomcolor = this.getRandomColor();
    }

    ngOnInit() {

    }

}