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

            descriptionPl: 'Zbiór opowiadań z&nbsp;moim tekstem &bdquo;Jeśli zapłonę&rdquo; przygotowany przez wydawnictwo Forma',

            descriptionEn: 'A collection of Polish contemporary short stories featuring my piece &ldquo;Jeśli zapłonę&rdquo; published by Forma publishing house'

        },

        {
            title: 'Fabularie (10)',

            type: 'press',

            year: 2016,

            filename: 'fabularie',

            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',

            descriptionPl: 'Opowiadanie &bdquo;Ćmy&rdquo; (polskie tłumaczenie opowiadania &bdquo;Moths&rdquo;)',

            descriptionEn: 'A short story &ldquo;Ćmy&rdquo; (Polish translation of &ldquo;Moths&rdquo;)'

        },

        {
            title: 'Wyspa (4 - Suplement)',

            type: 'press',

            year: 2015,

            filename: 'wyspa',

            url: 'http://kwartalnikwyspa.pl/',

            descriptionPl: 'Opowiadanie &bdquo;Wszystkożerność&rdquo;',

            descriptionEn: 'A short story &ldquo;Wszystkożerność&rdquo;'

        },

        {
            title: 'Lighthouse (10)',

            type: 'press',

            year: 2015,

            filename: 'lighthouse',

            url: 'http://www.gatehousepress.com/lighthouse/',

            descriptionPl: 'Opowiadanie &bdquo;Moths&rdquo;',

            descriptionEn: 'A short story &ldquo;Moths&rdquo;'

        },

        {
            title: '2014. Antologia współczesnych polskich opowiadań',

            type: 'collection',

            year: 2014,

            filename: 'antologia2014',

            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',

            descriptionPl: 'Zbiór opowiadań z&nbsp;moim tekstem &bdquo;Biegnący człowiek&rdquo; przygotowany przez wydawnictwo Forma',

            descriptionEn: 'A collection of Polish contemporary short stories featuring my piece &ldquo;Biegnący człowiek&rdquo; published by Forma publishing house'

        },

        {

            title: 'Lampa (3/2012)',

            type: 'press',

            year: 2012,

            filename: 'lampa2012',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Początkowe rozdziały powieści &bdquo;Vostok&rdquo;',

            descriptionEn: 'Initial chapters of the novel &ldquo;Vostok&rdquo;'

        },


        {
            title: 'Dodatek Literacki (9)',

            type: 'press',

            year: 2011,

            filename: 'dodatek',

            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',

            descriptionPl: 'Fragment powieści &bdquo;Nocturine&rdquo',

            descriptionEn: 'A fragment of the novel &ldquo;Nocturine&rdquo;'

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

            descriptionPl: 'Fragment powieści &bdquo;Nocturine&rdquo',

            descriptionEn: 'A fragment of the novel &ldquo;Nocturine&rdquo;'

        },

        {
            title: 'Rita Baum (10)',

            type: 'press',

            year: 2006,

            filename: 'ritabaum',

            url: 'https://issuu.com/ritabaumwroclaw/docs/10',

            descriptionPl: 'Opowiadanie &bdquo;Rozbieranie do snu&rdquo;',

            descriptionEn: 'A short story &ldquo;Rozbieranie do snu&rdquo;'

        },

        {
            title: 'Lampa (6/2005)',

            type: 'press',

            year: 2005,

            filename: 'lampa2005',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Opowiadanie &bdquo;Astroskopia&rdquo;',

            descriptionEn: 'A short story &ldquo;Astroskopia&rdquo;'
        }
    ];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.langEn = this.router.url.includes('/en');
    }

}