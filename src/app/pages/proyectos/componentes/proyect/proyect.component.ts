import { Component, OnInit } from '@angular/core';
import { Trabajo} from '../../../../interface/trabajo';
import { TrabajoService } from '../../../../services/trabajo.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  trabajos : Trabajo[] = [];
  idTrabajo = '';
  categoria = [];
  urlVideo;
  video;


  constructor(private trabajoService: TrabajoService, private routerEnlace: ActivatedRoute,
    private sanitazer: DomSanitizer, private router: Router) {}

  ngOnInit(): void {
    this.principal()
    this.routerEnlace

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  principal(): void{
    this.idTrabajo = this.routerEnlace.snapshot.paramMap.get("idTrabajo");
    this.trabajoService.getTrabajoId(this.idTrabajo).subscribe(
      resp => {
        this.trabajos = resp.trabajos;
        console.log('data',this.trabajos[0].video);
        this.videos(this.trabajos[0].video)
      }
    )
  }

  videos(url: string): void {
    this.urlVideo = this.sanitazer.bypassSecurityTrustResourceUrl(
      url
    );
  }

}
