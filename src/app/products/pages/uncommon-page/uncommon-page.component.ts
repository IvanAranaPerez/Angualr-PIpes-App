import { Component } from '@angular/core';
import { interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select

  public name: string = 'Ivan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural

  public clients: string[] = ['Ivan','Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // JSON & KeyValue Pipe

  public person = {
    name: 'Ivan',
    age: 21,
    address: 'Cancún, México'
  }

  // Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value)),
  );

  // Asunc Pipe con promesa

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otra persona'
    }, 3500);
  })


}
