import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, Button, Col} from 'reactstrap';

import ModalDetails from './ModalDetails'

export class CharacterList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowing: false,
            character: []
        }
    }

    openModalHandler = (char) => {
        this.setState({
            isShowing: true,
            character: char
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return(
            this.props.characters.map((character, index) =>
                <Col sm="3" key={index} id={index}>
                    <Card>
                        <CardImg top width="100%" src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name}/>
                        <CardBody>
                            <CardTitle>{character.name}</CardTitle>
                            <Button  onClick={() => this.openModalHandler(character)}>Description</Button>
                        </CardBody>
                    </Card>
                    <ModalDetails 
                         id={index} 
                         character={this.state.character} 
                         show={this.state.isShowing}
                         close={this.closeModalHandler}
                    ></ModalDetails>
                </Col>
            )
        )
    }
}


export default CharacterList;
