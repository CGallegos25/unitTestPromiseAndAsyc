import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromesasService {

  empleados = [
    {
        id: 1,
        nombre: 'Cristian'
    },
    {
        id: 2,
        nombre: 'Israel'
    },
    {
        id: 3,
        nombre: 'Joselyn'
    }
  ];

  empleadosC = [
    {
        id: 1,
        nombre: 'Cristian'
    },
    {
        id: 2,
        nombre: 'Israel'
    },
    {
        id: 3,
        nombre: 'Joselyn'
    }
];

salariosC = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 14000
    }
];

  constructor() { }

  getEmpleado(id = 1): Promise<any> {
    return new Promise((resolve, reject) => {
        const empleado = this.empleados.find(e => e.id === id);
        (empleado)
        ? resolve(empleado)
        : reject(`No existe empleado con el id ${id}`);
    });
  }

  getEmpleadoP(): Promise<any> {
    const empleado = this.empleados.find(e => e.id === 1);
    return Promise.resolve(
      empleado
    );
  }

  getEmpleadoC(id: any): any {
    return new Promise((resolve, reject) => {
        const empleado = this.empleadosC.find( e => e.id === id)?.nombre;

        (empleado)
        ? resolve(empleado)
        : reject(`No existe empleado con el id ${id}`);
    });
}

getSalarioC(id: any): any {
    return new Promise((resolve, reject) => {
        const salario = this.salariosC.find( e => e.id === id)?.salario;

        (salario)
        ? resolve(salario)
        : reject(`No existe salario para el empleado con id ${id}`);
    });
}

  getInfoUsuario = async (id = 1) => {
    // Para saber si hay algun error dentro de una funcion async se usa try{} catch() {}
    try {
        // await solo se puede agregar dentro de una funcion async(Promesa)
        // Esto seria el caso cuando se manda a llamar 'resolve' en una promesa
        const empleado = await this.getEmpleadoC(id);
        const salario = await this.getSalarioC(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (err) {
        // Esto seria el caso cuando se manda a llamar 'reject' en una promesa
        throw err;
    }
}
}
