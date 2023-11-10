// import React, { Component } from 'react';
import React from 'react';
// import { Media } from 'reactstrap';
// import {
//     Card, CardImg, CardImgOverlay, CardText, CardBody,
//     CardTitle
// } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import DishDetail from './DishdetailComponent';
import { Loading } from './LoadingComponent';
import {
    CardBody, CardSubtitle, CardText
} from 'reactstrap';
// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // Chuyển qua lưu trữ ở file
//             // dishes: [
//             //     {
//             //         id: 0,
//             //         name: 'Uthappizza',
//             //         image: 'assets/images/uthappizza.png',
//             //         category: 'mains',
//             //         label: 'Hot',
//             //         price: '4.99',
//             //         description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
//             //     },
//             //     {
//             //         id: 1,
//             //         name: 'Zucchipakoda',
//             //         image: 'assets/images/zucchipakoda.png',
//             //         category: 'appetizer',
//             //         label: '',
//             //         price: '1.99',
//             //         description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
//             //     },
//             //     {
//             //         id: 2,
//             //         name: 'Vadonut',
//             //         image: 'assets/images/vadonut.png',
//             //         category: 'appetizer',
//             //         label: 'New',
//             //         price: '1.99',
//             //         description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
//             //     },
//             //     {
//             //         id: 3,
//             //         name: 'ElaiCheese Cake',
//             //         image: 'assets/images/elaicheesecake.png',
//             //         category: 'dessert',
//             //         label: '',
//             //         price: '2.99',
//             //         description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
//             //     }
//             // ],
//             selectedDish: null
//         };
//     }
//     // onDishSelect(dish) {
//     //     this.setState({ selectedDish: dish });
//     // }
//     // renderDish(dish) {
//     //     if (dish != null)
//     //         return (
//     //             <Card>
//     //                 <CardImg top src={dish.image} alt={dish.name} />
//     //                 <CardBody>
//     //                     <CardTitle>{dish.name}</CardTitle>
//     //                     <CardText>{dish.description}</CardText>
//     //                 </CardBody>
//     //             </Card>
//     //         );
//     //     else
//     //         return (
//     //             <div></div>
//     //         );
//     // }

//     render() {
//         // dishes được kế thừa từ App.js nên thay state bằng props
//         // const menu = this.state.dishes.map((dish) => {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 // <div key={dish.id} className="col-12 mt-5">
//                 //     <Media tag="li">
//                 //         <Media left middle>
//                 //             <Media object src={dish.image} alt={dish.name} />
//                 //         </Media>
//                 //         <Media body className="ml-5">
//                 //             <Media heading>{dish.name}</Media>
//                 //             <p>{dish.description}</p>
//                 //         </Media>
//                 //     </Media>
//                 // </div>
//                 <div className="col-12 col-md-5 m-1">
//                     {/* <Card key={dish.id}
//                         onClick={() => this.onDishSelect(dish)}> */}
//                     <Card key={dish.id}
//                         onClick={() => this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>

//             );
//         });

//         return (
//             // <div className="container">
//             //     <div className="row">
//             //         <Media list>
//             //             {menu}
//             //         </Media>
//             //     </div>
//             // </div>
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 {/* <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         {this.renderDish(this.state.selectedDish)}
//                     </div>
//                 </div> */}
//                 <DishDetail selectedDish={this.state.selectedDish} />
//             </div>

//         );
//     }
// }
// function RenderMenuItem({ dish, onClick }) {
// function RenderMenuItem({ dish }) {
//     return (
//         <Card
//         // onClick={() => onClick(dish.id)}>
//         >
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay>
//                 <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//         </Card>
//     );
// }
// function RenderMenuItem({ dish, onClick }) {
//     return (
//         <Card>
//             <Link to={`/menu/${dish.id}`} >
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardImgOverlay>
//                     <CardTitle>{dish.name}</CardTitle>
//                 </CardImgOverlay>
//             </Link>
//         </Card>
//     );
// }
// function RenderCard({ item, isLoading, errMess }) {

//     if (isLoading) {
//         return (
//             <Loading />
//         );
//     }
//     else if (errMess) {
//         return (
//             <h4>{errMess}</h4>
//         );
//     }
//     else
//         return (
//             <Card>
//                 <CardImg src={item.image} alt={item.name} />
//                 <CardBody>
//                     <CardTitle>{item.name}</CardTitle>
//                     {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//                     <CardText>{item.description}</CardText>
//                 </CardBody>
//             </Card>
//         );

// }
function RenderMenuItem({ dish, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
}
const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
                {/* <RenderMenuItem dish={dish} /> */}
                {/* <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} /> */}
                <RenderMenuItem dish={dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
            </div>
        );
    });

    return (
        // <div className="container">
        //     <div className="row">
        //         {menu}
        //     </div>
        // </div>
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>

    );
}

export default Menu;
