class Person {
	constructor(nombre = 'Fulano', apellido = 'Mengano') {
		this.nombre = nombre
		this.apellido = apellido
	}

	saludar() {
		alert(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
	}
}

const yo = new Person('Jaime', 'Suncin')
yo.saludar()
