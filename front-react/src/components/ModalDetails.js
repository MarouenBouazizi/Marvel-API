import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, 
    Button, Modal, ModalHeader, ModalBody, ModalFooter, 
    Toast, ToastBody, ToastHeader
} from 'reactstrap';

const ModalDetails = (props) => {
        return(
            <Modal isOpen={props.show} >
                <ModalHeader>{props.character.name}</ModalHeader>
                <ModalBody>
                <Card>
                    <CardImg top width="100%" src={(props.character.length !== 0 ? props.character.thumbnail.path + '.' + props.character.thumbnail.extension : '')} alt={props.character.name}/>
                    <CardBody>
                        <CardTitle>{props.character.name}</CardTitle>
                        <CardText>{props.character.description}</CardText>
                        <div className="p-3 my-2 rounded">
                            <Toast>
                                <ToastHeader>
                                    {(props.character.length !== 0 ? props.character.comics.available + ' Comics' : '')}
                                </ToastHeader>
                                <ToastBody>
                                <ul>
                                    {
                                        (props.character.length !== 0 ? 
                                            props.character.comics.items.slice(0, 3).map((titre, index) =>
                                                <li key={index}>
                                                    {titre.name}
                                                </li>
                                        ) : '')
                                    }
                                    </ul>
                                </ToastBody>
                            </Toast>
                        </div>
                    </CardBody>
                </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.close}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )

}


export default ModalDetails;
