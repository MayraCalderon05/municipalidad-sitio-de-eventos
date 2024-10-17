export class Evento {
    constructor(
        public id: number,
        public nombre: string,
        public fecha_inicio: Date,
        public fecha_finalizacion: Date,
        public descripcion: string,
        public img: string,
    ) { }
}

