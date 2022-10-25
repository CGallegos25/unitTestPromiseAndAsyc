import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PromesasService } from './services/promesas.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'unitTestPromise'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component.title).toEqual('unitTestPromise');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unitTestPromise app is running!');
  });

  it('Test Promesa', fakeAsync(() => {
    // obtener el servicio inyectado en el componente por Angular
    const promesaService: PromesasService = TestBed.get(PromesasService);

    // definir la respuesta de la promesa
    let mockResponse = { id: 1, nombre: 'Cristian' };

    // espiar su método de envío y hacer que devuelva una promesa resuelta
    spyOn(promesaService, 'getEmpleadoP').and.returnValue(Promise.resolve(mockResponse));

    // ejecutar el metodo del componente donde se manda a llamar la promesa
    component.ngOnInit();

    // marcar para desencadenar la ejecución de la devolución de llamada registrada en la promesa
    tick();

    expect(component.responsePromesa).toEqual(mockResponse);
  }));

  it('Test Promesa Resolve', fakeAsync(() => {
    // obtener el servicio inyectado en el componente por Angular
    const promesaService: PromesasService = TestBed.get(PromesasService);

    // definir la respuesta de la promesa
    let mockResponse = { id: 1, nombre: 'Cristian' };

    // espiar su método de envío y hacer que devuelva una promesa resuelta
    spyOn(promesaService, 'getEmpleadoP').and.returnValue(Promise.resolve(mockResponse));

    // ejecutar el metodo del componente donde se manda a llamar la promesa
    component.getPromesa();

    // marcar para desencadenar la ejecución de la devolución de llamada registrada en la promesa
    tick();

    expect(component.responsePromesa).toEqual(mockResponse);
  }));

  it('Test Promesa Reject', fakeAsync(() => {
    // obtener el servicio inyectado en el componente por Angular
    const promesaService: PromesasService = TestBed.get(PromesasService);

    // definir la respuesta de la promesa
    let mockReject = 'No existe empleado con el id 4';

    // espiar su método de envío y hacer que devuelva una promesa resuelta
    spyOn(promesaService, 'getEmpleado').and.returnValue(Promise.reject(mockReject));

    // ejecutar el metodo del componente donde se manda a llamar la promesa
    component.getPromesa();

    // marcar para desencadenar la ejecución de la devolución de llamada registrada en la promesa
    tick();

    expect(component.rejectPromesa).toEqual(mockReject);
  }));

  it('does a thing', async function() {
    const promesaService: PromesasService = TestBed.get(PromesasService);

    // definir la respuesta de la promesa
    let mockReject = 'El salario del empleado: 1 es de $10000';

    // espiar su método de envío y hacer que devuelva una promesa resuelta
    spyOn(promesaService, 'getInfoUsuario').and.returnValue(Promise.resolve(mockReject));
    await component.getInfoUsuarioF();

    //expect(result).toEqual(someExpectedValue);
  });

  it('does a thing', async function() {
    const promesaService: PromesasService = TestBed.get(PromesasService);

    // definir la respuesta de la promesa
    let mockReject = 'No existe empleado con el id 4';

    // espiar su método de envío y hacer que devuelva una promesa resuelta
    spyOn(promesaService, 'getInfoUsuario').and.returnValue(Promise.reject(mockReject));
    const result = await component.getInfoUsuarioF();

    console.log('RESULTADO: ' + result);
    //expect(result).toEqual(someExpectedValue);
  });

});
