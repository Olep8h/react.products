import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from './components/Modal'
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {Product} from "./components/Product";
import {useState} from "react";
import {CreateProduct} from "./components/Createproduct";
import {IProduct} from "./models";
import {Navigation} from "./components/Navigation";


function App() {
    const {loading, error, products, addProduct} = useProducts()
    const [modal, setModal] = useState( false)

    const createHandLer = (product: IProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            { loading && <Loader /> }
            { error && <ErrorMessage error={error} /> }
            {<Navigation/>}
            { products.map(product => <Product product={product} key={product.id} />) }


            {modal && <Modal title="Create new product" onClose={() => setModal( false)}>
                <CreateProduct onCreate={createHandLer} />
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 pu-3"
                onClick={() => setModal(true)}
            >+</button>
        </div>
    )
}

export default App;
