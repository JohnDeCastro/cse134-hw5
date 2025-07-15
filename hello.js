class HelloJohn extends HTMLElement{
    constructor(){
        super();
        console.log("Hello world from <hello-john>!");
    }
}

customElements.define("hello-john", HelloJohn);