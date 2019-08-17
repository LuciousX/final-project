import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Navbar from '../../components/Navbar';
import Pie from '../../components/Dashboard/Pie';
import Tree from '../../components/Dashboard/Tree';
import Projphase from '../../components/Dashboard/Stepprogress';
import Projsummary from '../../components/Dashboard/Projsummary';
import Moduleprogress from '../../components/Dashboard/Moduleprogress';
import API from '../../utils/API';

class Dashboard extends Component {

    state = {
        pieData: {},
        treeData: {}
    };

    componentDidMount = () => {
        //Manipulate Data
    }

    loadProjects = () => {

        let id = "5d521ab554d46540e0170e64";
        let modid = "5d5218c90689120ad0e43b45";
        API.updateModule(id, modid, {
            complete: true
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row className="mt-3">
                        <Col md="3">
                            <Projsummary />
                        </Col>
                        <Col className="text-center">
                            <Projphase />
                        </Col>
                        <Col md="3" className="text-center">
                            <Pie
                                data={this.state.pieData}
                                width={140}
                                height={140}
                                innerRadius={35}
                                outerRadius={70}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" className="text-center">
                            <Tree data={this.state.treeData} />
                        </Col>
                        <Col className="text-center">
                            <Moduleprogress />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;
