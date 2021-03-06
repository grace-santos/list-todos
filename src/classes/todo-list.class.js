import { Todo } from './todo.class';

export class TodoList {

    constructor() {

        // this.todos = []; // no existe en cargar local storage se inicializa
        //this.pendientes;
        this.cargarLocalStorage();
        // console.log(this.contarPendientes());
        
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) { //111

        for( const todo of this.todos ) {

            console.log(id,todo.id);
            
            if( todo.id == id ) {


                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }


    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }

    contarPendientes() {

        
        this.pendientes = this.todos.filter( todo => !todo.completado ).length;
        console.log(this.pendientes);

        //this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];
        
        this.todos = this.todos.map( Todo.fromJson );
    }

}