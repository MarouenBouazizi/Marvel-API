import React from 'react';
import { CardDeck, Row, Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import API from '../utils/API';
import CharacterList from './CharacterList';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            currentPage: 1,
            charactersPerPage: 4
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        API.dashboard().then(results => {
          this.setState({characters: results})
        })
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    

    render() {
        const { characters, currentPage, charactersPerPage } = this.state;
        const indexOfLastCharacter = currentPage * charactersPerPage;
        const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
        const currentCharacter = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
        
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="thumbnail">
                <Container>
                    <CardDeck>
                        <Row>
                            <CharacterList characters={currentCharacter} />
                        </Row>
                    </CardDeck>
                    <footer>
                        <Pagination aria-label="Page navigation example">
                            {
                                pageNumbers.map((number) =>
                                    <PaginationItem key={number} id={number} >
                                        <PaginationLink key={number} id={number} onClick={this.handleClick} >
                                            {number}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            }
                        </Pagination>
                    </footer>
                </Container>
            </div>
          );
    }
}


export default Dashboard;
