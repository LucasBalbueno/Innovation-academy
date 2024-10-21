import { useState } from "react"
import {Button, Form, Row, Col, Collapse} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

function AddEvent({onAddEvent}){
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        start: '', 
        end: '',   
        color: '',
    })
    const [expanded, setExpanded] = useState(false)

    const handleChange =(event) => {
        const {name, value} = event.target;
        setNewEvent({...newEvent, [name]:value})
    }

    const handleToggleExpanded = (event) => {
        event.stopPropagation();
        setExpanded(!expanded)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(newEvent.title && newEvent.start && newEvent.end){
            const startDate = new Date(newEvent.start);
            const endDate = new Date(newEvent.end);

            if(startDate > endDate){ 
                alert('Data de inicio deve ser anterior a data de término')
                return;
            }
            
            onAddEvent(newEvent)
            setNewEvent({
                title: '',
                description: '',
                start: '', 
                end: '',   
                color: '',
            })
        }
        

    }

    
    return(
        <div className="adicionar p-3 rounded border border-white" style={{backgroundColor: '#e9ecef', color:'#212529'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicTitle'>
                    <Form.Label>Título do Evento</Form.Label>
                    <Form.Control type="text" placeholder="Digite o Título" name="title" value={newEvent.title} onChange={handleChange}/>
                </Form.Group>
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="formBasicStart">
                            <Form.Label>Início</Form.Label>
                            <Form.Control type="datetime-local" name="start" value={newEvent.start} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group controlId="formBasicEnd">
                            <Form.Label>Término</Form.Label>
                            <Form.Control type="datetime-local" name="end" value={newEvent.end} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Collapse in={expanded}>
                    <div>
                        <Form.Group controlId="formBasicDesc">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Digite a descrição" name="description" value={newEvent.description} onChange={handleChange}/>
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicColor">
                            <Form.Label>Cor</Form.Label>
                            <Form.Control type="color" name='color' value={newEvent.color} onChange={handleChange}/>
                        </Form.Group>
                    </div>
                </Collapse>      
                <Button
                    variant="primary"
                    type="button"
                    onClick={handleToggleExpanded}
                    style={{marginTop: '10px', float: 'right'}}
                >
                    {expanded ? <i className="bi bi-arrow-up"></i>:<i className="bi bi-arrow-down"></i> }    
                </Button> 
                <Button
                    variant='success'
                    type='submit'
                    style={{marginTop: '10px', marginRight: '10px'}}
                    disabled={!newEvent.title || !newEvent.start || !newEvent.end}
                >
                    Salvar
                </Button>           

            </Form>
        </div>  
    )
}

export default AddEvent;