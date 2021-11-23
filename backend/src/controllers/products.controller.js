import Product from '../models/Products'


export const createProduct = async(req, res) => {
    try {
        const { nombre, ObjGenerales, ObjEspecificos, presupuesto,fechaInicio, fechaTerminacion, crea, fase } = req.body
    const producto = new Product({
        nombre,
        ObjGenerales,
        ObjEspecificos,
        presupuesto,
        fechaInicio,
        fechaTerminacion,
        crea,
        fase
    })
    const productSaved = await producto.save()
    res.status(201).json(productSaved)
    console.log(productSaved);
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async(req, res) => {
    const productosSaved = await Product.find()
    res.json(productosSaved)
}

export const getProductById = async(req, res) => {
    const productEspecifico = await Product.findById(req.params.productId);
    res.status(200).json(productEspecifico)
}
export const updateProductById = async(req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.json, {
        new: true
    });
    res.status(204).json(updatedProduct);
}
export const deleteProductById = async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    res.status(204).json();
}