import React, { Component } from 'react';
import FormBtn from "../../components/FormBtn";
import AddBtn from "../../components/AddBtn";

import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";




class Articles extends Component {

    state = {
        articles: [],
        savedArticles: [],
        searchTerm: "",
        startYear: "",
        endYear: ""
    }


    componentDidMount() {
        this.loadArticles();
    }

    // Loads all books  and sets them to this.state.books
    loadArticles = () => {
        API.getArticleSaved()
            .then(res => {
                this.setState({
                    savedArticles: res.data.response.docs
                })
                console.log(this.state.savedArticles);
            })
            .catch(err => console.log(err));
    };



    handleChange = (event) => {
        console.log("Helloooo");
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }



    // Submit button for article search
    handleClick = event => {
        event.preventDefault();
        console.log("Submitted");

        API.searchArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
            .then(res => {
                this.setState({
                    articles: res.data.response.docs
                })
                console.log(this.state.articles);
            })
            .catch(err => console.log(err));
    };



 
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    saveArticle = id => {

        const Art = this.state.articles.find(article => article._id === id);
        console.log(Art);
              
        API.saveArticle({
            articleID: Art._id,
            title: Art.headline.main,
            author: Art.byline.original,
            snippet: Art.snippet,
            url: Art.web_url,
            saved: true
        })
                .then(res => this.loadArticles())
                .catch(err => console.log(err));    
    };




    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col size="12">
                            <form className="container form-group">
                                <input className="form-control" type="text" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} />
                                <input className="form-control" type="number" maxLength="4" name="startYear" onChange={this.handleChange} value={this.state.startYear} />
                                <input className="form-control" type="number" maxLength="4" name="endYear" onChange={this.handleChange} value={this.state.endYear} />
                                <FormBtn onClick={this.handleClick} />
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className='text-center'> Search Results</h1>
                    </Row>

                    {this.state.articles.length ? (
                        <Row>
                            {this.state.articles.map(article => {
                                return (
                                    <React.Fragment>
                                        <Col size="10" key={article._id}>
                                            <h3 className=''>{article.headline.main}</h3> <h4 className=''>{article.byline.original}</h4>
                                            <p className=''>{article.snippet}</p>
                                            <a href={article.web_url} target="_blank">WEBURL</a>
                                        </Col>
                                        <Col size="2">
                                            <AddBtn onClick={() => this.saveArticle(article._id)} />
                                        </Col>
                                    </React.Fragment>
                                )
                            })}
                        </Row>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Container>
            </React.Fragment>
        );
    }
}

export default Articles;