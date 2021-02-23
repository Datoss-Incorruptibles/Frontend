import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/* Material */
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';

//
import { HttpClientModule } from '@angular/common/http';
import {TransferHttpCacheModule} from '@nguniversal/common';

 
/*Componnetes */
import { PartidosComponent } from '../app/paginas/partidos/partidos.component';
import { DetalleComponent } from './paginas/partido-detalle/detalle.component';
import { DetallePartidoIndicadoresComponent } from './paginas/partido-detalle/detalle-partido-indicadores/detalle-partido-indicadores.component';
import { PartidoAndinoComponent } from './paginas/partido-detalle/partido-andino/partido-andino.component';
import { ListadoPresidenteComponent } from './paginas/partido-detalle/listado-presidente/listado-presidente.component';
import { ListadoCongresistaComponent } from './paginas/partido-detalle/listado-congresista/listado-congresista.component';
import { SharedModule } from './shared/shared.module';
import { HistoriaPartidoComponent } from './paginas/partido-detalle/historia-partido/historia-partido.component';
import { PartidoPlanGobiernoComponent } from './paginas/partido-detalle/partido-plan-gobierno/partido-plan-gobierno.component';

/*Componentes Candidato */
import { CandidatosComponent } from '../app/paginas/candidatos/candidatos.component';
import { CandidatoDetalleComponent } from '../app/paginas/candidato-detalle/candidato-detalle.component';
import { CandidatoHistoriaComponent } from '../app/paginas/candidato-detalle/candidato-historia/candidato-historia.component';
import { CandidatoMediosComponent } from '../app/paginas/candidato-detalle/candidato-medios/candidato-medios.component';
import { CandidatoPlanGobiernoComponent } from '../app/paginas/candidato-detalle/candidato-plan-gobierno/candidato-plan-gobierno.component';

/*Mi lista  */
import { MilistaComponent } from '../app/paginas/milista/milista.component';

/*Utils */
import {ScrollingModule} from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { CandidatoPresidenteComponent } from '../app/paginas/candidatos/candidato-presidente/candidato-presidente.component';
import { CandidatoCongresistaComponent } from '../app/paginas/candidatos/candidato-congresista/candidato-congresista.component';
import { CandidatoAndinoComponent } from '../app/paginas/candidatos/candidato-andino/candidato-andino.component';
import { HeaderComponent } from '../app/shared/_components/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PartidosComponent,
    DetalleComponent,
    DetallePartidoIndicadoresComponent,
    PartidoAndinoComponent,
    ListadoPresidenteComponent,
    ListadoCongresistaComponent,
    HistoriaPartidoComponent,
    PartidoPlanGobiernoComponent,
    HeaderComponent,

/*Componentes Candidato */
    CandidatosComponent,
    CandidatoPresidenteComponent,
    CandidatoCongresistaComponent,
    CandidatoAndinoComponent,
    CandidatoDetalleComponent,
    CandidatoHistoriaComponent,
    CandidatoMediosComponent,
    CandidatoPlanGobiernoComponent,
    MilistaComponent
  ],
  exports:[
    PartidosComponent,
    DetalleComponent,
    DetallePartidoIndicadoresComponent,
    PartidoAndinoComponent,
    ListadoPresidenteComponent,
    ListadoCongresistaComponent,
    HistoriaPartidoComponent,
    PartidoPlanGobiernoComponent,
    HeaderComponent,

    /*Componentes Candidato */
    CandidatosComponent,
    CandidatoPresidenteComponent,
    CandidatoCongresistaComponent,
    CandidatoAndinoComponent,
    CandidatoDetalleComponent,
    CandidatoMediosComponent,
    CandidatoPlanGobiernoComponent,
    MilistaComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    TransferHttpCacheModule,   
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*Material */
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatInputModule,
    MatAutocompleteModule,
    MatExpansionModule,
    SharedModule,
    ScrollingModule,
    InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
