import React, { Component } from 'react';
import { Parents } from './Parents';

export class ParentsContainer extends Component {

    state = {
        parents: [
            {
                id: 1,
                userName: 'Beckham',
                userPassword: '123456',
                ageOfChildren: 2,
                numberOfChildren: 1,
                feeInEuros: 12,
                experienceInYears: 2,
                locationAms: 'yes'
            }, {
                id: 2,
                userName: 'Messi',
                userPassword: '123456',
                ageOfChildren: 1,
                numberOfChildren: 2,
                feeInEuros: 6,
                experienceInYears: 3,
                locationAms: 'yes'
            }, {
                id: 3,
                userName: 'Rooney',
                userPassword: '123456',
                ageOfChildren: 3,
                numberOfChildren: 3,
                feeInEuros: 12,
                experienceInYears: 5,
                locationAms: 'yes'
            }, {
                id: 4,
                userName: 'De Jong',
                userPassword: '123456',
                ageOfChildren: 4,
                numberOfChildren: 4,
                feeInEuros: 8,
                experienceInYears: 8,
                locationAms: 'yes'
            }, {
                id: 5,
                userName: 'Jane',
                userPassword: '123456',
                ageOfChildren: 12,
                numberOfChildren: 2,
                feeInEuros: 15,
                experienceInYears: 3,
                locationAms: 'yes'
            }, {
                id: 6,
                userName: 'Joop',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 11,
                experienceInYears: 1,
                locationAms: 'yes'
            }, {
                id: 7,
                userName: 'Holla',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 14,
                experienceInYears: 1,
                locationAms: 'yes'
            }, {
                id: 8,
                userName: 'Edo',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 10,
                experienceInYears: 1,
                locationAms: 'yes'
            }, {
                id: 9,
                userName: 'Peter',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 12,
                experienceInYears: 1,
                locationAms: 'yes'
            }, {
                id: 10,
                userName: 'Mario',
                userPassword: '123456',
                ageOfChildren: 7,
                numberOfChildren: 1,
                feeInEuros: 15,
                experienceInYears: 1,
                locationAms: 'yes'
            }
        ]
    }

    renderParents = (parents) => {
        return (
            <Parents
                key={parents.id}
                userName={parents.userName}
                ageOfChildren={parents.ageOfChildren}
                expYears={parents.experienceInYears}
                fee={parents.feeInEuros}
                location={parents.locationAms}
            />
        )
    }

    render() {
        const i = Math.ceil(Math.random() * 10)
        return (
            <div className="parentsContainer">
                {this.state.parents
                    .filter(arr => { return arr.id === i })
                    .map(this.renderParents)
                }

            </div>
        );
    }
}

// {this.state.parents.map(this.renderParents)}