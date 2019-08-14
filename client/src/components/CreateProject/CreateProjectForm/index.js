import React from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import '../../styles/createprojectform.scss';
import '../../styles/variables.scss';


// const createProj = (props) => {
export default class RegForm extends React.Component {
    render() {
        return (
            <>
                {console.log("create proj form")}
                {console.log(this.props)}
                <Container className="form-holder">
                    <Form>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="projName">Project Name: </Label>
                                    <Input type="text" id="projName" name="projName" value={this.props.name}
                                        placeholder="Project Name" onChange={this.props.data.handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="dueDate">ETA: </Label>
                                    <Input
                                        type="date"
                                        name="dueDate"
                                        id="dueDate"
                                        value={this.props.data.dueDate}
                                        onChange={this.props.data.handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="projDesc">Project Description:</Label>
                                    <Input type="textarea" name="projDesc" value={this.props.data.projDesc}
                                        id="projDesc" onChange={this.props.data.handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Button color="primary" className="m-2">Create</Button>
                        </Row>
                    </Form>
                </Container>
            </>
        );
    }
}
// export default createProj;