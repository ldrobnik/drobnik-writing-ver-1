import {Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

    langEn: boolean; //specifies the language
    portraitPath = "images/portrait.jpg"; // path to the portrait image
    logoPath = "images/bio-logo.png"; // path to the logo
    imagePathBeginning = "images/bio-"; //specifies the beginnig of each timeline image file path
    imagePathEnd = ".jpg"; //specifies the end of each timeline image file path

    // Array with publication list

    publications = [

        {
            title: '2017. Antologia współczesnych polskich opowiadań',

            type: 'press',

            year: 2017,

            filename: 'antologia2017',

            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',

            descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',

            descriptionEn: 'A collection featuring my short story “Jeśli zapłonę” (Forma)'

        },

        {
            title: 'Fabularie (10)',

            type: 'press',

            year: 2016,

            filename: 'fabularie',

            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',

            descriptionPl: 'Opowiadanie „Ćmy” (polskie tłumaczenie opowiadania „Moths”)',

            descriptionEn: 'A short story “Ćmy” (Polish translation of “Moths”)'

        },

        {
            title: 'Wyspa (4 - Suplement)',

            type: 'press',

            year: 2015,

            filename: 'wyspa',

            url: 'http://kwartalnikwyspa.pl/',

            descriptionPl: 'Opowiadanie „Wszystkożerność”',

            descriptionEn: 'A short story “Wszystkożerność”'

        },

        {
            title: 'Lighthouse (10)',

            type: 'press',

            year: 2015,

            filename: 'lighthouse',

            url: 'http://www.gatehousepress.com/lighthouse/',

            descriptionPl: 'Opowiadanie „Moths”',

            descriptionEn: 'A short story “Moths”'

        },

        {
            title: '2014. Antologia współczesnych polskich opowiadań',

            type: 'collection',

            year: 2014,

            filename: 'antologia2014',

            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',

            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',

            descriptionEn: 'A collection featuring my short story “Biegnący człowiek” (Forma)'

        },

        {

            title: 'Lampa (3/2012)',

            type: 'press',

            year: 2012,

            filename: 'lampa2012',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Początkowe rozdziały powieści „Vostok”',

            descriptionEn: 'Initial chapters of the novel “Vostok”'

        },


        {
            title: 'Dodatek Literacki (9)',

            type: 'press',

            year: 2011,

            filename: 'dodatek',

            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',

            descriptionPl: 'Fragment powieści „Nocturine”',

            descriptionEn: 'A fragment of the novel “Nocturine”'

        },

        {
            title: 'Nocturine. Cunninghamella',

            type: 'book',

            year: 2011,

            filename: 'noc-cun',

            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',

            descriptionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',

            descriptionEn: 'A volume of two novellas published by Forma publishing house'

        },

        {
            title: 'Dwutygodnik.com (57)',

            type: 'press',

            year: 2011,

            filename: 'dwutygodnik',

            url: 'http://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html',

            descriptionPl: 'Fragment powieści „Nocturine”',

            descriptionEn: 'A fragment of the novel “Nocturine”'

        },

        {
            title: 'Rita Baum (10)',

            type: 'press',

            year: 2006,

            filename: 'ritabaum',

            url: 'https://issuu.com/ritabaumwroclaw/docs/10',

            descriptionPl: 'Opowiadanie „Rozbieranie do snu”',

            descriptionEn: 'A short story “Rozbieranie do snu”'

        },

        {
            title: 'Lampa (6/2005)',

            type: 'press',

            year: 2005,

            filename: 'lampa2005',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Opowiadanie „Astroskopia”',

            descriptionEn: 'A short story “Astroskopia”'
        }
    ];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.langEn = this.router.url.includes('/en');
    }

}