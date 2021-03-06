import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {ResetScrollService} from "../services/reset-scroll.service";

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

    /* Array with a list o publications specifying the following properties:
     * title - specifies the main heading of a timeline panel;
     * type - 'press', 'collection' or 'book' to add different styles
     * year - year of publication
     * filename - partial filename of the image displayed in the timeline
     * url - path to the publication/magazine/book website
     * descriptionPl - Polish description
     * descriptionEn - English description */

    publications = [
        {
            title: 'Nocturine',

            type: 'book',

            year: '',

            filename: 'nocturinefb',

            url: 'http://fathombooks.org/',

            descriptionPl: 'Angielska wersja minipowieści „Nocturine”, która ukaże się w 2019 r. nakładem wydawnictwa Fathom Books',

            descriptionEn: 'An English version of the novella “Nocturine” forthcoming in 2019 from Fathom Books'

        },
        {
            title: 'Pithead Chapel',

            type: 'press',

            year: '',

            filename: 'pithead',

            url: 'https://pitheadchapel.com/',

            descriptionPl: 'Opowiadanie „Entrails”',

            descriptionEn: 'A short story “Entrails”'

        },
        {
            title: 'Atticus Review',

            type: 'press',

            year: '2019',

            filename: 'atticus',

            url: 'https://atticusreview.org/',

            descriptionPl: 'Opowiadanie „Treasures”',

            descriptionEn: 'A short story “Treasures”'

        },
        {
            title: 'Foglifter Volume 4 Issue 1',

            type: 'press',

            year: '2019',

            filename: 'foglifter',

            url: 'https://foglifterjournal.com/',

            descriptionPl: 'Opowiadanie „Landmines”',

            descriptionEn: 'A short story “Landmines”'

        },
        {
            title: 'X-R-A-Y Literary Magazine',

            type: 'press',

            year: '2019',

            filename: 'xray',

            url: 'http://x-r-a-y.com/spores-lukasz-drobnik/fiction/',

            descriptionPl: 'Opowiadanie „Spores”',

            descriptionEn: 'A short story “Spores”'

        },
        {
            title: 'Transformation Anthology',

            type: 'collection',

            year: '2019',

            filename: 'theselkie',

            url: 'http://theselkie.co.uk/anthology/',

            descriptionPl: 'Opowiadanie „Airborne” w antologii przygotowywanej przez magazyn The Selkie',

            descriptionEn: 'A short story “Airborne” in an anthology forthcoming from The Selkie'

        },
        {
            title: 'SHARKPACK Annual (2018)',

            type: 'press',

            year: '2018',

            filename: 'sharkpack',

            url: 'http://fathombooks.org/html/issueone.html',

            descriptionPl: '„8-bit Dreams” (fragment minipowieści „Nocturine”)',

            descriptionEn: '“8-bit Dreams” (a fragment of the novella “Nocturine”)'

        },
        {
            title: 'Stoner Polski (1)',

            type: 'press',

            year: '2018',

            filename: 'stoner',

            url: 'http://www.stonerpolski.pl/numer-1/102-celuloza-lukasz-drobnik.html',

            descriptionPl: 'Opowiadanie „Celuloza” (polskie tłumaczenie opowiadania „Cellulose”)',

            descriptionEn: 'A short story “Celuloza” (Polish translation of “Cellulose”)'

        },
        {
            title: 'Underwood (September 2018)',

            type: 'press',

            year: '2018',

            filename: 'underwood',

            url: 'https://underwoodpress.com/inaugural-issue/september-2018/photosensitivity-by-lukasz-drobnik/',

            descriptionPl: 'Opowiadanie „Photosensitivity” (angielskie tłumaczenie opowiadania „Światłoczułość”)',

            descriptionEn: 'A short story “Photosensitivity” (English translation of “Światłoczułość”'

        },
        {
            title: 'Mojave Heart Review (September 2018)',

            type: 'press',

            year: '2018',

            filename: 'mojave',

            url: 'https://mojaveheart.com/cellulose/',

            descriptionPl: 'Opowiadanie „Cellulose”',

            descriptionEn: 'A short story “Cellulose”'

        },
        {
            title: 'Afront 2(5)/2018',

            type: 'press',

            year: '2018',

            filename: 'afront',

            url: 'https://afront.org.pl/',

            descriptionPl: 'Opowiadania „Skomplikowane przeczucie” i „Waleń” (polskie tłumaczenie opowiadania „Cetacean”)',

            descriptionEn: 'Short stories “Skomplikowane przeczucie” and “Waleń” (Polish translation of “Cetacean”)'

        },
        {
            title: 'wydawnictwo j',

            type: 'press',

            year: '2018',

            filename: 'wydawnictwoj',

            url: 'http://wydawnictwoj.pl/uncategorized/pismo/proza/lukasz-drobnik-vostok-fragment/',

            descriptionPl: 'Fragment powieści „Vostok”',

            descriptionEn: 'A fragment of the novel “Vostok”'

        },
        {
            title: 'Magazyn Wizje (2/2018)',

            type: 'press',

            year: '2018',

            filename: 'wizje',

            url: 'http://magazynwizje.pl/lukasz-drobnik-swiatloczulosc/',

            descriptionPl: 'Opowiadanie „Światłoczułość”',

            descriptionEn: 'A short story “Światłoczułość”'

        },
        {
            title: 'Quarterly West (94)',

            type: 'press',

            year: '2018',

            filename: 'qw',

            url: 'https://www.quarterlywest.com/issue-94/cetacean',

            descriptionPl: 'Opowiadanie „Cetacean”',

            descriptionEn: 'A short story “Cetacean”'

        },
        {
            title: 'Obszary Przepisane (5)',

            type: 'press',

            year: '2018',

            filename: 'op',

            url: 'http://obszaryprzepisane.com/wp-content/uploads/2018/04/05op-1.pdf',

            descriptionPl: 'Opowiadanie „Żywioły” (polskie tłumaczenie opowiadania „Elements”)',

            descriptionEn: 'A short story “Żywioły” (Polish translation of “Elements”)'

        },
        {
            title: 'The Chaffin Journal (2018)',

            type: 'press',

            year: '2018',

            filename: 'chaffin',

            url: 'https://english.eku.edu/chaffin-journal',

            descriptionPl: 'Opowiadanie „Elements”',

            descriptionEn: 'A short story “Elements”'

        },
        {
            title: 'Inter– (2(16)/2018)',

            type: 'press',

            year: '2018',

            filename: 'inter',

            url: 'https://pismointer.wordpress.com/numery-archiwalne/nr-216-2018/lukasz-drobnik-dewon/',

            descriptionPl: 'Opowiadanie „Dewon” (polskie tłumaczenie opowiadania „Devonian”)',

            descriptionEn: 'A short story “Dewon” (Polish translation of “Devonian”)'

        },
        {
            title: 'Helikopter (3/2018)',

            type: 'press',

            year: '2018',

            filename: 'helikopter',

            url: 'https://opt-art.net/helikopter/3-2018/lukasz-drobnik-drony/',

            descriptionPl: 'Opowiadanie „Drony” (polskie tłumaczenie opowiadania „Drones”)',

            descriptionEn: 'A short story “Drony” (Polish translation of “Drones”)'

        },

        {
            title: 'Cartridge Lit (The Foul Play Temple Issue)',

            type: 'press',

            year: '2018',

            filename: 'cartridgelit',

            url: 'https://cartridgelit.com/2018/02/14/montezumas-revenge/',

            descriptionPl: 'Opowiadanie „montezuma’s revenge”',

            descriptionEn: 'A short story “montezuma’s revenge”'

        },

        {
            title: 'The Write Launch (February 2018)',

            type: 'press',

            year: '2018',

            filename: 'thewritelaunch',

            url: 'https://thewritelaunch.com/2018/01/heart-mighty-power/',

            descriptionPl: '„Heart Mighty Power”, fragment minipowieści „Nocturine”',

            descriptionEn: '“Heart Mighty Power”, a fragment of the novella “Nocturine”'

        },

        {
            title: 'The Gravity of the Thing (Winter 2018)',

            type: 'press',

            year: '2018',

            filename: 'thegravityofthething',

            url: 'http://thegravityofthething.com/devonian-lukasz-drobnik/',

            descriptionPl: 'Opowiadanie „Devonian”',

            descriptionEn: 'A short story “Devonian”'

        },

        {
            title: 'Bare Fiction (10)',

            type: 'press',

            year: '2017',

            filename: 'barefiction10',

            url: 'http://www.barefictionmagazine.co.uk/buy/issues/bare-fiction-magazine-issue-10-november-2017/',

            descriptionPl: 'Opowiadanie „Drones”',

            descriptionEn: 'A short story “Drones”'

        },

        {
            title: '2017. Antologia współczesnych polskich opowiadań',

            type: 'collection',

            year: '2017',

            filename: 'antologia2017',

            url: 'http://www.wforma.eu/2017-antologia-wspolczesnych-polskich-opowiadan.html',

            descriptionPl: 'Zbiór opowiadań z moim tekstem „Jeśli zapłonę” (Forma)',

            descriptionEn: 'A collection featuring my short story “Jeśli zapłonę” (Forma)'

        },

        {
            title: 'Fabularie (10)',

            type: 'press',

            year: '2016',

            filename: 'fabularie',

            url: 'https://issuu.com/fabularie/docs/fabularie-nr10_issuu_ok',

            descriptionPl: 'Opowiadanie „Ćmy” (polskie tłumaczenie opowiadania „Moths”)',

            descriptionEn: 'A short story “Ćmy” (Polish translation of “Moths”)'

        },

        {
            title: 'Wyspa (4 - Suplement)',

            type: 'press',

            year: '2015',

            filename: 'wyspa',

            url: 'http://kwartalnikwyspa.pl/category/numer-2015suplement/',

            descriptionPl: 'Opowiadanie „Wszystkożerność”',

            descriptionEn: 'A short story “Wszystkożerność”'

        },

        {
            title: 'Lighthouse (10)',

            type: 'press',

            year: '2015',

            filename: 'lighthouse',

            url: 'http://www.gatehousepress.com/lighthouse/',

            descriptionPl: 'Opowiadanie „Moths”',

            descriptionEn: 'A short story “Moths”'

        },

        {
            title: '2014. Antologia współczesnych polskich opowiadań',

            type: 'collection',

            year: '2014',

            filename: 'antologia2014',

            url: 'http://www.wforma.eu/318,2014-antologia-wspolczesnych-polskich-opowiadan.html',

            descriptionPl: 'Zbiór opowiadań z moim tekstem „Biegnący człowiek” (Forma)',

            descriptionEn: 'A collection featuring my short story “Biegnący człowiek” (Forma)'

        },

        {

            title: 'Lampa (3/2012)',

            type: 'press',

            year: '2012',

            filename: 'lampa2012',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Początkowe rozdziały powieści „Vostok”',

            descriptionEn: 'Initial chapters of the novel “Vostok”'

        },


        {
            title: 'Dodatek Literacki (9)',

            type: 'press',

            year: '2011',

            filename: 'dodatek',

            url: 'http://nagrodaliterackagdynia.pl/sites/default/files/upload/dodatek-nr-9.pdf',

            descriptionPl: 'Fragment minipowieści „Nocturine”',

            descriptionEn: 'A fragment of the novella “Nocturine”'

        },

        {
            title: 'Nocturine. Cunninghamella',

            type: 'book',

            year: '2011',

            filename: 'noc-cun',

            url: 'http://wforma.eu/12,nocturine.-cunninghamella.html',

            descriptionPl: 'Tom dwóch minipowieści opublikowany przez wydawnictwo Forma',

            descriptionEn: 'A volume of two novellas published by Forma publishing house'

        },

        {
            title: 'Dwutygodnik.com (57)',

            type: 'press',

            year: '2011',

            filename: 'dwutygodnik',

            url: 'http://www.dwutygodnik.com/wydanie/2011/57',

            descriptionPl: 'Fragment minipowieści „Nocturine”',

            descriptionEn: 'A fragment of the novella “Nocturine”'

        },

        {
            title: 'Latarnia Morska (1–2 (11–12) 2009 / 1 (13) 2010)',

            type: 'press',

            year: '2009/2010',

            filename: 'latarniamorska',

            url: 'http://www.latarnia-morska.eu/pl/proza/513-nocturine',

            descriptionPl: 'Fragment minipowieści „Nocturine”',

            descriptionEn: 'A fragment of the novella “Nocturine”'

        },

        {
            title: 'Pro Arte online 3 (61) 2006',

            type: 'press',

            year: '2006',

            filename: 'proarte',

            url: 'http://proarte.net.pl',

            descriptionPl: 'Opowiadanie „ośmiobitowe sny”',

            descriptionEn: 'A short story “ośmiobitowe sny”'

        },

        {
            title: 'Rita Baum (10)',

            type: 'press',

            year: '2006',

            filename: 'ritabaum',

            url: 'https://issuu.com/ritabaumwroclaw/docs/10',

            descriptionPl: 'Opowiadanie „Rozbieranie do snu”',

            descriptionEn: 'A short story “Rozbieranie do snu”'

        },

        {
            title: 'Lampa (6/2005)',

            type: 'press',

            year: '2005',

            filename: 'lampa2005',

            url: 'http://lampa.art.pl/',

            descriptionPl: 'Opowiadanie „Astroskopia”',

            descriptionEn: 'A short story “Astroskopia”'
        }
    ];

    //method resetting window scrolling
    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

    constructor(public router: Router) {

    }

    ngOnInit() {
        this.langEn = this.router.url.includes('/en');
    }

}