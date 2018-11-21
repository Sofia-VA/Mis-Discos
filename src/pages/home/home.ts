import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoverPage } from '../cover/cover';
import { BioPage } from '../bio/bio';
import { SongsPage } from '../songs/songs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cover=CoverPage;
  bio=BioPage;
  songs=SongsPage;
  discos=[
    
    {id:0, color:"#63ADF2",artista:"Two Steps from Hell",album:"Skyworld", anio:"2012", valoracion:[1,2,3,4,5], imagen:"http://mmbiz.qpic.cn/mmbiz_png/SWDwh911dS3h41MhStwtZeKI7jFibKc2kV0EsUbvpFM6Gv5b6mVeEUIIKoSNRsnE6rrRL2R4CAG6GRYOfzYw2sw/0?wx_fmt=png"
    ,songs:['1. All Is Hell That Ends Well (3:53)',
      '2. Titan Dream  (4:04)',
      '3. SkyWorld (3:12)',
      '4. El Dorado (4:14)',
      '5. The End Is the Beginning  (4:51)',
      '6. All the King´s Horses  (2:06)',
      '7. Realm of Power  (3:55)',
      '8. Winterspell (3:20)',
      '9. Blackheart (4:27)',
      '10. Juggernaut (2:34)',
      '11. Dark Ages (from Nemesis) (3:25)',
      '12. Our Last Hope (3:57)',
      '13. Icarus (2:53)',
      '14. For the Win (2:12)',
      '15. Sun & Moon (4:22)',
      '16. Big Sky (4:08)',
      '17. Starfleet (3:22)',
      '18. Queen of Crows (2:43)',
      '19. Blizzard ( 2:53)',
      '20. Breathe( 2:56)',
      '21. Back to the Earth (4:24)',
      '22. Ocean Kingdom (2:20)'],
      biografia:
    {
      image: "https://e-cdns-images.dzcdn.net/images/artist/a4dac498bf6e0c83c7d7400d7a8d0313/500x500.jpg",
      parrafos: ["Two Steps From Hell se formó en 2006 cuando Thomas Bergersen y Nick Phoenix se unieron para escribir música original para trailers de películas. 12 años después, TSFH ha aparecido en cientos de anuncios de películas, incluidos algunos de los mayores éxitos de taquilla de los últimos tiempos, así como miles de anuncios y programas de televisión. TSFH lanzó su primer álbum público, Invincible, en 2009, estableciendo la música épica como un género musical nuevo y único. Ahora hay 14 álbumes públicos y millones de fans en todo el mundo."
      ,"Fuente: https://www.twostepsfromhell.com/"]
    }},
    {id:1,color:"#5F5AA2",artista:"Zack Hemsey",album:"Ronin", anio:"2013", valoracion:[1,2,3,4,5], imagen:"https://f4.bcbits.com/img/a0815132184_10.jpg",
    songs:['1 Don´t Get in My Way (6:48)',
    '2 Slave (4:39)',
    '3 Nice to Meet Me (6:17)',
    '4 So Silent (5:05)',
    '5 Silver Crimson Black (6:48)',
    '6 Greeting the Menance (4:27)',
    '7 I Can Get it Back (7:37)',
    '8 Fade Away (5:56)',
    '9 Teachings of a Ronin (5:12)',
    '10 The Zoo (5:34)'],
    biografia:
    {
      image: "http://3.bp.blogspot.com/_kEt-ZpXYDM8/S-sMCy7SL4I/AAAAAAAAAAk/1C0vepNrFyE/s1600/PICT0246.JPG",
      parrafos: ["Hemsey es un artista, rapero y compositor estadounidense, cuyo trabajo se ha popularizado en gran medida a través de su uso en películas y trailers de películas. Comenzó su carrera como compositor de un oscuro grupo de hip-hop llamado Nine Leaves, donde también fue uno de los cinco letristas / MC. Comenzó su carrera en solitario en 2010 con el lanzamiento de Empty Room y ha seguido lanzando de forma independiente sus propios álbumes y singles de estudio de Epic Music, todos los cuales tienden a combinar elementos de partitura orquestal, hip-hop, instrumentación mundial y / o alternativa / rock. La música de Hemsey se ha utilizado en la película Inception (2010) de 2010, que incluyó su pieza compuesta Mind Heist, trailers para 2 Guns (2013), The Town (2010) y Lincoln (2012). Vengeance apareció en la película The Equalizer (2014), en un trailer de la segunda temporada del programa HBO Game of Thrones (2011), y en el trailer de la miniseries 24 de 21st Century Fox: Live Another Day (2014), Este último se emitirá durante el Super Bowl 2014.",
      "Fuente: https://www.imdb.com/name/nm2642285/bio"]
    }},
    {id:2,color:"#355691",artista:"Les Friction",album:"Les Friction", anio:"2012", valoracion:[1,2,3,4,5], imagen:"https://f4.bcbits.com/img/0000081921_10.jpg",
    songs:[ '1 Louder than Words (4:44)',
    '2 Torture (5:03)',
    '3 What You Need (3:31)',  
    '4 Here Comes the Reign (3:48)',
    '5 World on Fire (3:51)', 
    '6 Save your Life (3:09)', 
    '7 Sunday (3:36)',
    '8 String Theory (4:06)',  
    '9 Come Back to Me (3:52)'],
    biografia:
    {
      image: "http://show-biz.by/profile/image/profile_image/1374/xxlarge/crop=auto/_v=1499508036",
      parrafos: ["Les Friction es un grupo de música independiente liderado por Helmut Vonlichten, Nihl Finch, también conocido como Evan Frankfort, y un cantante llamado Paint. Helmut había colaborado anteriormente con su hermano Franz Vonlichten en su proyecto de música cinematográfica E.S. Posthumus hasta la muerte de Franz en mayo de 2010. Les Friction se anunció en noviembre de 2011, y su álbum de debut homónimo se lanzó el siguiente enero.",
      "Fuente: http://www.wikiwand.com/en/Les_Friction"]
    }},
    {id:3,color:"#304D6D",artista:"Caravan Palace",album:"<|°_°|>", anio:"2015", valoracion:[1,2,3,4,5], imagen:"http://www.w-lab.fr/wp-content/uploads/2013/01/COVER-CP-DEF-2400x2400.jpg",
    songs:['1. Lone Digger (3:49)',
    '2. Comics (3:32)',
    '3. Mighty (featuring JFTH) (3:21)',
    '4. Aftermath (3:05)',
    '5. Wonderland (3:10)',
    '6. Tattoos (3:27)',
    '7. Midnight (3:25)',
    '8. Russian (4:01)',
    '9. Wonda (3:44)',
    '10. Human Leather Shoes for Crocodile Dandies (4:33)',
    '11. Lay Down (3:08)'
    ],
    biografia:
    {
      image: "https://images7.alphacoders.com/641/641620.jpg",
      parrafos: ["Caravan Palace es un autodenominado grupo electro-swing de París, Francia, que hizo su debut completo en 2008. Compuesto por Charles Delaporte (bajo, programación), Arnaud Vial (guitarra, programación), Hugues Payen (violín, programación ), Zoé Colotis (voz), Antoine Toustou (electrónica, trombón) y Chapi (clarinette), el grupo está principalmente inspirado en Django Reinhardt, pero también cita a Vitalic, Cab Calloway, Justice, Lionel Hampton y Daft Punk entre sus influencias. CP hizo su debut homónimo con el sello independiente francés Wagram Music. Promovido con el lanzamiento de Jolie Coquine como single, Caravan Palace fue muy bien recibido, llegó al Top 20 de la lista de álbumes franceses y fue aclamado por sus inclinaciones al jazz tradicional. Caravan Palace regresó en 2011 con el Clash EP, seguido un año más tarde por su segundo álbum, Panic. El caprichoso Robot Face, llegó en 2015. Trazó en Francia, Bélgica y Suiza, además de las listas de danza británica y estadounidense.",
      "Fuente: https://itunes.apple.com/us/artist/caravan-palace/293238693/"]
    }},
    {id:4,color:"#21897E",artista:"Gorillaz",album:"Humanz", anio:"2017", valoracion:[1,2,3,4,5], imagen:"https://img.apmcdn.org/72919f8057242b2533c1038f95667f66f4601d69/uncropped/0d19c3-20170323-humanz-art.jpg",
    songs:['1. Intro:I Switched My Robot Off (0:24)',
    '2. Ascension (2:36)',
    '3. Strobelite (4:33)',
    '4. Saturnz Barz (3:02)',
    '5. Momentz (3:17)',
    '6. Interlude:The Non-Conformist Oath (0:22)',
    '7. Submission (3:22)',
    '8. Charger (3:34)',
    '9. Interlude:Elevator Going Up (0:05)',
    '10. Andromeda (3:18)',
    '11. Busted and Blue (4:37)',
    '12. Interlude:Elevator Going Up (0:05)',
    '13. Andromeda (3:18)',
    '14. Busted and Blue (4:37)',
    '15. Interlude:Talk Radio (0:20)',
    '16. Carnival (2:16)',
    '17. Let Me Out (2:56)',
    '18. Interlude:Penthouse (0:12)',
    '19. Andromeda (3:18)',
    '20. Busted and Blue (4:37)',
    ],
    biografia:
    {
      image: "https://i0.wp.com/www.gorillaz.com/images/humanztour2017thumb.png",
      parrafos: ["Considerado como el primer grupo virtual de hip-hop, Gorillaz combinó los talentos musicales de Dan The Automator Nakamura, Blur's Damon Albarn, Miho Hatori de Cibo Matto y Tina Weymouth y Chris Frantz de Tom Tom Club, con las sorprendentes imágenes de Jamie Hewlett, más conocidas como Creadora del cómic de culto Tank Girl. La banda virtual está formada por los cuatro miembros de la banda animada: 2D (voz, teclados), Murdoc Niccals (bajo), Noodle (guitarra) y Russel Hobbs (batería, percusión). Gorillaz tiene una historia oscura y humorística.","Murdoc inadvertidamente puso 2D en estado de coma mientras intentaba robar teclados y conducir de manera imprudente. Russel y su familia volvieron a Inglaterra desde Nueva York debido a que Russel fue poseído por un demonio, estuvo en coma durante 4 años hasta que fue salvado por un exorcismo, y estuvo en el extremo equivocado de un tiroteo, que contribuyó a sus habilidades de percusión y rap, ya que los espíritus de sus amigos residen en él. Noodle llegó a una caja de FedEx de Japón después de que se publicara un anuncio para un guitarrista. Según la trama, el nombre legal del personaje 2D es Stuart Tusspot. Su apodo original era Stu-Pot. Se convirtió en 2D después de los accidentes causados ​​por Murdoc, lo que le provocó 2 abolladuras en la cabeza (2D en dos abolladuras).","Nadie sabe cuál es el nombre real de Noodle, pero se dice que se llamó Noodle porque esa fue la primera palabra que dijo en inglés. La banda vive en los también ficticios estudios de Kong, en lo alto de una montaña en el centro de un cementerio en Essex.",
      "Fuente: http://gorillazweb.yaia.com/biography.html"]
    }}
  ]
  constructor(public navCtrl: NavController) {
    
  }
  clickCover(id: number)
  {
    this.navCtrl.push(this.cover, this.discos[id]);
    console.log(id);
  }
  clickBio(id: number)
  {
    this.navCtrl.push(this.bio, this.discos[id]);
    console.log(id);
  }
  clickS(id: number)
  {
    this.navCtrl.push(this.songs, this.discos[id]);
    console.log(id);
  }


}
