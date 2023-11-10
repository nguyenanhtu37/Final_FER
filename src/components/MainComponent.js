import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';
// import { addComment } from '../redux/ActionCreators';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => ({
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
});
const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }

});

class Main extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     dishes: DISHES,
        //     comments: COMMENTS,
        //     promotions: PROMOTIONS,
        //     leaders: LEADERS
        //     // selectedDish: null
        // };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}

                />
            );
        }
        // const DishWithId = (match) => {
        const DishWithId = () => {
            const { dishId } = useParams();
            return (
                // <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                //     comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
                <DishDetail
                    // dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    // comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
                    addComment={this.props.addComment}
                />
            );
        };



        return (
            <div>
                {/* <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                <Routes>
                    <Route path='/home' Component={HomePage} />
                    <Route exact path='/contactus' Component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    {/* <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> */}
                    <Route exact path='/menu' element={<Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    {/* <Route to="/home" /> */}
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route exact path='/contactus' Component={Contact} />
                    <Route path='/menu/:dishId' Component={DishWithId} />
                </Routes>
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
