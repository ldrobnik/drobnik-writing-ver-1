import {Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.css']
})

export class BioComponent implements OnInit {

    portraitPath = "images/portrait.jpg"; //path of the portrait image

    // Array with publication list

    publications = [

        {
            title: '2017. Antologia współczesnych polskich opowiadań',

            type: 'press',

            year: 2017,

            filename: 'antologia2017',

            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',

            descpritionPl: 'Zbiór opowiadań z&nbsp;moim tekstem &bdquo;Jeśli zapłonę&rdquo; przygotowany przez wydawnictwo Forma',

            descpritionEn: 'A collection of Polish contemporary short stories featuring my piece &ldquo;Jeśli zapłonę&rdquo; published by Forma publishing house'

        },

        {
            title: 'Fabularie (10)',

            type: 'press',

            year: 2016,

            filename: 'fabularie',

            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',

            descpritionPl: 'Opowiadanie &bdquo;Ćmy&rdquo; (polskie tłumaczenie opowiadania &bdquo;Moths&rdquo;)',

            descpritionEn: 'A short story &ldquo;Ćmy&rdquo; (Polish translation of &ldquo;Moths&rdquo;)'

        },

        {
            title: 'Wyspa (4 - Suplement)',

            type: 'press',

            year: 2015,

            filename: 'wyspa',

            url: 'http://kwartalnikwyspa.pl/',

            descpritionPl: 'Opowiadanie &bdquo;Wszystkożerność&rdquo;',

            descpritionEn: 'A short story &ldquo;Wszystkożerność&rdquo;'

        },

        {
            title: 'Lighthouse (10)',

            type: 'press',

            year: 2015,

            filename: 'lighthouse',

            url: 'http://www.gatehousepress.com/lighthouse/',

            descpritionPl: 'Opowiadanie &bdquo;Moths&rdquo;',

            descpritionEn: 'A short story &ldquo;Moths&rdquo;'

        },

        {
            title: '2014. Antologia współczesnych polskich opowiadań',

            type: 'collection',

            year: 2014,

            filename: 'antologia2014',

            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',

            descpritionPl: 'Zbiór opowiadań z&nbsp;moim tekstem &bdquo;Biegnący człowiek&rdquo; przygotowany przez wydawnictwo Forma',

            descpritionEn: 'A collection of Polish contemporary short stories featuring my piece &ldquo;Biegnący człowiek&rdquo; published by Forma publishing house'

        },

        {

            title: 'Lampa (3/2012)',

            type: 'press',

            year: 2012,

            filename: 'lampa2012',

            url: 'http://lampa.art.pl/',

            descpritionPl: 'Początkowe rozdziały powieści &bdquo;Vostok&rdquo;',

            descpritionEn: 'Initial chapters of the novel &ldquo;Vostok&rdquo;'

        },


        {
            title: 'Dodatek Literacki (9)',

            type: 'press',

            year: 2011,

            filename: 'dodatek',

            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',

            descpritionPl: 'Fragment powieści &bdquo;Nocturine&rdquo',

            descpritionEn: 'A fragment of the novel &ldquo;Nocturine&rdquo;'

        },

        {
            title: 'Nocturine. Cunninghamella',

            type: 'book',

            year: 2011,

            filename: 'noc-cun',

            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',

            descpritionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',

            descpritionEn: 'A volume of two novellas published by Forma publishing house'

        },

        {
            title: 'Dwutygodnik.com (57)',

            type: 'press',

            year: 2011,

            filename: 'dwutygodnik',

            url: 'http://www.dwutygodnik.com/artykul/2252-nocturine-fragment-powiesci.html',

            descpritionPl: 'Fragment powieści &bdquo;Nocturine&rdquo',

            descpritionEn: 'A fragment of the novel &ldquo;Nocturine&rdquo;'

        },

        {
            title: 'Rita Baum (10)',

            type: 'press',

            year: 2006,

            filename: 'ritabaum',

            url: 'https://issuu.com/ritabaumwroclaw/docs/10',

            descpritionPl: 'Opowiadanie &bdquo;Rozbieranie do snu&rdquo;',

            descpritionEn: 'A short story &ldquo;Rozbieranie do snu&rdquo;'

        },

        {
            title: 'Lampa (6/2005)',

            type: 'press',

            year: 2005,

            filename: 'lampa2005',

            url: 'http://lampa.art.pl/',

            descpritionPl: 'Opowiadanie &bdquo;Astroskopia&rdquo;',

            descpritionEn: 'A short story &ldquo;Astroskopia&rdquo;'
        }
    ];

    ngOnInit() {

    }

}