import React from 'react';

class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         title : "Mobile Phone",
    //         price : 9999,
    //         qty : 1,
    //         img : ''
    //     }
    // }

    // increaseQty= () =>  {
    //     //this.state.qty += 1;
    //     // console.log('this' , this );
    //     //console.log('this.state' , this.state );

    //     // setState form 1 (object form)
    //     // this.setState({
    //     //     qty: this.state.qty +1 
    //     // } , () => {
    //     //     console.log("this.state" , this.state)
    //     // });

    //     //setState form 2 (function form) - if previous state required then use this
    //     this.setState((prevState) => {
    //         return{
    //             qty : prevState.qty + 1
    //         }
    //     });
    // }
    
    // decreaseQty= () => {
    //     // this.setState({
    //     //     qty: this.state.qty -1 
    //     // });

    //     if(this.state.qty > 0){
    //         this.setState((prevState) => {
    //             return{
    //                 qty : prevState.qty - 1
    //             }
    //         })
    //     }
    // }
    
    render(){
        const {price,qty,title} = this.props.productzzz
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={ style.image }  />
                </div>
                <div className="right-block">
                    <div style= { { fontSize:25 } }>{ title }</div>
                    <div style={ { color:'#777' } }>Price : { price } INR</div>
                    <div style={ { color:'#777' } }>Qty : { qty }</div>
                    <div className="cart-item-action">
                        { /* Buttons */ }
                        <img alt="decrease" 
                        className="action-icons" 
                        // onClick={this.decreaseQty}
                        onClick={() => this.props.onDecreaseQty(this.props.productzzz)}
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                        <img alt="increase" 
                        className="action-icons" 
                        // onClick={this.increaseQty.bind(this)}
                        // onClick={this.increaseQty}
                        onClick={() => this.props.onIncreaseQty(this.props.productzzz)}
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img alt="delete" 
                        className="action-icons" 
                        onClick={() => this.props.onDeleteItem(this.props.productzzz.id)}
                        src="https://image.flaticon.com/icons/png/128/2907/2907762.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height:120,
        width:120,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;