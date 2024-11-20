import React,{useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'

const EventModal = ({event, onClose, removeEvent}) =>{
    const [editedEvent, setEditedEvent] = useState({...event});


    

    

    return(
        <Modal show={true} onHide={onClose} centered>
            <Modal.Header>
                <Modal.Title>{editedEvent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name='title' value={editedEvent.title} />
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} name='description' value={editedEvent.description} />
                    </Form.Group>

                    
                </Form>
            </Modal.Body>
            
        </Modal>
    )
}

export default EventModal;