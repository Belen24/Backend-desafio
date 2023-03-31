
class ProductManager {
    constructor(){
        this.products= [];
    }

    getProduct (){
        return this.products;
    }


    addProduct (title, description, price,thumbnail,code,stock){
        //Formula para validar que todos los campos sean completados
        if (!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("Por favor completar todos los campos solicitados")
        }

        //Formula para evitar que un codigo se repita
        let codeExist= this.products.some ((product) => product.code === code)

        if(codeExist){
            return console.log("Codigo ingresado ya se encuentra registrado")
        }
        
        let newId= this.products.length +1;
        let agregarProducto = {
            id:newId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,

            
        }
            
        this.products.push(agregarProducto);
        //console.log("Producto agredado", agregarProducto);  


    }
 

    getProductById (idProducto){
     
        //Metodo para buscar ID del producto
        let buscarIdProducto = this.products.find (producto => producto.id === idProducto);

       

        if(buscarIdProducto){
            console.log(buscarIdProducto);
        }

        else{
            console.log("Error en la busqueda, producto no encontrado")
        }


    }
}

//Proceso para agregar y visualizar productos
let nuevoProducto= new ProductManager();
nuevoProducto.addProduct ("Aros", "Aros luna plata 925", 5200, "https://joyaspremium.cl/wp-content/uploads/2021/12/DAD-25.png", "abc123", 25);
nuevoProducto.addProduct ("Anillo", "Anillo de plata 925", 8500, "https://e7.pngegg.com/pngimages/798/638/png-clipart-wedding-ring-jewellery-silver-gold-ring-love-gemstone.png", "xyz456", 15);
console.log("Productos: ", nuevoProducto.getProduct());


// Ejemplo de prueba de busqueda por ID
nuevoProducto.getProductById (4); 

// Ejemplo prueba: ingreso de producto incompleto
nuevoProducto.addProduct ("Pulsera"); 

//Ejemplo de prueba al ingresar un codigo repetido
nuevoProducto.addProduct ("Collar", "Collar Flor de loto", 12500, "https://ripleycl.imgix.net/https%3A%2F%2Ftodojoyas.cl%2F3587-large_default%2Fcollar-plata-925-flor-de-loto.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=bf4c944ffcff14348ccb37fbc09f4d18", "xyz456", 15);






