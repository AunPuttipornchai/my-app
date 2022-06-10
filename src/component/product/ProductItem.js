import React, { Component } from "react";


//fuction Props

// const ProductItem = (props) => {
//     const {productName,unitPrice} = props;
//     return (
//         <div>
//             <p>{productName}</p>
//             <p>{unitPrice}</p>
//         </div>
//     )
// }

// class Props
class ProductItem extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor : " + props.productName + props.unitPrice);

    }
    
    render() {
        const {productName,unitPrice} = this.props;
        return (
            <div>
            <p>{productName}</p>
            <p>{unitPrice}</p>
        </div>
        )
    }
}

export default ProductItem