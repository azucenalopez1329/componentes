import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: 'assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte increibles fotos de todo el mundo'
    },
    {
      img: 'assets/slides/music-player-2.svg',
      titulo: 'Escucha Musica',
      desc: 'Toda tu musica favorita esta aqui'
    },
    {
      img: 'assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposicion'
    },
    {
      img: 'assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicacion',
      desc: 'Siempre sabremos donde estas!'
    },
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');

  }

}
